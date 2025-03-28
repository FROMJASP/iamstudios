"use client"

import { useEffect, useRef, useState } from "react"
import { MenuIcon, X, ChevronRight, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SoundWaveDistortion from "./sound-wave-distortion"
import VinylPortfolio from "./vinyl-portfolio"
import HeroSoundWaves from "./hero-sound-waves"
import RetroServiceCard from "./retro-service-card"
import React from "react"
import { JsonLd } from "./json-ld"
import { sections, translations } from "../data/content"
import { portfolioProjects, portfolioProjectsEN, featuredWorks } from "../data/content"

// Custom flag components
const NLFlag = () => (
  <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect fill="#21468B" width="900" height="600" />
    <rect fill="#FFFFFF" width="900" height="400" />
    <rect fill="#AE1C28" width="900" height="200" />
  </svg>
)

const GBFlag = () => (
  <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
)

// Hero image
// const heroImage = "https://images.unsplash.com/photo-1519074069390-a3a1bcd8d3ee?q=80&w=2000&auto=format&fit=crop"

// Add this at the top of your component to use React.memo for expensive components
const MemoizedVinylPortfolio = React.memo(VinylPortfolio)
const MemoizedRetroServiceCard = React.memo(RetroServiceCard)
const MemoizedSoundWaveDistortion = React.memo(SoundWaveDistortion, (prevProps, nextProps) => {
  // Only re-render if className changes
  return prevProps.className === nextProps.className
})
const MemoizedHeroSoundWaves = React.memo(HeroSoundWaves, (prevProps, nextProps) => {
  // Only re-render if className changes
  return prevProps.className === nextProps.className
})

export default function HomeContent() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [language, setLanguage] = useState<"en" | "nl">("nl") // Default to Dutch
  const [isLanguageDetected, setIsLanguageDetected] = useState(false)
  const featuredWorksRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const [portfolioImagesLoaded, setPortfolioImagesLoaded] = useState(false)
  const [servicesScrollPosition, setServicesScrollPosition] = useState(0)
  const [servicesMaxScroll, setServicesMaxScroll] = useState(0)
  const [showServicesLeftArrow, setShowServicesLeftArrow] = useState(false)
  const [showServicesRightArrow, setShowServicesRightArrow] = useState(true)

  // Handle loading state
  useEffect(() => {
    // Skip the loading animation in production for faster initial render
    if (process.env.NODE_ENV === "production") {
      setLoading(false)
      return
    }

    // Shorter loading time
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  // Detect user's language and set default language
  useEffect(() => {
    if (isLanguageDetected) return

    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Check if we're on the English page
      if (window.location.pathname.includes("/en")) {
        setLanguage("en")
      } else {
        // Get browser language
        const browserLang = navigator.language || (navigator as any).userLanguage

        // If the browser language starts with 'nl', set language to Dutch, otherwise English
        if (browserLang && browserLang.toLowerCase().startsWith("nl")) {
          setLanguage("nl")
        } else {
          setLanguage("en")
        }
      }

      setIsLanguageDetected(true)
    }
  }, [isLanguageDetected])

  // Add a useEffect to ensure video autoplay works
  useEffect(() => {
    // Find the video element
    const videoElement = document.querySelector("video")

    if (videoElement) {
      // Force play the video after a short delay
      const playVideo = () => {
        videoElement.play().catch((error) => {
          console.log("Video autoplay failed:", error)

          // If autoplay fails, add a play button
          if (!document.getElementById("video-play-button")) {
            const playButton = document.createElement("button")
            playButton.id = "video-play-button"
            playButton.innerHTML = "Play Video"
            playButton.style.cssText =
              "position: absolute; z-index: 30; top: 20px; right: 20px; background: rgba(0,0,0,0.5); color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;"

            playButton.addEventListener("click", () => {
              videoElement.play()
              playButton.remove()
            })

            document.querySelector(".hero-section")?.appendChild(playButton)
          }
        })
      }

      // Try to play after a short delay
      setTimeout(playVideo, 1000)

      // Also try to play on user interaction
      const handleUserInteraction = () => {
        playVideo()
        // Remove event listeners after first interaction
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
      }

      document.addEventListener("click", handleUserInteraction)
      document.addEventListener("touchstart", handleUserInteraction)

      return () => {
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
      }
    }
  }, [])

  // Add a useEffect to handle video playback
  useEffect(() => {
    const video = document.querySelector("video")
    const playButton = document.getElementById("manual-play-button")

    if (video && playButton) {
      // Check if video is playing
      const checkVideoPlaying = () => {
        // If video is paused and has loaded enough to play
        if (video.paused && video.readyState >= 2) {
          // Try to play
          video.play().catch(() => {
            // If autoplay is blocked, show the play button
            playButton.classList.remove("hidden")
          })
        }
      }

      // Check after video has loaded enough data
      video.addEventListener("loadeddata", checkVideoPlaying)

      // Also check after a timeout in case the event doesn't fire
      setTimeout(checkVideoPlaying, 2000)

      return () => {
        video.removeEventListener("loadeddata", checkVideoPlaying)
      }
    }
  }, [])

  // Handle scroll events
  useEffect(() => {
    // Throttle scroll events to run at most every 50ms
    let ticking = false
    let lastKnownScrollY = 0

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Set activeSection to "home" when at the top of the page
          if (lastKnownScrollY < 100) {
            setActiveSection("home")
            setScrollY(lastKnownScrollY)
            ticking = false
            return
          }

          // Check if featured works section is in view
          const featuredWorksSection = document.querySelector(".featured-works-section")
          if (featuredWorksSection) {
            const rect = featuredWorksSection.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection("diensten")
              setScrollY(lastKnownScrollY)
              ticking = false
              return
            }
          }

          // Find the current active section - only check visible sections
          const scrollPosition = lastKnownScrollY + 100

          for (const section of sections) {
            const element = sectionRefs.current[section.id]
            if (!element) continue

            const { offsetTop, offsetHeight } = element

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id)
              break
            }
          }

          setScrollY(lastKnownScrollY)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

    // Add a more frequent update for smoother progress bar
    featuredWorks.addEventListener(
      "scroll",
      () => {
        requestAnimationFrame(() => {
          setServicesScrollPosition(featuredWorks.scrollLeft)
          const containerWidth = featuredWorks.clientWidth
          const scrollWidth = featuredWorks.scrollWidth
          setServicesMaxScroll(scrollWidth - containerWidth)
          setShowServicesLeftArrow(featuredWorks.scrollLeft > 10)
          setShowServicesRightArrow(featuredWorks.scrollLeft < scrollWidth - containerWidth - 10)
        })
      },
      { passive: true },
    )

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

    // Add a more direct event listener for smoother progress bar updates
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (featuredWorks) {
          setServicesScrollPosition(featuredWorks.scrollLeft)
          const containerWidth = featuredWorks.clientWidth
          const scrollWidth = featuredWorks.scrollWidth
          setServicesMaxScroll(scrollWidth - containerWidth)
        }
      })
    }

    featuredWorks.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up the event listener
    return () => {
      featuredWorks.removeEventListener("scroll", updateScrollState)
      featuredWorks.removeEventListener("scroll", handleScroll)
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
      featuredWorks.scrollLeft += scrollAmount
    }

    featuredWorks.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      featuredWorks.removeEventListener("wheel", handleWheel)
    }
  }, [])

  useEffect(() => {
    // Set portfolio images to loaded immediately
    setPortfolioImagesLoaded(true)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Update the scrollToSection function to handle the "diensten" section correctly
  const scrollToSection = (id: string) => {
    if (id === "diensten") {
      const featuredWorksSection = document.querySelector(".featured-works-section")
      if (featuredWorksSection) {
        featuredWorksSection.scrollIntoView({ behavior: "smooth" })
        setActiveSection("diensten")
        setMenuOpen(false)
        return
      }
    }

    const element = sectionRefs.current[id]
    if (!element) return

    element.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  // Fix the scrollServices function to ensure it works properly with both left and right arrows
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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IAM STUDIOS",
    image: "https://www.iam-studios.nl/og-image.jpg",
    url: "https://www.iam-studios.nl",
    telephone: "+31202444821",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Donauweg 10",
      addressLocality: "Amsterdam",
      postalCode: "1043 AJ",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3909553,
      longitude: 4.8280973,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/iamstudios",
      "https://www.instagram.com/iamstudios",
      "https://www.linkedin.com/company/iamstudios",
    ],
    description:
      language === "en"
        ? "Professional sound studio in Amsterdam for voice-overs, dubbing, sound design, and music composition."
        : "Professionele geluidsstudio in Amsterdam voor voice-overs, dubbing, sound design en muziekcompositie.",
  }

  // Add a useEffect to handle about section video playback
  useEffect(() => {
    const aboutVideo = document.querySelector("#about-us-video") as HTMLVideoElement
    const playButton = document.getElementById("about-video-play-button")

    if (aboutVideo && playButton) {
      // Check if video is playing
      const checkVideoPlaying = () => {
        // If video is paused and has loaded enough to play
        if (aboutVideo.paused && aboutVideo.readyState >= 2) {
          // Try to play
          aboutVideo.play().catch(() => {
            // If autoplay is blocked, show the play button
            playButton.classList.remove("hidden")
          })
        }
      }

      // Check after video has loaded enough data
      aboutVideo.addEventListener("loadeddata", checkVideoPlaying)

      // Also check after a timeout in case the event doesn't fire
      setTimeout(checkVideoPlaying, 2000)

      return () => {
        aboutVideo.removeEventListener("loadeddata", checkVideoPlaying)
      }
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* SEO Structured Data */}
      <JsonLd data={structuredData} />

      {loading ? (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-t-2 border-gray-700 rounded-full animate-spin"></div>
            <div className="absolute inset-0 border-t-2 border-l-2 border-blue-500 rounded-full animate-spin-slow"></div>
          </div>
          <p className="mt-8 text-sm tracking-widest text-white font-light">IAM STUDIOS</p>
        </div>
      ) : (
        <>
          {/* Elegant Navigation Bar */}
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? "bg-black shadow-md py-3" : "bg-transparent py-6"}`}
          >
            <div className="container mx-auto px-6 flex items-center justify-between">
              {/* Logo */}
              <div className="text-xl tracking-widest font-light">
                <Link href="/" aria-label="IAM STUDIOS Home">
                  <span className="text-blue-500">iam</span> <span className="text-white">studios</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8 items-center" aria-label="Main Navigation">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="relative text-sm tracking-widest py-2 px-1 transition-colors duration-300 text-white hover:text-gray-300"
                  aria-label={translations[language].nav.home}
                >
                  {translations[language].nav.home}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px bg-blue-500 transform transition-transform duration-300 ${
                      activeSection === "home" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>

                <button
                  onClick={() => scrollToSection("diensten")}
                  className="relative text-sm tracking-widest py-2 px-1 transition-colors duration-300 text-white hover:text-gray-300"
                  aria-label={translations[language].nav.services}
                >
                  {translations[language].nav.services}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px bg-blue-500 transform transition-transform duration-300 ${
                      activeSection === "diensten" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>

                {sections.map((section) => (
                  <div key={section.id} className="relative group">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`relative text-sm tracking-widest py-2 px-1 transition-colors duration-300 flex items-center ${
                        activeSection === section.id ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                      aria-label={
                        section.id === "over-ons"
                          ? translations[language].nav.aboutUs
                          : section.id === "portfolio"
                            ? translations[language].nav.portfolio
                            : section.id === "divisies"
                              ? translations[language].nav.divisions
                              : translations[language].nav.contact
                      }
                    >
                      {section.id === "over-ons"
                        ? translations[language].nav.aboutUs
                        : section.id === "portfolio"
                          ? translations[language].nav.portfolio
                          : section.id === "divisies"
                            ? translations[language].nav.divisions
                            : translations[language].nav.contact}
                      {section.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-px bg-blue-500 transform transition-transform duration-300 ${
                          activeSection === section.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </button>

                    {section.hasDropdown && (
                      <div className="absolute left-0 mt-2 w-48 bg-black border border-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-2">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900">
                            Divisie 1
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900">
                            Divisie 2
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900">
                            Divisie 3
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Language Switcher */}
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setLanguage("nl")}
                    className={`w-6 h-4 rounded overflow-hidden transition-opacity ${language === "nl" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                    aria-label="Switch to Dutch"
                  >
                    <NLFlag />
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`w-6 h-4 rounded overflow-hidden transition-opacity ${language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                    aria-label="Switch to English"
                  >
                    <GBFlag />
                  </button>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </header>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed inset-0 z-50 bg-black transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            aria-hidden={!menuOpen}
          >
            <div className="container mx-auto px-6 py-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-16">
                <div className="text-xl tracking-widest font-light">
                  <span className="text-blue-500">iam</span> <span className="text-white">studios</span>
                </div>
                <div className="flex items-center">
                  {/* Language Switcher */}
                  <div className="flex items-center space-x-2 mr-4">
                    <button
                      onClick={() => setLanguage("nl")}
                      className={`w-6 h-4 rounded overflow-hidden transition-opacity ${language === "nl" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                      aria-label="Switch to Dutch"
                    >
                      <NLFlag />
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`w-6 h-4 rounded overflow-hidden transition-opacity ${language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                      aria-label="Switch to English"
                    >
                      <GBFlag />
                    </button>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="w-10 h-10 flex items-center justify-center text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-6" aria-label="Mobile Navigation">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setMenuOpen(false)
                  }}
                  className="text-xl tracking-widest py-2 relative group text-left flex items-center justify-between text-white hover:bg-gray-900/30 hover:pl-2 transition-all duration-300 rounded-sm"
                  aria-label={translations[language].nav.home}
                >
                  {translations[language].nav.home}
                  <ChevronRight
                    className={`w-5 h-5 ${activeSection === "home" ? "text-blue-500" : "text-gray-500 group-hover:text-blue-400"} transition-colors duration-300`}
                  />
                </button>

                <button
                  onClick={() => scrollToSection("diensten")}
                  className="text-xl tracking-widest py-2 relative group text-left flex items-center justify-between text-white hover:bg-gray-900/30 hover:pl-2 transition-all duration-300 rounded-sm"
                  aria-label={translations[language].nav.services}
                >
                  {translations[language].nav.services}
                  <ChevronRight
                    className={`w-5 h-5 ${activeSection === "diensten" ? "text-blue-500" : "text-gray-500 group-hover:text-blue-400"} transition-colors duration-300`}
                  />
                </button>

                {sections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-xl tracking-widest py-2 relative group text-left flex items-center justify-between w-full hover:bg-gray-900/30 hover:pl-2 transition-all duration-300 rounded-sm"
                      aria-label={
                        section.id === "over-ons"
                          ? translations[language].nav.aboutUs
                          : section.id === "portfolio"
                            ? translations[language].nav.portfolio
                            : section.id === "divisies"
                              ? translations[language].nav.divisions
                              : translations[language].nav.contact
                      }
                    >
                      <span
                        className={
                          activeSection === section.id
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white transition-colors duration-300"
                        }
                      >
                        {section.id === "over-ons"
                          ? translations[language].nav.aboutUs
                          : section.id === "portfolio"
                            ? translations[language].nav.portfolio
                            : section.id === "divisies"
                              ? translations[language].nav.divisions
                              : translations[language].nav.contact}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${activeSection === section.id ? "text-blue-500" : "text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1"}`}
                      />
                    </button>
                  </div>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="w-full h-px bg-gray-800 mb-8"></div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2">{translations[language].contact.email}</p>
                    <a
                      href="mailto:info@iamstudios.com"
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline"
                    >
                      info@iamstudios.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">{translations[language].contact.phone}</p>
                    <a
                      href="tel:+31202444821"
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline"
                    >
                      020 24 44 821
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section - Alternative Implementation */}
          <section
            className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 bg-black hero-section"
            aria-labelledby="hero-heading"
          >
            {/* Video Background - Using iframe for better compatibility */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
              {/* Fallback image that shows while video loads */}
              <Image
                src="https://images.unsplash.com/photo-1519074069390-a3a1bcd8d3ee?q=80&w=2000&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover opacity-70"
                priority
              />

              {/* Video element with direct styling */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ zIndex: 1 }}
              >
                <source src="https://framerusercontent.com/assets/Z0BNqByhIZaNWdI4MurvZ1RdBaw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Simple dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30" style={{ zIndex: 2 }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-6xl relative z-20">
              <div className="flex flex-col items-center text-center">
                <h1 id="hero-heading" className="text-6xl sm:text-8xl font-light tracking-tight leading-none mb-6">
                  <span className="text-blue-500">iam</span>
                  <span className="text-white">studios</span>
                </h1>
                <p className="text-sm sm:text-base tracking-wider text-gray-400 max-w-2xl mb-12">
                  {translations[language].hero.services}
                </p>
                <button
                  onClick={() => scrollToSection("over-ons")}
                  className="px-8 py-3 border border-gray-700 text-sm tracking-widest text-white hover:bg-gray-900 transition-colors duration-300 group"
                  aria-label={translations[language].hero.tellMore}
                >
                  <span className="inline-flex items-center">
                    {translations[language].hero.tellMore}
                    <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Scroll indicator */}
            <div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
              aria-hidden="true"
            >
              <div className="w-px h-16 bg-gray-800"></div>
              <p className="mt-4 text-xs tracking-widest text-gray-600">{translations[language].hero.scroll}</p>
            </div>

            {/* Manual play button that appears if autoplay fails */}
            <button
              id="manual-play-button"
              className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded z-30 hidden"
              onClick={() => {
                const video = document.querySelector("video")
                if (video) {
                  video.play()
                  document.getElementById("manual-play-button")?.classList.add("hidden")
                }
              }}
            >
              Play Video
            </button>
          </section>

          {/* Featured Works - Horizontal Scroll with Retro Marvel Style */}
          <section className="py-24 bg-gray-950 featured-works-section" aria-labelledby="services-heading">
            <div className="container mx-auto px-6 mb-12">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-500 tracking-widest mb-2">{translations[language].nav.services}</p>
                  <h2 id="services-heading" className="text-3xl font-light text-white">
                    {translations[language].services.title}
                  </h2>
                </div>
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
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="sm:hidden mb-4 flex justify-center">
              <div className="flex items-center space-x-2 text-gray-500 text-xs">
                <div className="w-4 h-px bg-gray-700"></div>
                <span>{translations[language].services.swipeForMore}</span>
                <div className="w-4 h-px bg-gray-700"></div>
              </div>
            </div>

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
                {translations[language].featuredWorks.map((work, index) => (
                  <div key={index} className="w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 snap-center px-4">
                    <MemoizedRetroServiceCard
                      title={work.title}
                      category={work.category}
                      description={work.description}
                      serviceType={featuredWorks[index].serviceType as any}
                      hideArrow={true}
                      disablePointer={true}
                    />
                  </div>
                ))}
                <div className="w-8 shrink-0"></div>
              </div>
            </div>

            {/* Scroll progress indicator */}
            <div className="mt-4 mx-auto max-w-6xl px-6">
              <div
                className="h-1 bg-gray-900 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={
                  servicesMaxScroll > 0 ? Math.round((servicesScrollPosition / servicesMaxScroll) * 100) : 0
                }
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full bg-blue-500 transition-all duration-100"
                  style={{
                    width: `${servicesMaxScroll > 0 ? (servicesScrollPosition / servicesMaxScroll) * 100 : 0}%`,
                    minWidth: "5%",
                  }}
                />
              </div>
            </div>
          </section>
          {sections.map((section, index) => {
            // Special handling for portfolio section
            if (section.id === "portfolio") {
              return (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className="py-24 bg-black"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                      <p className="text-sm text-blue-500 tracking-widest mb-2">
                        {translations[language].portfolio.subtitle}
                      </p>
                      <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
                        {translations[language].nav.portfolio}
                      </h2>
                      <div className="w-16 h-px bg-gray-700 mx-auto mb-8"></div>
                    </div>

                    {/* Vinyl-inspired Portfolio Component - Use the correct language version */}
                    <MemoizedVinylPortfolio
                      projects={language === "en" ? portfolioProjectsEN : portfolioProjects}
                      otherProjectsText={translations[language].otherProjects}
                      nextProjectText={translations[language].nextProject}
                      scrollForMoreText={translations[language].portfolio.scrollForMoreProjects}
                      swipeForMoreText={translations[language].portfolio.swipeForMoreProjects}
                    />
                  </div>
                </section>
              )
            }

            // Special handling for divisies section to use video instead of image
            if (section.id === "divisies") {
              return (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className={`py-24 ${index % 2 === 0 ? "bg-black" : "bg-gray-950"}`}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <div className="container mx-auto px-6">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                    >
                      <div className={`${index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}`}>
                        <p className="text-sm text-blue-500 tracking-widest mb-2">
                          {translations[language].divisions.subtitle}
                        </p>
                        <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
                          {translations[language].nav.divisions}
                        </h2>
                        <div className="w-16 h-px bg-gray-700 mb-8"></div>
                        <p className="text-gray-400 leading-relaxed mb-12">
                          {translations[language].divisions.content}
                        </p>
                        <a
                          href="https://www.wearesabine.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm tracking-widest transition-all duration-300 border border-blue-600 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                          aria-label={translations[language].divisions.button}
                        >
                          <span>{translations[language].divisions.button}</span>
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                      <div className="relative">
                        <div className="aspect-video w-full overflow-hidden">
                          <video
                            src="https://framerusercontent.com/assets/Z0BNqByhIZaNWdI4MurvZ1RdBaw.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="w-full h-full object-cover"
                            preload="none"
                            loading="lazy"
                            aria-label={
                              language === "en"
                                ? "The Sabine 1 speaking cell demonstration"
                                : "The Sabine 1 spreekcel demonstratie"
                            }
                          />
                        </div>
                        <div
                          className={`absolute ${index % 2 === 0 ? "-bottom-6 -left-6" : "-bottom-6 -right-6"} w-24 h-24 border border-gray-800`}
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            }

            // Special handling for contact section
            if (section.id === "contact") {
              return (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className={`py-24 ${index % 2 === 0 ? "bg-black" : "bg-gray-950"}`}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                      <p className="text-sm text-blue-500 tracking-widest mb-2">
                        {translations[language].contact.subtitle}
                      </p>
                      <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
                        {translations[language].nav.contact}
                      </h2>
                      <div className="w-16 h-px bg-gray-700 mx-auto mb-8"></div>
                    </div>

                    <div className="max-w-2xl mx-auto bg-gray-900/50 p-10 rounded-lg border border-gray-800 backdrop-blur-sm">
                      <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center">
                        {translations[language].contact.message}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center justify-center md:justify-end">
                          <div className="text-4xl mr-4" aria-hidden="true">
                            📨
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">{translations[language].contact.email}</p>
                            <a
                              href="mailto:info@iam-studios.nl"
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                              aria-label="Email IAM STUDIOS"
                            >
                              info@iam-studios.nl
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center justify-center md:justify-start">
                          <div className="text-4xl mr-4" aria-hidden="true">
                            ☎️
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">{translations[language].contact.phone}</p>
                            <a
                              href="tel:+31202444821"
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                              aria-label="Call IAM STUDIOS"
                            >
                              020 24 44 821
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 pt-8 border-t border-gray-800">
                        <div className="flex justify-center space-x-6">
                          <a
                            href="mailto:info@iam-studios.nl?subject=Contact%20IAM%20Studios"
                            className="px-6 py-3 border border-blue-500 text-sm tracking-widest text-white hover:bg-blue-500/20 transition-colors duration-300 group inline-block"
                            aria-label={translations[language].contact.sendMessage}
                          >
                            <span className="inline-flex items-center">
                              {translations[language].contact.sendMessage}
                              <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            }

            // Regular section rendering (over-ons)
            if (section.id === "over-ons") {
              return (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className={`py-24 ${index % 2 === 0 ? "bg-black" : "bg-gray-950"}`}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <div className="container mx-auto px-6">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                    >
                      <div className={`${index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}`}>
                        <p className="text-sm text-blue-500 tracking-widest mb-2">
                          {translations[language].aboutUs.subtitle}
                        </p>
                        <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
                          {translations[language].nav.aboutUs}
                        </h2>
                        <div className="w-16 h-px bg-gray-700 mb-8"></div>
                        <p className="text-gray-400 leading-relaxed mb-12">{translations[language].aboutUs.content}</p>
                        <button
                          onClick={() => scrollToSection("portfolio")}
                          className="text-sm tracking-wider flex items-center group text-gray-400 hover:text-white"
                          aria-label={translations[language].aboutUs.viewOurWork}
                        >
                          <span>{translations[language].aboutUs.viewOurWork}</span>
                          <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                      <div className="relative">
                        {section.useCustomImage ? (
                          <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-900 border border-gray-800">
                            {/* Fallback image that shows while video loads or if video fails */}
                            <Image
                              src="https://images.unsplash.com/photo-1519074069390-a3a1bcd8d3ee?q=80&w=2000&auto=format&fit=crop"
                              alt={language === "en" ? "IAM STUDIOS recording session" : "IAM STUDIOS opnamesessie"}
                              fill
                              className="object-cover"
                              priority
                            />

                            {/* Video element with better browser compatibility */}
                            <video
                              id="about-us-video"
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-03-12%20at%2015.45.48-EzhhKsMj2jKaREVsyvsaapa2QLJMoJ.mov"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute inset-0 w-full h-full object-cover z-10"
                              onError={(e) => {
                                console.error("Video failed to load:", e)
                                // Keep the fallback image visible by not changing opacity
                                e.currentTarget.style.opacity = "0"
                              }}
                              onCanPlay={(e) => {
                                // Make video visible once it can play
                                e.currentTarget.style.opacity = "1"
                              }}
                              style={{ opacity: 0, transition: "opacity 0.5s ease" }}
                            />

                            {/* Manual play button that appears if autoplay fails */}
                            <button
                              id="about-video-play-button"
                              className="absolute top-4 right-4 z-20 bg-black/50 text-white px-4 py-2 rounded hidden"
                              onClick={() => {
                                const video = document.querySelector("#about-us-video")
                                if (video) {
                                  video.play()
                                  document.getElementById("about-video-play-button")?.classList.add("hidden")
                                }
                              }}
                            >
                              Play Video
                            </button>

                            {/* Overlay with slight darkening for better text visibility */}
                            <div className="absolute inset-0 bg-black/20 z-10" aria-hidden="true"></div>

                            {/* Decorative elements */}
                            <div
                              className="absolute top-6 left-6 w-12 h-12 border border-gray-700 z-20"
                              aria-hidden="true"
                            ></div>
                            <div
                              className="absolute bottom-6 right-6 w-12 h-12 border border-gray-700 z-20"
                              aria-hidden="true"
                            ></div>
                          </div>
                        ) : (
                          <Image
                            src={section.image || "/placeholder.svg?height=600&width=800"}
                            alt={
                              language === "en"
                                ? `IAM STUDIOS ${section.title} section`
                                : `IAM STUDIOS ${section.title} sectie`
                            }
                            width={600}
                            height={800}
                            className="object-cover"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={75} // Reduced quality for faster loading
                          />
                        )}
                        <div
                          className={`absolute ${index % 2 === 0 ? "-bottom-6 -left-6" : "-bottom-6 -right-6"} w-24 h-24 border border-gray-800`}
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            }

            return null
          })}

          <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="container mx-auto px-6">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="space-y-6">
                  <div className="text-2xl tracking-widest font-light">
                    <span className="text-blue-500">iam</span> <span className="text-white">studios</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    A creative studio located in Amsterdam, The Netherlands
                  </p>
                  {/* Social Media Icons */}
                  <div className="flex space-x-4 pt-2">
                    <a
                      href="https://www.linkedin.com/company/iam-studios-b.v./"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-500/20 transition-colors border border-gray-800 hover:border-blue-500"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Services Column */}
                <div>
                  <h3 className="text-sm tracking-widest mb-6 uppercase font-medium text-gray-300">
                    {translations[language].nav.services}
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                        Voice-overs & Dubbing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                        Sound Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                        Muziekcompositie
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                        Geluidsnabewerking
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Divisions Column */}
                <div>
                  <h3 className="text-sm tracking-widest mb-6 uppercase font-medium text-gray-300">
                    {translations[language].nav.divisions}
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://14voices.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        14voices
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                        The Sabine 1
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Column */}
                <div>
                  <h3 className="text-sm tracking-widest mb-6 uppercase font-medium text-gray-300">
                    {translations[language].footer.contact}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <a
                        href="mailto:info@iam-studios.nl"
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        info@iam-studios.nl
                      </a>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <a
                        href="tel:+31202444821"
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        020 24 44 821
                      </a>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      <address className="text-gray-400 text-sm not-italic">Donauweg 10, Amsterdam</address>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright & Language */}
              <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 text-xs">
                  © {new Date().getFullYear()} IAM STUDIOS. {translations[language].footer.rights}
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <button
                    onClick={() => setLanguage("nl")}
                    className={`text-xs transition-colors ${language === "nl" ? "text-white" : "text-gray-600 hover:text-gray-400"}`}
                    aria-label="Switch to Dutch"
                  >
                    Nederlands
                  </button>
                  <span className="text-gray-700">|</span>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`text-xs transition-colors ${language === "en" ? "text-white" : "text-gray-600 hover:text-gray-400"}`}
                    aria-label="Switch to English"
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </main>
  )
}

