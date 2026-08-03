'use client'

import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

const DEADLINE_ISO = '2026-09-30T23:59:59-04:00'
const DEADLINE_LABEL = 'September 30, 2026 at 11:59 PM ET'
const DEADLINE_MS = new Date(DEADLINE_ISO).getTime()

type Remaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
  accessibleText: string
}

type CountdownContextValue = {
  remaining: Remaining | null
  deadlineLabel: string
}

const CountdownContext = createContext<CountdownContextValue | null>(null)

function getRemaining(now = Date.now()): Remaining {
  const total = Math.max(0, DEADLINE_MS - now)
  const totalSeconds = Math.floor(total / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const expired = total <= 0

  return {
    days,
    hours,
    minutes,
    seconds,
    expired,
    accessibleText: expired
      ? 'This availability window has closed. Contact us to review remaining markets.'
      : `${days} days, ${hours} hours, ${minutes} minutes remaining until Premier Placement availability closes.`,
  }
}

function useCountdownValue() {
  const [remaining, setRemaining] = useState<Remaining | null>(null)

  useEffect(() => {
    let interval: number | null = null

    const sync = () => setRemaining(getRemaining())

    const start = () => {
      sync()
      if (interval) return
      interval = window.setInterval(sync, 1000)
    }

    const stop = () => {
      if (!interval) return
      window.clearInterval(interval)
      interval = null
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop()
      } else {
        start()
      }
    }

    start()
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return remaining
}

export function CountdownProvider({ children }: { children: ReactNode }) {
  const remaining = useCountdownValue()
  const value = useMemo(
    () => ({
      remaining,
      deadlineLabel: DEADLINE_LABEL,
    }),
    [remaining],
  )

  return <CountdownContext.Provider value={value}>{children}</CountdownContext.Provider>
}

function useCountdown() {
  const context = useContext(CountdownContext)
  if (!context) {
    throw new Error('Countdown components must be used inside CountdownProvider')
  }

  return context
}

function CountdownValue({ value, label }: { value: number | null; label: string }) {
  const reduce = useReducedMotion()
  const display = value === null ? '--' : String(value).padStart(2, '0')

  return (
    <span className="grid min-w-[4.75rem] gap-3 text-center sm:min-w-[6.25rem]">
      <span
        className="relative block h-10 overflow-hidden font-serif text-[2.35rem] leading-none tabular-nums text-ink sm:h-12 sm:text-5xl"
        aria-hidden="true"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            className="absolute inset-0 flex items-center justify-center"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        {label}
      </span>
    </span>
  )
}

function CountdownValues() {
  const { remaining } = useCountdown()
  const values = [
    ['days', remaining?.days ?? null],
    ['hours', remaining?.hours ?? null],
    ['minutes', remaining?.minutes ?? null],
    ['seconds', remaining?.seconds ?? null],
  ] as const

  return (
    <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-9 sm:flex sm:items-start sm:gap-x-7">
      {values.map(([label, value], index) => (
        <div key={label} className="flex items-start justify-center gap-4">
          <CountdownValue value={value} label={label} />
          {index < values.length - 1 && (
            <span aria-hidden="true" className="mt-1 hidden h-12 w-px bg-gold/35 sm:block" />
          )}
        </div>
      ))}
    </div>
  )
}

function CountdownLiveText() {
  const { remaining } = useCountdown()
  const [liveText, setLiveText] = useState('')

  useEffect(() => {
    if (!remaining) return
    if (remaining.expired || remaining.seconds === 0) {
      setLiveText(remaining.accessibleText)
    }
  }, [remaining])

  return (
    <>
      <span className="sr-only">{remaining?.accessibleText ?? 'Premier Placement availability countdown loading.'}</span>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {liveText}
      </span>
    </>
  )
}

export function EditorialCountdown() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const active = useInView(ref, { once: true, amount: 0.35 })
  const { remaining, deadlineLabel } = useCountdown()

  return (
    <motion.div
      ref={ref}
      className="mx-auto mt-24 max-w-4xl border-y border-line px-3 py-18 text-center sm:mt-28 sm:px-8 sm:py-24 lg:mt-32"
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduce ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mx-auto max-w-2xl font-serif text-3xl font-normal leading-tight tracking-tight text-ink sm:text-4xl">
        Premier Placement enrollment for this announcement cycle closes in
      </p>

      <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
        {remaining?.expired ? (
          <p className="mx-auto max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
            This availability window has closed. Contact us to review remaining markets.
          </p>
        ) : (
          <CountdownValues />
        )}
      </div>

      <p className="mx-auto mt-14 max-w-2xl border-t border-gold/30 pt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:mt-16 sm:pt-10">
        Deadline: {deadlineLabel}
      </p>
      <CountdownLiveText />
    </motion.div>
  )
}
