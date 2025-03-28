"use client"

import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useReducedMotion, type Variants } from "framer-motion"

interface StaggeredChildrenProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  staggerDelay?: number
  initialDelay?: number
  once?: boolean
  childClassName?: string
  direction?: "up" | "down" | "left" | "right" | "scale" | "none"
}

export const StaggeredChildren: React.FC<StaggeredChildrenProps> = ({
  children,
  className,
  threshold = 0.1,
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
  childClassName,
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

  // Container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  // Child variants based on direction
  const childVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  if (direction === "up") {
    childVariants.hidden = { ...childVariants.hidden, y: 20 }
    childVariants.visible = { ...childVariants.visible, y: 0 }
  } else if (direction === "down") {
    childVariants.hidden = { ...childVariants.hidden, y: -20 }
    childVariants.visible = { ...childVariants.visible, y: 0 }
  } else if (direction === "left") {
    childVariants.hidden = { ...childVariants.hidden, x: 20 }
    childVariants.visible = { ...childVariants.visible, x: 0 }
  } else if (direction === "right") {
    childVariants.hidden = { ...childVariants.hidden, x: -20 }
    childVariants.visible = { ...childVariants.visible, x: 0 }
  } else if (direction === "scale") {
    childVariants.hidden = { ...childVariants.hidden, scale: 0.95 }
    childVariants.visible = { ...childVariants.visible, scale: 1 }
  }

  // Wrap each child in a motion.div with the child variants
  const wrappedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    return (
      <motion.div variants={childVariants} className={childClassName}>
        {child}
      </motion.div>
    )
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {wrappedChildren}
    </motion.div>
  )
}

export default StaggeredChildren

