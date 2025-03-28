"use client"

import React from "react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useReducedMotion, AnimatePresence, type MotionProps, type Variants } from "framer-motion"

// Detect if user prefers reduced motion
const useHasReducedMotion = () => {
  const prefersReducedMotion = useReducedMotion()
  return prefersReducedMotion
}

// Base animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Staggered container animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Animation components
interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
  as?: React.ElementType
  animateWhenVisible?: boolean
}

// Base animation component
const BaseAnimation: React.FC<AnimationProps & MotionProps> = ({
  children,
  delay = 0,
  duration,
  className = "",
  variants,
  initial = "hidden",
  animate = "visible",
  exit,
  transition,
  once = true,
  threshold = 0.1,
  as: Component = motion.div,
  animateWhenVisible = true,
  ...props
}) => {
  const prefersReducedMotion = useHasReducedMotion()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  // If user prefers reduced motion, skip animation
  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  // Custom transition with delay and duration
  const customTransition = {
    ...transition,
    delay: delay,
    ...(duration && { duration }),
  }

  return (
    <Component
      ref={animateWhenVisible ? ref : undefined}
      className={className}
      variants={variants}
      initial={initial}
      animate={animateWhenVisible ? (inView ? "visible" : "hidden") : animate}
      exit={exit}
      transition={customTransition}
      {...props}
    >
      {children}
    </Component>
  )
}

// Specific animation components
export const FadeIn: React.FC<AnimationProps> = (props) => <BaseAnimation variants={fadeIn} {...props} />

export const SlideUp: React.FC<AnimationProps> = (props) => <BaseAnimation variants={slideUp} {...props} />

export const SlideDown: React.FC<AnimationProps> = (props) => <BaseAnimation variants={slideDown} {...props} />

export const SlideLeft: React.FC<AnimationProps> = (props) => <BaseAnimation variants={slideLeft} {...props} />

export const SlideRight: React.FC<AnimationProps> = (props) => <BaseAnimation variants={slideRight} {...props} />

export const ScaleIn: React.FC<AnimationProps> = (props) => <BaseAnimation variants={scaleIn} {...props} />

export const Stagger: React.FC<AnimationProps> = (props) => <BaseAnimation variants={staggerContainer} {...props} />

// Lazy load animation component
export const LazyMotion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <>{children}</>
  }

  return <AnimatePresence>{children}</AnimatePresence>
}

export { motion }

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
  const prefersReducedMotion = useHasReducedMotion()
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

