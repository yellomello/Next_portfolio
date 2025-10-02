"use client"

import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const morphTime = 1.5
const cooldownTime = 0.5

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(Date.now())

  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  const setStyles = useCallback(
    (fraction: number) => {
      const text1 = text1Ref.current
      const text2 = text2Ref.current
      if (!text1 || !text2) return

      const invFraction = 1 - fraction

      // Morphing transformations
      const blur1 = Math.min(8 / invFraction - 8, 4)
      const blur2 = Math.min(8 / fraction - 8, 4)

      const scaleX1 = 1 + 0.3 * fraction
      const scaleY1 = 1 + 0.3 * fraction
      const scaleX2 = 1 + 0.3 * invFraction
      const scaleY2 = 1 + 0.3 * invFraction

      const skew1 = 5 * fraction
      const skew2 = 5 * invFraction

      text1.style.filter = `blur(${blur1}px)`
      text2.style.filter = `blur(${blur2}px)`

      text1.style.opacity = `${Math.pow(invFraction, 0.4)}`
      text2.style.opacity = `${Math.pow(fraction, 0.4)}`

      text1.style.transform = `scaleX(${scaleX1}) scaleY(${scaleY1}) skewX(${skew1}deg)`
      text2.style.transform = `scaleX(${scaleX2}) scaleY(${scaleY2}) skewX(${skew2}deg)`

      text1.textContent = texts[textIndexRef.current % texts.length]
      text2.textContent = texts[(textIndexRef.current + 1) % texts.length]
    },
    [texts]
  )

  const doMorph = useCallback(() => {
    morphRef.current += 0.016
    let fraction = morphRef.current / morphTime
    if (fraction > 1) {
      fraction = 1
      cooldownRef.current = cooldownTime
    }
    setStyles(fraction)
    if (fraction === 1) textIndexRef.current++
  }, [setStyles])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    if (text1 && text2) {
      text1.style.opacity = "0"
      text2.style.opacity = "1"
      text1.style.filter = "none"
      text2.style.filter = "none"
      text1.style.transform = "scaleX(1) scaleY(1) skewX(0deg)"
      text2.style.transform = "scaleX(1) scaleY(1) skewX(0deg)"
    }
  }, [])

  useEffect(() => {
    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const now = Date.now()
      const dt = (now - timeRef.current) / 1000
      timeRef.current = now

      cooldownRef.current -= dt
      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }
    animate()
    return () => cancelAnimationFrame(frameId)
  }, [doMorph, doCooldown])

  return { text1Ref, text2Ref }
}

interface MorphingTextProps {
  texts: string[]
  className?: string
}

export const MorphingText: React.FC<MorphingTextProps> = ({ texts, className }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts)

  return (
    <div
      className={cn(
        "relative mx-auto w-full text-center font-sans font-bold [font-smoothing:antialiased] text-[5rem] md:text-[6rem] lg:text-[8rem] leading-none",
        className
      )}
    >
      <span
        ref={text1Ref}
        className="absolute inset-0 m-auto block w-full opacity-0 transition-none origin-center"
      />
      <span
        ref={text2Ref}
        className="absolute inset-0 m-auto block w-full opacity-1 transition-none origin-center"
      />
    </div>
  )
}
