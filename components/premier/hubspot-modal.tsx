'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const HUBSPOT_SCRIPT_SRC = '//js.hsforms.net/forms/embed/v2.js'
const HUBSPOT_FORM_TARGET_ID = 'hubspot-form-embed'

type HubspotModalContextType = {
  openModal: () => void
}

const HubspotModalContext = createContext<HubspotModalContextType | undefined>(undefined)

export function useHubspotModal() {
  const context = useContext(HubspotModalContext)
  if (!context) {
    throw new Error('useHubspotModal must be used within HubspotModalProvider')
  }
  return context
}

function getFocusableElements(container: HTMLElement | null) {
  if (!container) return [] as HTMLElement[]
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute('disabled') && element.getAttribute('tabindex') !== '-1')
}

function postIframeResize() {
  if (typeof window === 'undefined') return
  if (window.parent === window.self) return
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'hubspot-form-height', height }, '*')
}

let hubspotScriptPromise: Promise<void> | null = null

function loadHubspotScript() {
  if (hubspotScriptPromise) return hubspotScriptPromise

  hubspotScriptPromise = new Promise<void>((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is undefined'))
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)
    if (existingScript) {
      if ((window as any).hbspt) {
        resolve()
        return
      }

      existingScript.addEventListener('load', () => resolve())
      existingScript.addEventListener('error', () => reject(new Error('HubSpot script failed to load')))
      return
    }

    const script = document.createElement('script')
    script.src = HUBSPOT_SCRIPT_SRC
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    script.addEventListener('load', () => resolve())
    script.addEventListener('error', () => reject(new Error('HubSpot script failed to load')))
    document.body.appendChild(script)
  })

  return hubspotScriptPromise
}

type HubspotModalProviderProps = {
  children: React.ReactNode
}

export function HubspotModalProvider({ children }: HubspotModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [hasCreatedForm, setHasCreatedForm] = useState(false)
  const [isFormReady, setIsFormReady] = useState(false)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const formContainerRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const restoreOverflowRef = useRef<string>('')

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const cleanupFormContainer = useCallback(() => {
    if (!formContainerRef.current) return
    formContainerRef.current.innerHTML = ''
    setIsFormReady(false)
    setHasCreatedForm(false)
    setHasError(false)
  }, [])

  const closeModal = useCallback(() => {
    cleanupFormContainer()
    setIsOpen(false)
  }, [cleanupFormContainer])

  useEffect(() => {
    if (isOpen) return
    cleanupFormContainer()
  }, [isOpen, cleanupFormContainer])

  useEffect(() => {
    if (!isOpen) return
    restoreOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
    postIframeResize()
    return () => {
      document.body.style.overflow = restoreOverflowRef.current || ''
      postIframeResize()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || hasCreatedForm) return

    let isCancelled = false

    loadHubspotScript()
      .then(() => {
        if (typeof window === 'undefined' || !formContainerRef.current || isCancelled) return

        try {
          ;(window as any).hbspt.forms.create({
            portalId: '22007279',
            formId: 'aae464ef-efe2-474c-834b-0c0361f859c1',
            region: 'na1',
            target: `#${HUBSPOT_FORM_TARGET_ID}`,
            onFormReady: () => {
              if (isCancelled) return
              setIsFormReady(true)
              setHasCreatedForm(true)
              postIframeResize()
            },
            onFormSubmit: () => {
              postIframeResize()
            },
          })
        } catch (error) {
          if (!isCancelled) setHasError(true)
        }
      })
      .catch(() => {
        if (!isCancelled) setHasError(true)
      })

    return () => {
      isCancelled = true
    }
  }, [isOpen, hasCreatedForm])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeModal()
        return
      }

      if (event.key !== 'Tab') return
      if (!contentRef.current) return

      const focusable = getFocusableElements(contentRef.current)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeModal])

  useEffect(() => {
    if (!isOpen) return
    const interval = window.setInterval(postIframeResize, 500)
    return () => window.clearInterval(interval)
  }, [isOpen])

  const value = useMemo(() => ({ openModal }), [openModal])

  return (
    <HubspotModalContext.Provider value={value}>
      {children}
      {isOpen && typeof document !== 'undefined'
        ? createPortal(
            <div
              ref={overlayRef}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 px-4 py-6 backdrop-blur-sm"
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === overlayRef.current) {
                  closeModal()
                }
              }}
            >
              <div
                ref={contentRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="hubspot-modal-title"
                className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-ivory shadow-[0_40px_120px_rgba(8,15,23,0.45)] text-ink"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close form"
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-dark/60 bg-ink text-ivory transition hover:bg-ink-soft"
                  onClick={closeModal}
                >
                  <span aria-hidden="true" className="text-lg font-semibold">×</span>
                </button>
                <div className="px-6 py-8 sm:px-10 sm:py-10">
                  <h2 id="hubspot-modal-title" className="text-balance font-serif text-3xl font-normal tracking-[-0.02em] text-ink sm:text-4xl">
                    Schedule a meeting to claim your Premier Placement
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
                    Complete the form below and we’ll connect you with the team that can help activate your Premier Placement.
                  </p>
                </div>
                <div className="min-h-[22rem] px-6 pb-8 sm:px-10 sm:pb-10">
                  {hasError ? (
                    <div className="rounded-3xl border border-rose-300 bg-rose-50 p-8 text-rose-900">
                      <p className="text-lg font-semibold">We're having trouble loading the contact form.</p>
                      <p className="mt-3 text-sm leading-relaxed text-rose-900/85">
                        Please refresh the page or contact us directly.
                      </p>
                    </div>
                  ) : (
                    <div className="relative min-h-[20rem] rounded-[1.5rem] border border-line-dark/30 bg-ivory/60">
                      {!isFormReady && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-[1.5rem] bg-ivory/80 p-10 text-ink/70">
                          Loading form…
                        </div>
                      )}
                      <div
                        ref={formContainerRef}
                        id={HUBSPOT_FORM_TARGET_ID}
                        className="hubspot-form-embed min-h-[20rem]"
                        aria-live="polite"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </HubspotModalContext.Provider>
  )
}
