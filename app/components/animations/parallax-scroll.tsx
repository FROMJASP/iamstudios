"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxScrollProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: [number, number]
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  className,
  speed = 0.2,
  direction = "up",
  offset = [-100, 100],
}) => {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()
  const [isReducedMotion, setIsReducedMotion] = useState(prefersReducedMotion)

  useEffect(() => {
    setIsReducedMotion(prefersReducedMotion)
  }, [prefersReducedMotion])

  // Skip animation if user prefers reduced motion
  if (isReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Calculate element position on mount and resize
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [])

  // Calculate parallax range
  const initial = elementTop - clientHeight
  const final = elementTop + (ref.current?.offsetHeight || 0)

  // Transform based on direction
  let transformProp = {}

  if (direction === "up" || direction === "down") {
    const yRange = useTransform(scrollY, [initial, final], direction === "up" ? offset : [offset[1], offset[0]])
    transformProp = { y: yRange }
  } else {
    const xRange = useTransform(scrollY, [initial, final], direction === "left" ? offset : [offset[1], offset[0]])
    transformProp = { x: xRange }
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        style={{
          ...transformProp,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxScroll

