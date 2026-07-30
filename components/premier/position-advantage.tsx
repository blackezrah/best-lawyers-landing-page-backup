'use client'

import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const SCENE_SIZE = { width: 1536, height: 1024 }
const SCREEN_BOUNDS = { x: 238, y: 114, width: 1063, height: 610 }
const CURSOR_TIP_RATIO = { x: 99 / 350, y: 56 / 350 }

const PREMIER_PROFILES = [
  'premier-profile-1.png',
  'premier-profile-2.png',
  'premier-profile-3.png',
  'premier-profile-4.png',
  'premier-profile-5.png',
] as const

const STANDARD_PROFILES = [
  'standard-profile-1.png',
  'standard-profile-2.png',
  'standard-profile-3.png',
  'stnadard-profile-4.png',
  'standard-profile-5.png',
] as const

const SCREEN_STYLE: CSSProperties = {
  left: `${(SCREEN_BOUNDS.x / SCENE_SIZE.width) * 100}%`,
  top: `${(SCREEN_BOUNDS.y / SCENE_SIZE.height) * 100}%`,
  width: `${(SCREEN_BOUNDS.width / SCENE_SIZE.width) * 100}%`,
  height: `${(SCREEN_BOUNDS.height / SCENE_SIZE.height) * 100}%`,
}

const PROFILE_GRID_STYLE: CSSProperties = {
  left: '7.85%',
  right: '7.85%',
  top: '45.6%',
  columnGap: '1.45%',
  rowGap: '2.35%',
}

const CARD_ASPECT_RATIO = '496 / 723'
const CURSOR_SIZE = '5.15%'

type CursorPath = {
  startX: number
  startY: number
  targetX: number
  targetY: number
}

type SceneBox = {
  left: number
  top: number
  width: number
  height: number
}

export function PositionAdvantage() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const layerRef = useRef<HTMLDivElement | null>(null)
  const screenRef = useRef<HTMLDivElement | null>(null)
  const profileRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, margin: '-120px' })
  const active = Boolean(inView)
  const [cursorPath, setCursorPath] = useState<CursorPath | null>(null)
  const [sceneBox, setSceneBox] = useState<SceneBox | null>(null)
  const [motionReady, setMotionReady] = useState(false)
  const [cursorSettled, setCursorSettled] = useState(false)

  const syncSceneBox = useCallback(() => {
    const layer = layerRef.current

    if (!layer) return false

    const layerRect = layer.getBoundingClientRect()
    const sceneScale = Math.max(layerRect.width / SCENE_SIZE.width, layerRect.height / SCENE_SIZE.height)
    const width = SCENE_SIZE.width * sceneScale
    const height = SCENE_SIZE.height * sceneScale

    setSceneBox({
      left: (layerRect.width - width) / 2,
      top: (layerRect.height - height) / 2,
      width,
      height,
    })

    return true
  }, [])

  const resolveTarget = useCallback(() => {
    const screen = screenRef.current
    const profile = profileRef.current
    const cursor = cursorRef.current

    if (!screen || !profile || !cursor) return false

    const screenRect = screen.getBoundingClientRect()
    const profileRect = profile.getBoundingClientRect()
    const cursorRect = cursor.getBoundingClientRect()

    if (!screenRect.width || !screenRect.height || !profileRect.width || !profileRect.height || !cursorRect.width) {
      return false
    }

    const targetX = profileRect.left - screenRect.left + profileRect.width * 0.5 - cursorRect.width * CURSOR_TIP_RATIO.x
    const targetY = profileRect.top - screenRect.top + profileRect.height * 0.17 - cursorRect.height * CURSOR_TIP_RATIO.y
    const travelX = Math.min(Math.max(screenRect.width * 0.24, 250), 350)
    const travelY = Math.min(Math.max(screenRect.height * 0.18, 110), 170)

    setCursorPath({
      targetX,
      targetY,
      startX: targetX + travelX,
      startY: targetY + travelY,
    })

    return true
  }, [])

  useEffect(() => {
    let firstFrame = 0
    let secondFrame = 0

    function scheduleMeasurement() {
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)

      syncSceneBox()

      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          resolveTarget()
        })
      })
    }

    scheduleMeasurement()

    const observer = new ResizeObserver(scheduleMeasurement)
    if (layerRef.current) observer.observe(layerRef.current)
    window.addEventListener('resize', scheduleMeasurement)

    return () => {
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
      observer.disconnect()
      window.removeEventListener('resize', scheduleMeasurement)
    }
  }, [resolveTarget, syncSceneBox])

  useEffect(() => {
    if (!active) return

    let firstFrame = 0
    let secondFrame = 0
    const stableLayoutDelay = reduce ? 0 : 700

    setMotionReady(false)
    setCursorSettled(false)

    const timeout = window.setTimeout(() => {
      syncSceneBox()

      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          setMotionReady(resolveTarget())
        })
      })
    }, stableLayoutDelay)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
    }
  }, [active, reduce, resolveTarget, syncSceneBox])

  const cursorReady = motionReady && Boolean(cursorPath)
  const hoverReady = cursorReady
  const cursorIdlePosition = cursorPath
    ? {
        opacity: 0,
        x: cursorPath.startX,
        y: cursorPath.startY,
      }
    : {
        opacity: 0,
        x: 0,
        y: 0,
      }
  const cursorAnimation =
    cursorReady && cursorPath
      ? cursorSettled
        ? {
            opacity: 1,
            x: cursorPath.targetX,
            y: cursorPath.targetY,
          }
        : {
            opacity: 1,
            x: reduce
              ? cursorPath.targetX
              : [
                  cursorPath.startX,
                  cursorPath.targetX + (cursorPath.startX - cursorPath.targetX) * 0.72,
                  cursorPath.targetX + (cursorPath.startX - cursorPath.targetX) * 0.43,
                  cursorPath.targetX + (cursorPath.startX - cursorPath.targetX) * 0.16,
                  cursorPath.targetX,
                  cursorPath.targetX + 3,
                  cursorPath.targetX,
                ],
            y: reduce
              ? cursorPath.targetY
              : [
                  cursorPath.startY,
                  cursorPath.targetY + (cursorPath.startY - cursorPath.targetY) * 0.72,
                  cursorPath.targetY + (cursorPath.startY - cursorPath.targetY) * 0.44,
                  cursorPath.targetY + (cursorPath.startY - cursorPath.targetY) * 0.18,
                  cursorPath.targetY,
                  cursorPath.targetY - 1,
                  cursorPath.targetY,
                ],
          }
      : {}
  const cursorTransition = cursorSettled
    ? {
        x: { duration: reduce ? 0 : 0.18, ease: EASE_OUT },
        y: { duration: reduce ? 0 : 0.18, ease: EASE_OUT },
        opacity: { duration: 0 },
      }
    : {
        x: {
          duration: reduce ? 0 : 1.1,
          delay: reduce ? 0 : 0.2,
          times: [0, 0.16, 0.42, 0.72, 0.9, 0.96, 1],
          ease: EASE_OUT,
        },
        y: {
          duration: reduce ? 0 : 1.1,
          delay: reduce ? 0 : 0.2,
          times: [0, 0.16, 0.42, 0.72, 0.9, 0.96, 1],
          ease: EASE_OUT,
        },
        opacity: { duration: 0, delay: reduce ? 0 : 0.2 },
      }
  const activeCursorTransition = cursorReady ? cursorTransition : { duration: 0 }

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 translate-x-[165%] sm:translate-x-[140%] md:translate-x-[118%] lg:translate-x-[52%] xl:translate-x-[32%]">
        <div ref={layerRef} aria-hidden="true" className="absolute inset-0">
          {sceneBox && (
            <div className="absolute" style={sceneBox}>
              <Image
                src="/monitor-scene/environment.png"
                alt=""
                fill
                sizes="100vw"
                className="object-fill"
                priority={false}
              />
              <motion.div
                ref={screenRef}
                className="absolute overflow-hidden"
                style={SCREEN_STYLE}
                initial={{
                  filter: reduce ? 'blur(0px) contrast(1) brightness(1)' : 'blur(2px) contrast(.96) brightness(.92)',
                }}
                animate={active ? { filter: 'blur(0px) contrast(1) brightness(1)' } : {}}
                transition={{ duration: reduce ? 0 : 0.62, ease: EASE_OUT }}
              >
                <Image
                  src="/monitor-scene/bl-ui-search.png"
                  alt=""
                  fill
                  sizes="70vw"
                  className="object-fill"
                  priority={false}
                />
                <div className="absolute grid grid-cols-5" style={PROFILE_GRID_STYLE}>
                  <motion.div
                    className="contents"
                    initial={{ filter: 'brightness(1) contrast(1)' }}
                    animate={
                      active
                        ? {
                            filter: 'brightness(1.025) contrast(1.01) drop-shadow(0 10px 14px rgba(0,0,0,.18))',
                          }
                        : {}
                    }
                    transition={{ duration: reduce ? 0 : 0.38, delay: reduce ? 0 : 0.68, ease: EASE_OUT }}
                  >
                    {PREMIER_PROFILES.map((profile, index) => (
                      <motion.div
                        key={profile}
                        ref={index === 0 ? profileRef : undefined}
                        data-premier-profile-card={index === 0 ? 'premier-profile-1' : undefined}
                        className="relative origin-center"
                        style={{ aspectRatio: CARD_ASPECT_RATIO }}
                        initial={
                          index === 0
                            ? {
                                y: 0,
                                scale: 1,
                                filter: 'brightness(1)',
                                boxShadow: '0 0 0 rgba(0,0,0,0)',
                              }
                            : false
                        }
                        animate={
                          index === 0 && hoverReady
                            ? {
                                y: reduce ? 0 : -3,
                                scale: reduce ? 1 : 1.012,
                                filter: 'brightness(1.055) contrast(1.012)',
                                boxShadow: '0 18px 30px rgba(0,0,0,.24)',
                              }
                            : {}
                        }
                        transition={{ duration: reduce ? 0 : 0.34, delay: reduce ? 0 : 1.25, ease: EASE_OUT }}
                      >
                        <Image
                          src={`/monitor-scene/${profile}`}
                          alt=""
                          fill
                          sizes="12vw"
                          className="object-fill"
                          priority={false}
                        />
                        {index === 0 && (
                          <>
                            <motion.svg
                              viewBox="0 0 100 146"
                              preserveAspectRatio="none"
                              className="absolute -inset-[2%] overflow-visible text-gold drop-shadow-[0_0_10px_rgba(201,163,91,.48)]"
                            >
                              <motion.rect
                                x="1.5"
                                y="1.5"
                                width="97"
                                height="143"
                                rx="4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.7"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={hoverReady ? { pathLength: 1, opacity: 0.44 } : {}}
                                transition={{ duration: reduce ? 0 : 0.56, delay: reduce ? 0 : 1.25, ease: EASE_OUT }}
                              />
                              <motion.rect
                                x="1.5"
                                y="1.5"
                                width="97"
                                height="143"
                                rx="4"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="1.15"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={hoverReady ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: reduce ? 0 : 0.62, delay: reduce ? 0 : 1.25, ease: EASE_OUT }}
                              />
                            </motion.svg>
                            <motion.span
                              className="absolute left-[34%] top-[5%] h-[21%] w-[32%] rounded-full bg-white/[0.08] mix-blend-screen"
                              initial={{ opacity: 0 }}
                              animate={hoverReady ? { opacity: 1 } : {}}
                              transition={{ duration: reduce ? 0 : 0.34, delay: reduce ? 0 : 1.25, ease: EASE_OUT }}
                            />
                          </>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                  {STANDARD_PROFILES.map((profile) => (
                    <div
                      key={profile}
                      data-standard-profile-card={profile}
                      className="relative"
                      style={{ aspectRatio: CARD_ASPECT_RATIO }}
                    >
                      <Image
                        src={`/monitor-scene/${profile}`}
                        alt=""
                        fill
                        sizes="12vw"
                        className="object-fill"
                        priority={false}
                      />
                    </div>
                  ))}
                </div>
                <motion.div
                  ref={cursorRef}
                  data-premier-cursor="premier-profile-1"
                  className="absolute z-30 aspect-square drop-shadow-[0_8px_14px_rgba(0,0,0,.42)]"
                  style={{ width: CURSOR_SIZE }}
                  initial={false}
                  animate={cursorReady ? cursorAnimation : cursorIdlePosition}
                  transition={activeCursorTransition}
                  onAnimationComplete={() => {
                    if (!cursorReady || cursorSettled) return

                    setCursorSettled(true)
                    requestAnimationFrame(() => {
                      requestAnimationFrame(() => {
                        resolveTarget()
                      })
                    })
                  }}
                >
                  <Image
                    src="/monitor-scene/cursor-icon.webp"
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority={false}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-full bg-[linear-gradient(90deg,#1A1F25_0%,#1A1F25_52%,rgba(26,31,37,0.92)_62%,rgba(26,31,37,0.7)_72%,rgba(26,31,37,0.42)_82%,rgba(26,31,37,0.18)_92%,rgba(26,31,37,0)_100%)] lg:w-[72%] lg:bg-[linear-gradient(90deg,#1A1F25_0%,#1A1F25_58%,rgba(26,31,37,0.9)_68%,rgba(26,31,37,0.62)_78%,rgba(26,31,37,0.32)_88%,rgba(26,31,37,0)_100%)]"
      />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl lg:max-w-[29.5rem] 2xl:max-w-[32rem]">
          <Reveal x={-32}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.04] tracking-[-0.02em] sm:text-6xl">
              The right profile needs to be easy for clients to find when they are ready to hire.
            </h2>
          </Reveal>
          <Reveal delay={0.08} x={-24}>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-ivory/72">
              A competing attorney does not need a stronger credential to appear ahead of you. They need access to the limited placement tier in the same territory.
            </p>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ivory/72">
              Once secured, that allocation is unavailable to another eligible attorney for the term. Waiting does not protect the opportunity. It leaves inventory open.
            </p>
          </Reveal>
          <Reveal delay={0.16} x={-20}>
            <div className="relative mt-12 pl-6">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-0 w-px bg-gold/55"
                initial={{ height: reduce ? 40 : 12, opacity: 0.7 }}
                animate={active ? { height: 40, opacity: 1 } : {}}
                transition={{ duration: reduce ? 0 : 0.3, delay: reduce ? 0 : 1.95, ease: EASE_OUT }}
              />
              <h3 className="font-serif text-2xl font-medium tracking-tight text-ivory">
                The available placement tier will be claimed.
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ivory/75">
                Decide whether your firm belongs there.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
