'use client'

import { cn } from '@/lib/utils'
import { useMeetingUrl } from '@/lib/use-meeting-url'

const CTA_LABEL = 'Schedule a Meeting'

type CtaButtonProps = {
  variant?: 'red' | 'gold' | 'ink' | 'outline' | 'ivory'
  size?: 'md' | 'lg'
  className?: string
  fullWidth?: boolean
}

export function CtaButton({ variant = 'gold', size = 'lg', className, fullWidth }: CtaButtonProps) {
  const meetingUrl = useMeetingUrl()
  const base =
    'group inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-tight transition-all duration-300 rounded-full'
  const sizes = {
    md: 'text-sm px-6 py-3',
    lg: 'text-[0.95rem] px-8 py-4',
  }
  const variants = {
    red:
      'bg-coral text-ivory hover:bg-[#d91f24] shadow-[0_1px_0_rgba(255,255,255,0.22)_inset]',
    gold:
      'bg-coral text-ivory hover:bg-[#d91f24] shadow-[0_1px_0_rgba(255,255,255,0.22)_inset]',
    ink:
      'bg-coral text-ivory hover:bg-[#d91f24] shadow-[0_1px_0_rgba(255,255,255,0.22)_inset]',
    ivory:
      'bg-coral text-ivory hover:bg-[#d91f24] shadow-[0_1px_0_rgba(255,255,255,0.22)_inset]',
    outline:
      'border border-line-dark/60 text-ivory hover:border-gold hover:text-gold bg-transparent',
  }

  return (
    <a
      href={meetingUrl}
      target="_top"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], fullWidth && 'w-full', className)}
    >
      <span>{CTA_LABEL}</span>
    </a>
  )
}
