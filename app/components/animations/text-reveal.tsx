"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  once?: boolean
  staggerChildren?: number
  as?: React.ElementType
  wordClassName?: string
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  once = true,
  staggerChildren = 0.03,
  as: Component = "h2",
  wordClassName,
}) => {
  const prefersReducedMotion = useReducedMotion()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>
  }

  // Split text into words
  const words = text.split(" ")

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={cn("inline-block", wordClassName)}
          variants={wordVariants}
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default TextReveal

