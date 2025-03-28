"use client"

import { useEffect, useRef } from "react"

interface BeamsBackgroundProps {
  intensity?: "low" | "medium" | "high"
}

export function BeamsBackground({ intensity = "medium" }: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2x for performance
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    updateCanvasSize()

    // Configure based on intensity
    let beamCount = 3 // Default for medium
    let opacity = 0.3
    let blurAmount = 50

    switch (intensity) {
      case "low":
        beamCount = 2
        opacity = 0.2
        blurAmount = 70
        break
      case "high":
        beamCount = 4
        opacity = 0.4
        blurAmount = 40
        break
    }

    // Draw beams
    const drawBeams = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // Create beams
      for (let i = 0; i < beamCount; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = Math.max(width, height) * 0.8

        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `rgba(0, 160, 233, ${opacity})`) // IAM Studios blue
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        // Draw beam
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }
    }

    // Draw once without animation for better performance
    drawBeams()

    // Apply blur filter to the canvas
    canvas.style.filter = `blur(${blurAmount}px)`

    // Handle resize
    const handleResize = () => {
      updateCanvasSize()
      drawBeams()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [intensity])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />
    </div>
  )
}

