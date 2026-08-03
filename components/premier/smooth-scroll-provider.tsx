'use client'

import Lenis from 'lenis'
import { cancelFrame, frame, MotionConfig, useReducedMotion } from 'motion/react'
import { useEffect, useRef, type ReactNode } from 'react'

type SmoothScrollProviderProps = {
  children: ReactNode
}

const SLOW_FRAME_MS = 24
const SLOW_FRAME_LIMIT = 8

function prefersNativeScroll() {
  if (typeof window === 'undefined') return true

  const coarsePointer = window.matchMedia('(pointer: coarse)').matches
  const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches
  const lowCpuHint = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4

  return coarsePointer || reducedData || lowCpuHint
}

function SmoothScrollRuntime() {
  const reduce = useReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (reduce || prefersNativeScroll()) return

    let previousTime = performance.now()
    let slowFrames = 0
    let smoothingEnabled = true
    let destroyed = false

    const lenis = new Lenis({
      autoRaf: false,
      anchors: {
        offset: -96,
        lerp: 0.18,
      },
      duration: 0.82,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      gestureOrientation: 'vertical',
      lerp: 0.11,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 0.88,
      overscroll: false,
      autoResize: true,
    })

    lenisRef.current = lenis

    const setSmoothing = (enabled: boolean) => {
      if (enabled === smoothingEnabled) return
      smoothingEnabled = enabled

      if (enabled) {
        document.documentElement.dataset.smoothScroll = 'on'
      } else {
        document.documentElement.dataset.smoothScroll = 'native'
        cancelFrame(update)
        lenis.destroy()
        lenisRef.current = null
        destroyed = true
      }
    }

    document.documentElement.dataset.smoothScroll = 'on'

    const update = ({ timestamp }: { timestamp: number }) => {
      const delta = timestamp - previousTime
      previousTime = timestamp

      if (delta > SLOW_FRAME_MS) {
        slowFrames += 1
      } else {
        slowFrames = Math.max(0, slowFrames - 1)
      }

      if (smoothingEnabled && slowFrames >= SLOW_FRAME_LIMIT) {
        setSmoothing(false)
        return
      }

      if (smoothingEnabled) {
        lenis.raf(timestamp)
      }
    }

    frame.update(update, true)

    const onVisibilityChange = () => {
      previousTime = performance.now()
      slowFrames = 0
      if (!document.hidden) {
        lenis.resize()
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      cancelFrame(update)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      delete document.documentElement.dataset.smoothScroll
      if (!destroyed) {
        lenis.destroy()
      }
      lenisRef.current = null
    }
  }, [reduce])

  return null
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollRuntime />
      {children}
    </MotionConfig>
  )
}
