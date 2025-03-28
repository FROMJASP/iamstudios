"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface VintageImageProps {
  className?: string
}

const VintageImage: React.FC<VintageImageProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Background
    const gradient = ctx.createRadialGradient(
      rect.width / 2,
      rect.height / 2,
      0,
      rect.width / 2,
      rect.height / 2,
      rect.width / 2,
    )
    gradient.addColorStop(0, "#1a1a2e")
    gradient.addColorStop(1, "#0a0a0a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Add noise texture
    const imageData = ctx.getImageData(0, 0, rect.width, rect.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 20 - 10
      data[i] = Math.max(0, Math.min(255, data[i] + noise))
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
    }
    ctx.putImageData(imageData, 0, 0)

    // Add artistic elements
    // Circles
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.arc(rect.width / 2, rect.height / 2, (rect.width / 3) * (1 - i * 0.15), 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0, 160, 233, ${0.1 - i * 0.02})`
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Radiating lines
    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24
      ctx.beginPath()
      ctx.moveTo(rect.width / 2, rect.height / 2)
      const x = rect.width / 2 + Math.cos(angle) * rect.width
      const y = rect.height / 2 + Math.sin(angle) * rect.height
      ctx.lineTo(x, y)
      ctx.strokeStyle = "rgba(0, 160, 233, 0.05)"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Add some abstract shapes
    for (let i = 0; i < 3; i++) {
      const size = rect.width * (0.4 - i * 0.1)
      ctx.save()
      ctx.translate(rect.width / 2, rect.height / 2)
      ctx.rotate((Math.PI / 6) * i)
      ctx.strokeStyle = `rgba(0, 160, 233, ${0.15 - i * 0.03})`
      ctx.strokeRect(-size / 2, -size / 2, size, size)
      ctx.restore()
    }

    // Add text
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // "SINCE 2010"
    ctx.font = "16px 'Space Grotesk'"
    ctx.fillStyle = "rgba(0, 160, 233, 0.8)"
    ctx.fillText("SINCE 2010", rect.width / 2, rect.height / 2 - 60)

    // Main text
    ctx.font = "bold 48px 'Space Grotesk'"
    ctx.fillStyle = "#00a0e9"
    ctx.fillText("iam", rect.width / 2, rect.height / 2)
    ctx.fillStyle = "white"
    ctx.fillText("studios", rect.width / 2, rect.height / 2 + 60)

    // Services text
    ctx.font = "12px 'Space Grotesk'"
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
    ctx.fillText("VOICE-OVERS • DUBBING • SOUND DESIGN • MUZIEKCOMPOSITIE", rect.width / 2, rect.height / 2 + 120)

    // Add vignette effect
    const vignetteGradient = ctx.createRadialGradient(
      rect.width / 2,
      rect.height / 2,
      rect.width / 4,
      rect.width / 2,
      rect.height / 2,
      rect.width / 1.5,
    )
    vignetteGradient.addColorStop(0, "rgba(0,0,0,0)")
    vignetteGradient.addColorStop(1, "rgba(0,0,0,0.8)")
    ctx.fillStyle = vignetteGradient
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Add subtle scan lines
    for (let y = 0; y < rect.height; y += 2) {
      ctx.fillStyle = "rgba(0,0,0,0.1)"
      ctx.fillRect(0, y, rect.width, 1)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

export default VintageImage

