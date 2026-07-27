import { cn } from '@/lib/utils'

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1 text-gold', className)}>
      <span className="tracking-[0.15em] text-[0.95em] leading-none">
        {'\u2605\u2605\u2605\u2605\u2605'}
      </span>
    </span>
  )
}
