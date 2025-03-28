"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import RetroServiceCard from "../retro-service-card"
// Update imports to use direct imports instead of the index barrel
import { SlideUp, SlideLeft } from "../animations/motion"
import { StaggeredChildren } from "../animations/staggered-children"
import { RevealSection } from "../animations/reveal-section"

interface ServicesSectionProps {
  translations: any
  language: "en" | "nl"
  featuredWorks: any[]
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ translations, language, featuredWorks }) => {
  const featuredWorksRef = useRef<HTMLDivElement>(null)
  const [servicesScrollPosition, setServicesScrollPosition] = useState(0)
  const [servicesMaxScroll, setServicesMaxScroll] = useState(0)
  const [showServicesLeftArrow, setShowServicesLeftArrow] = useState(false)
  const [showServicesRightArrow, setShowServicesRightArrow] = useState(true)

  // Horizontal scroll for featured works
  useEffect(() => {
    const featuredWorks = featuredWorksRef.current
    if (!featuredWorks) return

    const updateScrollState = () => {
      const newScrollPosition = featuredWorks.scrollLeft
      const containerWidth = featuredWorks.clientWidth
      const scrollWidth = featuredWorks.scrollWidth

      // Batch these state updates together
      setServicesScrollPosition(newScrollPosition)
      setServicesMaxScroll(scrollWidth - containerWidth)
      setShowServicesLeftArrow(newScrollPosition > 10)
      setShowServicesRightArrow(newScrollPosition < scrollWidth - containerWidth - 10)
    }

    // Initial update
    updateScrollState()

    // Use passive event listener for better performance
    featuredWorks.addEventListener("scroll", updateScrollState, { passive: true })

    // Handle window resize with debouncing
    const handleResize = () => {
      updateScrollState()
    }

    const debouncedResize = () => {
      let timeout: NodeJS.Timeout
      return () => {
        clearTimeout(timeout)
        timeout = setTimeout(handleResize, 100)
      }
    }

    const debouncedHandleResize = debouncedResize()
    window.addEventListener("resize", debouncedHandleResize, { passive: true })

    return () => {
      featuredWorks.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])

  // Add a separate useEffect for wheel event handling
  useEffect(() => {
    const featuredWorks = featuredWorksRef.current
    if (!featuredWorks) return

    // Handle wheel events for horizontal scrolling with throttling
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        // Use smaller increments for smoother scrolling
        const scrollAmount = e.deltaY * 0.5
        featuredWorks.scrollLeft += scrollAmount

        isScrolling = true

        // Reset after a short delay
        setTimeout(() => {
          isScrolling = false
        }, 50)
      }
    }

    featuredWorks.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      featuredWorks.removeEventListener("wheel", handleWheel)
    }
  }, [])

  const scrollServices = (direction: "left" | "right") => {
    const container = featuredWorksRef.current
    if (!container) return

    // Calculate scroll amount based on container width
    const scrollAmount = container.clientWidth * 0.8

    // Calculate target scroll position
    const targetScroll =
      direction === "left"
        ? Math.max(0, container.scrollLeft - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount)

    // Use scrollTo with smooth behavior
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    })

    // Update the scroll position state immediately after scrolling
    setTimeout(() => {
      setServicesScrollPosition(container.scrollLeft)
      setShowServicesLeftArrow(container.scrollLeft > 10)
      setShowServicesRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }, 100)
  }

  return (
    <RevealSection
      className="py-24 bg-gray-950 featured-works-section"
      direction="up"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <SlideUp delay={0.1}>
              <p className="text-sm text-gray-500 tracking-widest mb-2">{translations[language].nav.services}</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 id="services-heading" className="text-3xl font-light text-white">
                {translations[language].services.title}
              </h2>
            </SlideUp>
          </div>
          <SlideLeft delay={0.3}>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="hidden sm:inline">{translations[language].services.scrollForMore}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => scrollServices("left")}
                  className={`p-2 rounded-full ${showServicesLeftArrow ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-700"} transition-colors`}
                  disabled={!showServicesLeftArrow}
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollServices("right")}
                  className={`p-2 rounded-full ${showServicesRightArrow ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-700"} transition-colors`}
                  disabled={!showServicesRightArrow}
                  aria-label="Scroll right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </SlideLeft>
        </div>
      </div>

      {/* Scroll indicator */}
      <SlideUp delay={0.3} className="sm:hidden mb-4 flex justify-center">
        <div className="flex items-center space-x-2 text-gray-500 text-xs">
          <div className="w-4 h-px bg-gray-700"></div>
          <span>{translations[language].services.swipeForMore}</span>
          <div className="w-4 h-px bg-gray-700"></div>
        </div>
      </SlideUp>

      {/* Scrollable container with visual indicators */}
      <div className="relative">
        {/* Left fade gradient */}
        {showServicesLeftArrow && (
          <div
            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          ></div>
        )}

        {/* Right fade gradient */}
        {showServicesRightArrow && (
          <div
            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          ></div>
        )}

        <div
          ref={featuredWorksRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-12 px-6"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
          aria-label="Services carousel"
        >
          <div className="w-8 shrink-0"></div>
          <StaggeredChildren staggerDelay={0.15} direction="up">
            {translations[language].featuredWorks.map((work: any, index: number) => (
              <div key={index} className="w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 snap-center px-4">
                <RetroServiceCard
                  title={work.title}
                  category={work.category}
                  description={work.description}
                  serviceType={featuredWorks[index].serviceType as any}
                />
              </div>
            ))}
          </StaggeredChildren>
          <div className="w-8 shrink-0"></div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="mt-4 mx-auto max-w-6xl px-6">
        <div
          className="h-1 bg-gray-900 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={servicesMaxScroll > 0 ? Math.round((servicesScrollPosition / servicesMaxScroll) * 100) : 0}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{
              width: `${servicesMaxScroll > 0 ? (servicesScrollPosition / servicesMaxScroll) * 100 : 0}%`,
              minWidth: "5%",
            }}
          ></div>
        </div>
      </div>
    </RevealSection>
  )
}

export default ServicesSection

