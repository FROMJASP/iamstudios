"use client"

import { type FC, useEffect, useRef } from "react"

interface SoundWaveDistortionProps {
  className?: string
}

const SoundWaveDistortion: FC<SoundWaveDistortionProps> = ({ className = "" }) => {
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

    // Animation variables
    let time = 0
    const waves: Wave[] = []

    // OPTIMIZATION: Reduce number of waves from 10 to 5
    for (let i = 0; i < 5; i++) {
      waves.push({
        amplitude: 4 + Math.random() * 8,
        frequency: 0.003 + Math.random() * 0.01,
        speed: 0.005 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
        color: `rgba(0, 160, 233, ${0.03 + Math.random() * 0.07})`,
        y: rect.height * (0.1 + Math.random() * 0.8),
        drift: (Math.random() - 0.5) * 0.5,
      })
    }

    // TV scan lines - OPTIMIZATION: Simplified
    const drawScanLines = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
      for (let y = 0; y < rect.height; y += 4) {
        // Increased step size
        ctx.fillRect(0, y, rect.width, 1)
      }
    }

    // TV noise - OPTIMIZATION: Reduced frequency and complexity
    const drawNoise = () => {
      if (Math.random() > 0.98) {
        // Less frequent noise
        ctx.fillStyle = "rgba(255, 255, 255, 0.03)"
        for (let i = 0; i < 15; i++) {
          // Reduced from 30 to 15
          const x = Math.random() * rect.width
          const y = Math.random() * rect.height
          const size = 1 + Math.random() * 2
          ctx.fillRect(x, y, size, size)
        }
      }
    }

    // Glitch effect - OPTIMIZATION: Simplified
    const drawGlitch = () => {
      if (Math.random() > 0.99) {
        // Even less frequent glitch
        const glitchHeight = 2 + Math.random() * 5
        const glitchY = Math.random() * rect.height
        const glitchX = Math.random() * rect.width * 0.8
        const glitchWidth = rect.width * 0.2 + Math.random() * rect.width * 0.3

        ctx.save()
        ctx.globalCompositeOperation = "lighter"
        ctx.fillStyle = "rgba(0, 160, 233, 0.07)"
        ctx.fillRect(glitchX, glitchY, glitchWidth, glitchHeight)
        ctx.restore()
      }
    }

    // Draw sound waves - OPTIMIZATION: Simplified wave drawing
    const drawWaves = (t: number) => {
      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2

        // Calculate vertical drift based on time
        const verticalDrift = Math.sin(t * 0.1 + index) * 10

        // OPTIMIZATION: Increased step size for fewer points
        for (let x = 0; x < rect.width; x += 2) {
          // Primary wave movement
          const primaryWave = Math.sin(x * wave.frequency + t * wave.speed + wave.phase) * wave.amplitude

          // Secondary wave movement - OPTIMIZATION: Simplified
          const secondaryWave =
            Math.sin(x * wave.frequency * 2 + t * (wave.speed * 0.7) + wave.phase * 2) * (wave.amplitude * 0.3)

          // Combined wave with drift
          const y = wave.y + primaryWave + secondaryWave + verticalDrift * wave.drift

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })
    }

    // Animation loop - OPTIMIZATION: Reduced animation speed
    let lastFrameTime = 0
    const targetFPS = 30 // Reduced from 60 to 30 FPS
    const frameInterval = 1000 / targetFPS

    const animate = (timestamp: number) => {
      // Only render if enough time has passed
      if (timestamp - lastFrameTime >= frameInterval) {
        lastFrameTime = timestamp

        ctx.clearRect(0, 0, rect.width, rect.height)

        // Draw effects
        drawWaves(time)
        drawScanLines()
        drawNoise()
        drawGlitch()

        time += 0.02 // Slower time increment (was 0.03)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    // Clean up
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

// Wave properties interface
interface Wave {
  amplitude: number
  frequency: number
  speed: number
  phase: number
  color: string
  y: number
  drift: number // Added drift property for more organic movement
}

export default SoundWaveDistortion

