'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { MEETING_URL } from './constants'

const NAV = [
  { label: 'Why Premier', href: '#why-premier' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Client Trust', href: '#client-trust' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-line-dark/40 bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="https://www.bestlawyers.com"
          target="_top"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          aria-label="Best Lawyers — go to bestlawyers.com"
        >
          <Image
            src="/best-lawyers-light-logo.webp"
            alt="Best Lawyers"
            width={434}
            height={88}
            priority
            className="h-auto w-[8.4rem] sm:w-[9.6rem]"
            // Increase brightness so the logo appears white on transparent backgrounds.
            // Replace with a proper white variant of the logo file if supplied.
            style={{ filter: 'brightness(2) saturate(1.2)' }}
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-tight text-ivory/70 transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a
            href={MEETING_URL}
            target="_top"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium tracking-tight text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Check Market Availability
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 text-ivory lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 8h16" /><path d="M4 16h16" /></>}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line-dark/40 bg-ink/95 backdrop-blur-md lg:hidden">
          <nav aria-label="Primary mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ivory/80 transition-colors hover:bg-ivory/5 hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MEETING_URL}
              target="_top"
              rel="noopener noreferrer"
              className="mt-2 rounded-full border border-gold/60 px-3 py-3 text-center text-base font-medium text-gold"
            >
              Check Market Availability
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
