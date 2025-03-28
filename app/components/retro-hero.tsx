"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import SpeakerDog from "./speaker-dog"

interface RetroHeroProps {
  onScrollDown: () => void
}

const RetroHero: React.FC<RetroHeroProps> = ({ onScrollDown }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [dogPosition, setDogPosition] = useState({ x: 0, y: 0 })
  const [dogSize, setDogSize] = useState(200)

  // Update dog size based on screen size
  useEffect(() => {
    const updateDogSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setDogSize(150)
      } else if (width < 1024) {
        setDogSize(180)
      } else {
        setDogSize(220)
      }
    }

    updateDogSize()
    window.addEventListener("resize", updateDogSize)
    return () => window.removeEventListener("resize", updateDogSize)
  }, [])

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

    // Set dog position
    setDogPosition({
      x: rect.width / 2 - dogSize / 2,
      y: rect.height / 2 - dogSize / 2 - 80, // Position above center
    })

    // Animation variables
    let time = 0
    const particles: Particle[] = []
    const waveLines: WaveLine[] = []
    const equalizer: EqualizerBar[] = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 1 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.8,
        opacity: 0.1 + Math.random() * 0.4,
        hue: 195 + Math.random() * 10, // Blue hue
      })
    }

    // Create wave lines
    for (let i = 0; i < 5; i++) {
      waveLines.push({
        y: rect.height * 0.3 + (rect.height * 0.4 * i) / 5,
        amplitude: 5 + Math.random() * 15,
        frequency: 0.005 + Math.random() * 0.01,
        speed: 0.02 + Math.random() * 0.05,
        thickness: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.3,
      })
    }

    // Create equalizer bars
    const barCount = 32
    const barWidth = rect.width / barCount
    const barMaxHeight = rect.height * 0.2

    for (let i = 0; i < barCount; i++) {
      equalizer.push({
        x: i * barWidth,
        width: barWidth * 0.7,
        height: Math.random() * barMaxHeight,
        targetHeight: Math.random() * barMaxHeight,
        speed: 0.05 + Math.random() * 0.1,
      })
    }

    // Draw particles
    const drawParticles = () => {
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, ${particle.opacity})`
        ctx.fill()

        // Move particles
        particle.x += particle.speed
        if (particle.x > rect.width) {
          particle.x = 0
        }
      })
    }

    // Draw wave lines
    const drawWaveLines = (t: number) => {
      waveLines.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x < rect.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + t * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = `rgba(0, 160, 233, ${wave.opacity})`
        ctx.lineWidth = wave.thickness
        ctx.stroke()
      })
    }

    // Draw equalizer bars
    const drawEqualizer = () => {
      ctx.fillStyle = "rgba(0, 160, 233, 0.5)"

      equalizer.forEach((bar, index) => {
        // Update height towards target
        bar.height += (bar.targetHeight - bar.height) * bar.speed

        // Set new target occasionally
        if (Math.random() > 0.95) {
          bar.targetHeight = Math.random() * barMaxHeight
        }

        // Draw bar
        ctx.fillRect(bar.x + barWidth * 0.15, rect.height * 0.8 - bar.height, bar.width, bar.height)
      })
    }

    // Draw "STUDIOS" text
    const drawStudiosText = () => {
      ctx.font = "40px Arial"
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.fillText("STUDIOS", rect.width / 2, rect.height / 2 + 40)
    }

    // Draw scan lines
    const drawScanLines = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
      for (let y = 0; y < rect.height; y += 2) {
        ctx.fillRect(0, y, rect.width, 1)
      }
    }

    // Draw vignette
    const drawVignette = () => {
      const gradient = ctx.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        rect.height / 3,
        rect.width / 2,
        rect.height / 2,
        rect.height,
      )
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Fill background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Draw elements
      drawParticles()
      drawWaveLines(time)
      drawEqualizer()
      drawStudiosText()
      drawScanLines()
      drawVignette()

      time += 0.05
      animationRef.current = requestAnimationFrame(animate)

      // Set loaded state after first frame
      if (!isLoaded) {
        setIsLoaded(true)
      }
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dogSize])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Speaker Dog Logo */}
      <div
        className={`absolute transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${dogPosition.x}px`,
          top: `${dogPosition.y}px`,
          zIndex: 10,
        }}
      >
        <SpeakerDog size={dogSize} />
      </div>

      {/* "iam" text */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          top: `${dogPosition.y + dogSize + 20}px`,
          zIndex: 10,
        }}
      >
        <h1 className="text-6xl sm:text-8xl font-light tracking-tight leading-none">
          <span className="text-blue-500">iam</span>
        </h1>
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="mt-32 text-center z-10">
          <p className="text-sm sm:text-base tracking-wider text-gray-400 max-w-2xl mb-12">
            Geluidsstudio's voor voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie
          </p>
          <button
            onClick={onScrollDown}
            className="px-8 py-3 border border-gray-700 text-sm tracking-widest text-white hover:bg-gray-900 transition-colors duration-300 group"
          >
            <span className="inline-flex items-center">
              Vertel meer
              <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-px h-16 bg-gray-800"></div>
        <p className="mt-4 text-xs tracking-widest text-gray-600">SCROLL</p>
      </div>
    </div>
  )
}

// Types
interface Particle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  hue: number
}

interface WaveLine {
  y: number
  amplitude: number
  frequency: number
  speed: number
  thickness: number
  opacity: number
}

interface EqualizerBar {
  x: number
  width: number
  height: number
  targetHeight: number
  speed: number
}

export default RetroHero

