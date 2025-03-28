"use client"
import { type FC, useState, useRef, useEffect } from "react"
import { ChevronRight, Play, Pause, Volume2, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

interface Project {
  title: string
  description: string
  fallbackColor: string
  accentColor: string
  pattern: string
  services: string[]
  imageUrl?: string
}

// Update the interface to use nextProjectText instead of viewProjectText
interface VinylPortfolioProps {
  projects: Project[]
  otherProjectsText?: string
  nextProjectText?: string // Changed from viewProjectText to nextProjectText
  scrollForMoreText?: string
  swipeForMoreText?: string
}

// Add React.memo to optimize rendering
const MemoizedImage = React.memo(Image)

const VinylPortfolio: FC<VinylPortfolioProps> = ({
  projects,
  otherProjectsText,
  nextProjectText, // Changed from viewProjectText to nextProjectText
  scrollForMoreText,
  swipeForMoreText,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const animationRef = useRef<number>(0)
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const activeProject = projects[activeIndex]

  // Optimize the vinyl rotation animation
  useEffect(() => {
    // Only animate when playing and visible
    if (!isPlaying) return

    let lastTime = 0
    let animationActive = true

    const animate = (time: number) => {
      if (!animationActive) return

      if (!lastTime) lastTime = time
      const deltaTime = time - lastTime
      lastTime = time

      // Rotate at 33 1/3 RPM but with reduced animation frames
      setRotation((prev) => (prev + deltaTime * 0.01) % 360) // Reduced speed from 0.02 to 0.01

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      animationActive = false
      cancelAnimationFrame(animationRef.current)
    }
  }, [isPlaying])

  // Optimize horizontal scrolling with IntersectionObserver
  useEffect(() => {
    const container = projectsContainerRef.current
    if (!container) return

    const updateScrollState = () => {
      const newScrollPosition = container.scrollLeft
      const containerWidth = container.clientWidth
      const scrollWidth = container.scrollWidth

      setScrollPosition(newScrollPosition)
      setMaxScroll(scrollWidth - containerWidth)
      setShowLeftArrow(newScrollPosition > 10)
      setShowRightArrow(newScrollPosition < scrollWidth - containerWidth - 10)
    }

    // Initial update
    updateScrollState()

    // Use passive event listener for better performance
    container.addEventListener("scroll", updateScrollState, { passive: true })

    // Handle window resize with debouncing
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        updateScrollState()
      }, 100)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      container.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  // Add a separate useEffect for wheel event handling
  useEffect(() => {
    const container = projectsContainerRef.current
    if (!container) return

    // Handle wheel events for horizontal scrolling with throttling
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      // Prevent the default vertical scroll to avoid page scrolling
      e.preventDefault()

      // Don't apply throttling for trackpad gestures to make them smoother
      // Only throttle mouse wheel events which can come in rapid succession
      const isTrackpadGesture = Math.abs(e.deltaX) > 0

      if (!isTrackpadGesture && isScrolling) return

      // For trackpad gestures, prioritize deltaX (horizontal movement)
      // For mouse wheel, convert deltaY to horizontal movement
      let scrollAmount

      if (isTrackpadGesture) {
        // Use deltaX directly for trackpad horizontal gestures
        // No need to check magnitude - if deltaX exists, use it
        scrollAmount = e.deltaX
      } else {
        // For mouse wheel, convert deltaY to horizontal scrolling
        scrollAmount = e.deltaY

        // Set throttling for mouse wheel only
        isScrolling = true
        setTimeout(() => {
          isScrolling = false
        }, 30)
      }

      // Apply the scroll - this works for both left and right scrolling
      container.scrollLeft += scrollAmount
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const selectProject = (index: number) => {
    setActiveIndex(index)
    setIsPlaying(true)
  }

  // Add a function to navigate to the next project
  const goToNextProject = () => {
    const nextIndex = (activeIndex + 1) % projects.length
    setActiveIndex(nextIndex)
    setIsPlaying(true)
  }

  const scrollProjects = (direction: "left" | "right") => {
    const container = projectsContainerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth * 0.8
    const targetScroll =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount)

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Vinyl Record Display */}
        <div className="relative">
          <div className="aspect-square relative mx-auto max-w-[500px]">
            {/* Vinyl record */}
            <div
              className="absolute inset-0 rounded-full bg-gray-900 border-8 border-gray-800 shadow-2xl z-10 overflow-hidden"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.5s ease-out",
              }}
            >
              {/* Vinyl grooves */}
              <div className="absolute inset-8 rounded-full border border-gray-800 opacity-30"></div>
              <div className="absolute inset-16 rounded-full border border-gray-800 opacity-30"></div>
              <div className="absolute inset-24 rounded-full border border-gray-800 opacity-30"></div>
              <div className="absolute inset-32 rounded-full border border-gray-800 opacity-30"></div>

              {/* Project image */}
              {activeProject.imageUrl && (
                <div className="absolute inset-0 opacity-70">
                  <MemoizedImage
                    src={activeProject.imageUrl || "/placeholder.svg"}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 500px"
                    quality={75} // Reduced quality for faster loading
                  />
                </div>
              )}

              {/* Center label */}
              <div className="absolute inset-0 m-auto w-1/3 h-1/3 rounded-full bg-blue-500 flex items-center justify-center z-20">
                <div className="text-white text-center">
                  <div className="text-xs font-light">IAM STUDIOS</div>
                  <div className="text-xs mt-1 opacity-70">{activeProject.title}</div>
                </div>
              </div>

              {/* Center hole */}
              <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-black z-30"></div>
            </div>

            {/* Tonearm */}
            <div
              className="absolute top-0 right-0 w-1/3 h-1/3 z-20"
              style={{
                transformOrigin: "top right",
                transform: `rotate(${isPlaying ? 25 : 0}deg)`,
                transition: "transform 1s ease-out",
              }}
            >
              <div className="absolute top-0 right-0 w-2 h-24 bg-gray-300 rounded-full transform -rotate-45"></div>
              <div className="absolute top-20 right-2 w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-300"></div>
            </div>

            {/* Controls */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-30">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <div className="flex items-center text-gray-400">
                <Volume2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <div className="mb-8">
            <h3 className="text-3xl font-light text-white mb-4">{activeProject.title}</h3>
            <p className="text-gray-400 mb-6">{activeProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.services.map((service, idx) => (
                <span key={idx} className="inline-block px-3 py-1 text-xs bg-gray-900 text-gray-300 rounded-sm">
                  {service}
                </span>
              ))}
            </div>

            {/* Update the button in the Project Details section */}
            <button
              onClick={goToNextProject}
              className="text-sm tracking-wider flex items-center group text-gray-400 hover:text-white"
            >
              <span>{nextProjectText || "NEXT PROJECT"}</span>
              <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Selector with Horizontal Scrolling */}
      <div className="mt-16 relative">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-sm text-gray-500 tracking-widest">{otherProjectsText || "ANDERE PROJECTEN"}</h4>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span className="hidden sm:inline">{scrollForMoreText || "Scroll voor meer projecten"}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollProjects("left")}
                className={`p-2 rounded-full ${showLeftArrow ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-700"} transition-colors`}
                disabled={!showLeftArrow}
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollProjects("right")}
                className={`p-2 rounded-full ${showRightArrow ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-700"} transition-colors`}
                disabled={!showRightArrow}
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="sm:hidden mb-4 flex justify-center">
          <div className="flex items-center space-x-2 text-gray-500 text-xs">
            <div className="w-4 h-px bg-gray-700"></div>
            <span>{swipeForMoreText || "Swipe voor meer projecten"}</span>
            <div className="w-4 h-px bg-gray-700"></div>
          </div>
        </div>

        {/* Scrollable container with visual indicators */}
        <div className="relative">
          {/* Left fade gradient */}
          {showLeftArrow && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          )}

          {/* Right fade gradient */}
          {showRightArrow && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          )}

          {/* Scrollable projects container */}
          <div ref={projectsContainerRef} className="flex overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px] mx-2 first:ml-0 last:mr-0 snap-center aspect-square relative cursor-pointer overflow-hidden rounded-sm transition-all duration-300 ${
                  activeIndex === idx ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
                }`}
                onClick={() => selectProject(idx)}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="absolute inset-0 bg-gray-800">
                  {project.imageUrl && (
                    <MemoizedImage
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 240px"
                      quality={75} // Reduced quality for faster loading
                    />
                  )}
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoverIndex === idx || activeIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center p-2">
                    <div className="text-xs text-white font-light">{project.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="mt-4 h-1 bg-gray-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{
              width: `${maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0}%`,
              minWidth: "5%",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default VinylPortfolio

