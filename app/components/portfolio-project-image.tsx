"use client"

import { type FC, useEffect, useRef } from "react"

interface PortfolioProjectImageProps {
  title: string
  bgColor?: string
  accentColor?: string
  pattern?: "waves" | "grid" | "dots" | "lines" | "noise" | "circles"
}

const PortfolioProjectImage: FC<PortfolioProjectImageProps> = ({
  title,
  bgColor = "bg-gray-900",
  accentColor = "bg-blue-500",
  pattern = "noise",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Draw the pattern on the canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Extract colors from the classes
    const getBgColor = () => {
      if (bgColor.includes("blue")) return "#1e3a8a"
      if (bgColor.includes("amber")) return "#92400e"
      if (bgColor.includes("gray")) return "#111827"
      if (bgColor.includes("red")) return "#7f1d1d"
      if (bgColor.includes("green")) return "#064e3b"
      if (bgColor.includes("indigo")) return "#312e81"
      if (bgColor.includes("violet")) return "#4c1d95"
      if (bgColor.includes("pink")) return "#831843"
      if (bgColor.includes("cyan")) return "#155e75"
      return "#111827"
    }

    const getAccentColor = () => {
      if (accentColor.includes("blue")) return "#3b82f6"
      if (accentColor.includes("amber")) return "#f59e0b"
      if (accentColor.includes("gray")) return "#6b7280"
      if (accentColor.includes("red")) return "#ef4444"
      if (accentColor.includes("green")) return "#10b981"
      if (accentColor.includes("indigo")) return "#6366f1"
      if (accentColor.includes("violet")) return "#8b5cf6"
      if (accentColor.includes("pink")) return "#ec4899"
      if (accentColor.includes("cyan")) return "#06b6d4"
      return "#3b82f6"
    }

    const backgroundColor = getBgColor()
    const accent = getAccentColor()

    // Fill background
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Draw pattern based on type
    ctx.fillStyle = accent
    ctx.globalAlpha = 0.1

    switch (pattern) {
      case "waves":
        drawWaves(ctx, rect.width, rect.height, accent)
        break
      case "grid":
        drawGrid(ctx, rect.width, rect.height, accent)
        break
      case "dots":
        drawDots(ctx, rect.width, rect.height, accent)
        break
      case "lines":
        drawLines(ctx, rect.width, rect.height, accent)
        break
      case "circles":
        drawCircles(ctx, rect.width, rect.height, accent)
        break
      case "noise":
      default:
        drawNoise(ctx, rect.width, rect.height, accent)
        break
    }

    // Add vignette effect
    addVignette(ctx, rect.width, rect.height)
  }, [bgColor, accentColor, pattern])

  // Pattern drawing functions
  const drawWaves = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 1.5

    for (let y = 0; y < height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)

      for (let x = 0; x < width; x += 20) {
        const amplitude = 5
        const frequency = 0.05
        ctx.lineTo(x, y + Math.sin(x * frequency) * amplitude)
      }

      ctx.stroke()
    }
  }

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 0.5

    const gridSize = 20

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  const drawDots = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
    ctx.fillStyle = color

    const dotSize = 2
    const spacing = 20

    for (let x = spacing; x < width; x += spacing) {
      for (let y = spacing; y < height; y += spacing) {
        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  const drawLines = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 1

    const lineSpacing = 30

    for (let y = 0; y < height; y += lineSpacing) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  const drawCircles = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 1

    const centerX = width / 2
    const centerY = height / 2

    for (let radius = 20; radius < Math.max(width, height); radius += 30) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  const drawNoise = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string) => {
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() > 0.95 ? 255 : 0
      data[i] = data[i + 1] = data[i + 2] = value
      data[i + 3] = value ? 25 : 0 // Alpha
    }

    ctx.putImageData(imageData, 0, 0)
  }

  const addVignette = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 1.5,
    )

    gradient.addColorStop(0, "rgba(0,0,0,0)")
    gradient.addColorStop(1, "rgba(0,0,0,0.7)")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  return (
    <div className={`w-full h-full relative overflow-hidden ${bgColor}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        <div className="text-blue-500 text-4xl font-bold mb-2">iam</div>
        <div className="text-white text-xl font-light text-center">{title}</div>
      </div>
    </div>
  )
}

export default PortfolioProjectImage

