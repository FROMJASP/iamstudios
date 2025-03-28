"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface HeroSoundWavesProps {
  className?: string
}

const HeroSoundWaves: React.FC<HeroSoundWavesProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Create waves - OPTIMIZATION: Reduced from 8 to 4 waves
    const waves: Wave[] = []

    for (let i = 0; i < 4; i++) {
      waves.push({
        y: rect.height * (0.2 + Math.random() * 0.6),
        amplitude: 5 + Math.random() * 20,
        frequency: 0.002 + Math.random() * 0.006,
        speed: 0.001 + Math.random() * 0.003,
        color: `rgba(0, 160, 233, ${0.05 + Math.random() * 0.1})`,
        lineWidth: 1 + Math.random() * 2,
      })
    }

    let time = 0
    let lastFrameTime = 0
    const targetFPS = 20 // Reduced from 60 to 20 FPS
    const frameInterval = 1000 / targetFPS

    const animate = (timestamp: number) => {
      // Only render if enough time has passed
      if (timestamp - lastFrameTime >= frameInterval) {
        lastFrameTime = timestamp

        ctx.clearRect(0, 0, rect.width, rect.height)

        // Draw each wave - OPTIMIZATION: Increased step size
        waves.forEach((wave) => {
          ctx.beginPath()
          ctx.moveTo(0, wave.y)

          for (let x = 0; x < rect.width; x += 4) {
            // Increased from 2 to 4
            const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude
            ctx.lineTo(x, y)
          }

          ctx.strokeStyle = wave.color
          ctx.lineWidth = wave.lineWidth
          ctx.stroke()
        })

        time += 0.5 // Reduced from 1 to 0.5 for slower animation
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  )
}

interface Wave {
  y: number
  amplitude: number
  frequency: number
  speed: number
  color: string
  lineWidth: number
}

export default HeroSoundWaves

