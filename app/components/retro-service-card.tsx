"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"

interface RetroServiceCardProps {
  title: string
  category: string
  description?: string
  serviceType: "voice-over" | "sound-design" | "muziek" | "nabewerking"
  onClick?: () => void
  hideArrow?: boolean
  disablePointer?: boolean
}

const RetroServiceCard: React.FC<RetroServiceCardProps> = ({
  title,
  category,
  description,
  serviceType,
  onClick,
  hideArrow,
  disablePointer,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Optimize the canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false }) // OPTIMIZATION: Disable alpha for better performance
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    // OPTIMIZATION: Use a lower DPR for better performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2x
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // OPTIMIZATION: Simplified drawing function
    const drawRetroDesign = () => {
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Set background color based on service type
      let bgColor = "#000"
      let accentColor = "#00a0e9" // IAM Studios blue
      let patternType = "dots"

      switch (serviceType) {
        case "voice-over":
          bgColor = "#1a1a3a" // Dark blue/purple
          accentColor = "#ff3d5a" // Bright red
          patternType = "rays"
          break
        case "sound-design":
          bgColor = "#2a1a2a" // Dark purple
          accentColor = "#00e5ff" // Cyan
          patternType = "waves"
          break
        case "muziek":
          bgColor = "#1a2a2a" // Dark teal
          accentColor = "#ffcc00" // Gold
          patternType = "circles"
          break
        case "nabewerking":
          bgColor = "#2a2a1a" // Dark olive
          accentColor = "#66ff66" // Bright green
          patternType = "grid"
          break
      }

      // Fill background
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Add halftone pattern - OPTIMIZATION: Simplified patterns
      ctx.globalAlpha = 0.15
      ctx.fillStyle = accentColor
      ctx.strokeStyle = accentColor

      switch (patternType) {
        case "dots":
          // Halftone dots - OPTIMIZATION: Increased spacing
          const dotSize = 3
          const dotSpacing = 20 // Increased from 12 to 20
          for (let x = dotSpacing; x < rect.width; x += dotSpacing) {
            for (let y = dotSpacing; y < rect.height; y += dotSpacing) {
              ctx.beginPath()
              ctx.arc(x, y, dotSize, 0, Math.PI * 2)
              ctx.fill()
            }
          }
          break

        case "rays":
          // Radiating rays - OPTIMIZATION: Fewer rays
          ctx.lineWidth = 2
          for (let angle = 0; angle < 360; angle += 30) {
            // Increased from 15 to 30
            const radian = (angle * Math.PI) / 180
            ctx.beginPath()
            ctx.moveTo(rect.width / 2, rect.height / 2)
            ctx.lineTo(rect.width / 2 + Math.cos(radian) * rect.width, rect.height / 2 + Math.sin(radian) * rect.height)
            ctx.stroke()
          }
          break

        case "waves":
          // Sound waves - OPTIMIZATION: Fewer waves
          ctx.lineWidth = 2
          for (let y = rect.height * 0.3; y < rect.height * 0.7; y += rect.height * 0.2) {
            ctx.beginPath()
            ctx.moveTo(0, y)
            // OPTIMIZATION: Increased step size
            for (let x = 0; x < rect.width; x += 10) {
              // Increased from 5 to 10
              const amplitude = rect.height * 0.05
              const frequency = 0.02
              ctx.lineTo(x, y + Math.sin(x * frequency) * amplitude)
            }
            ctx.stroke()
          }
          break

        case "circles":
          // Concentric circles - OPTIMIZATION: Fewer circles
          ctx.lineWidth = 1.5
          const maxRadius = Math.max(rect.width, rect.height)
          for (let r = 40; r < maxRadius; r += 60) {
            // Increased spacing from 30 to 60
            ctx.beginPath()
            ctx.arc(rect.width / 2, rect.height / 2, r, 0, Math.PI * 2)
            ctx.stroke()
          }
          break

        case "grid":
          // Grid pattern - OPTIMIZATION: Larger grid size
          ctx.lineWidth = 1
          const gridSize = 40 // Increased from 20 to 40
          for (let x = 0; x < rect.width; x += gridSize) {
            ctx.beginPath()
            ctx.moveTo(x, 0)
            ctx.lineTo(x, rect.height)
            ctx.stroke()
          }
          for (let y = 0; y < rect.height; y += gridSize) {
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(rect.width, y)
            ctx.stroke()
          }
          break
      }

      ctx.globalAlpha = 1

      // Draw service-specific elements - OPTIMIZATION: Simplified
      drawSimplifiedServiceElements(ctx, rect.width, rect.height, serviceType, accentColor, bgColor)

      // Add vintage texture overlay - OPTIMIZATION: Simplified
      drawSimplifiedVintageTexture(ctx, rect.width, rect.height)

      // Add comic-style border - OPTIMIZATION: Simplified
      drawSimplifiedComicBorder(ctx, rect.width, rect.height, accentColor)
    }

    // OPTIMIZATION: Simplified service elements
    const drawSimplifiedServiceElements = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      serviceType: string,
      color: string,
      bgColor: string,
    ) => {
      ctx.fillStyle = color
      ctx.strokeStyle = color
      ctx.lineWidth = 3

      const centerX = width / 2
      const centerY = height / 2
      const size = Math.min(width, height) * 0.2

      switch (serviceType) {
        case "voice-over":
          // Simple microphone icon
          ctx.beginPath()
          ctx.arc(centerX, centerY - size * 0.5, size, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(centerX, centerY + size * 0.5)
          ctx.lineTo(centerX, centerY + size)
          ctx.stroke()
          break

        case "sound-design":
          // Simple wave
          ctx.beginPath()
          ctx.moveTo(width * 0.3, centerY)
          ctx.bezierCurveTo(width * 0.4, centerY - size, width * 0.6, centerY + size, width * 0.7, centerY)
          ctx.stroke()
          break

        case "muziek":
          // Simple music note
          ctx.beginPath()
          ctx.arc(centerX + size * 0.5, centerY + size * 0.5, size * 0.4, 0, Math.PI * 2)
          ctx.fill()
          ctx.beginPath()
          ctx.moveTo(centerX + size * 0.5 + size * 0.4, centerY + size * 0.5)
          ctx.lineTo(centerX + size * 0.5 + size * 0.4, centerY - size * 0.5)
          ctx.stroke()
          break

        case "nabewerking":
          // Simple equalizer bars
          const barCount = 5 // Reduced from 7
          const barWidth = size * 0.3
          const barSpacing = barWidth * 0.5
          const startX = centerX - ((barWidth + barSpacing) * barCount) / 2

          for (let i = 0; i < barCount; i++) {
            const barHeight = (Math.sin((i / barCount) * Math.PI) + 0.5) * size
            const x = startX + i * (barWidth + barSpacing)
            const y = centerY - barHeight / 2
            ctx.fillRect(x, y, barWidth, barHeight)
          }
          break
      }
    }

    // OPTIMIZATION: Simplified vintage texture
    const drawSimplifiedVintageTexture = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Add minimal noise
      ctx.globalAlpha = 0.03
      for (let i = 0; i < width * height * 0.001; i++) {
        // Reduced density by 10x
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 2 + 1
        ctx.fillStyle = Math.random() > 0.5 ? "#fff" : "#000"
        ctx.fillRect(x, y, size, size)
      }
      ctx.globalAlpha = 1
    }

    // OPTIMIZATION: Simplified comic border
    const drawSimplifiedComicBorder = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
      // Draw border
      ctx.strokeStyle = color
      ctx.lineWidth = 4
      ctx.strokeRect(10, 10, width - 20, height - 20)
    }

    // Draw once without animation
    drawRetroDesign()
  }, [serviceType])

  return (
    <div className={`group relative ${disablePointer ? "" : "cursor-pointer"}`} onClick={onClick}>
      <div className="aspect-[4/3] relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs text-blue-400 tracking-widest mb-1">{category}</p>
        <h3 className="text-xl font-light text-white">{title}</h3>
        {description && (
          <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
      {!hideArrow && (
        <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  )
}

export default RetroServiceCard

