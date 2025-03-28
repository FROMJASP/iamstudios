"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  once?: boolean
  asChild?: boolean
  direction?: "up" | "down" | "left" | "right" | "none"
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  once = true,
  asChild = false,
  direction = "up",
}) => {
  const prefersReducedMotion = useReducedMotion()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Set initial and animate values based on direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: 30 }
  if (direction === "down") initial = { ...initial, y: -30 }
  if (direction === "left") initial = { ...initial, x: 30 }
  if (direction === "right") initial = { ...initial, x: -30 }

  const animate = {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: inView ? 0 : direction === "left" ? 30 : direction === "right" ? -30 : 0,
  }

  const Component = asChild ? motion.div : motion.section

  return (
    <Component
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}

export default RevealSection

