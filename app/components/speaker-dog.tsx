"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SpeakerDogProps {
  className?: string
  size?: number
  animate?: boolean
}

const SpeakerDog: React.FC<SpeakerDogProps> = ({ className = "", size = 200, animate = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    // Animation variables
    let time = 0
    let speakerPulse = 0
    let earRotation = 0
    let tailWag = 0

    const drawSpeakerDog = (t: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size)

      // Calculate animation values
      speakerPulse = Math.sin(t * 0.1) * 0.1 + 0.9 // Speaker pulse (0.8-1.0)
      earRotation = Math.sin(t * 0.05) * 0.1 // Ear rotation
      tailWag = Math.sin(t * 0.1) * 0.3 // Tail wag

      // Center the drawing
      ctx.save()
      ctx.translate(size / 2, size / 2)
      ctx.scale(size / 300, size / 300) // Scale to fit canvas

      // Draw dog body (dark silhouette)
      ctx.fillStyle = "#111"
      ctx.beginPath()

      // Body
      ctx.ellipse(0, 30, 50, 35, 0, 0, Math.PI * 2)
      ctx.fill()

      // Legs
      drawLeg(-30, 50, 10, 40) // Front left
      drawLeg(30, 50, 10, 40) // Front right
      drawLeg(-40, 20, 10, 40) // Back left
      drawLeg(40, 20, 10, 40) // Back right

      // Tail
      ctx.save()
      ctx.translate(60, 10)
      ctx.rotate(tailWag)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.quadraticCurveTo(20, -20, 40, 0)
      ctx.lineWidth = 8
      ctx.strokeStyle = "#111"
      ctx.stroke()
      ctx.restore()

      // Draw speaker head
      drawSpeakerHead(0, -20, 45 * speakerPulse)

      // Draw ears
      drawEar(-30, -30, earRotation) // Left ear
      drawEar(30, -30, -earRotation) // Right ear

      ctx.restore()
    }

    const drawLeg = (x: number, y: number, width: number, height: number) => {
      ctx.fillStyle = "#111"
      ctx.fillRect(x - width / 2, y, width, height)
    }

    const drawEar = (x: number, y: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.fillStyle = "#111"
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-15, -30)
      ctx.lineTo(15, -30)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const drawSpeakerHead = (x: number, y: number, radius: number) => {
      // Speaker outer case
      ctx.fillStyle = "#222"
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      // Speaker cone
      ctx.fillStyle = "#333"
      ctx.beginPath()
      ctx.arc(x, y, radius * 0.8, 0, Math.PI * 2)
      ctx.fill()

      // Speaker inner cone
      ctx.fillStyle = "#444"
      ctx.beginPath()
      ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2)
      ctx.fill()

      // Speaker center
      ctx.fillStyle = "#00a0e9" // IAM Studios blue
      ctx.beginPath()
      ctx.arc(x, y, radius * 0.2, 0, Math.PI * 2)
      ctx.fill()

      // Sound waves
      drawSoundWaves(x, y, radius, time)
    }

    const drawSoundWaves = (x: number, y: number, radius: number, t: number) => {
      const waveCount = 3
      const maxRadius = radius * 1.5

      for (let i = 0; i < waveCount; i++) {
        const waveRadius = ((t * 0.5 + i / waveCount) % 1) * maxRadius
        const alpha = 1 - waveRadius / maxRadius

        ctx.strokeStyle = `rgba(0, 160, 233, ${alpha * 0.5})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y, waveRadius, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      if (!animate) {
        drawSpeakerDog(0)
        return
      }

      drawSpeakerDog(time)
      time += 0.1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [size, animate])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={`${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export default SpeakerDog

