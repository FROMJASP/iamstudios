"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import SoundWaveDistortion from "../sound-wave-distortion"
import HeroSoundWaves from "../hero-sound-waves"
// Update imports to use direct imports instead of the index barrel
import { FadeIn, SlideUp } from "../animations/motion"
import { TextReveal } from "../animations/text-reveal"

interface HeroSectionProps {
  translations: any
  language: "en" | "nl"
  scrollToSection: (id: string) => void
  animationsReady: boolean
  heroImage: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  translations,
  language,
  scrollToSection,
  animationsReady,
  heroImage,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 bg-black"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src={heroImage || "/placeholder.svg?height=1080&width=1920"}
          alt={language === "en" ? "IAM STUDIOS sound studio in Amsterdam" : "IAM STUDIOS geluidsstudio in Amsterdam"}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>

      {/* Only render animations if not on mobile and component is mounted */}
      {isMounted && typeof window !== "undefined" && window.innerWidth > 768 && (
        <>
          <SoundWaveDistortion className="z-20 opacity-90" />
          <HeroSoundWaves className="z-10 opacity-80" />
        </>
      )}

      {/* Scan lines */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-repeat opacity-10"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
          backgroundSize: "100% 8px",
        }}
        aria-hidden="true"
      ></div>

      {/* TV Edge Frame */}
      <div
        className="absolute inset-0 z-10 pointer-events-none border-[10px] border-black rounded-lg opacity-50"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="flex flex-col items-center text-center">
          {animationsReady ? (
            <>
              <SlideUp className="mb-6" delay={0.3} animateWhenVisible={false}>
                <TextReveal
                  id="hero-heading"
                  text={`iam studios`}
                  className="text-6xl sm:text-8xl font-light tracking-tight leading-none"
                  as="h1"
                  delay={0.1}
                  staggerChildren={0.05}
                  wordClassName="first:text-blue-500 last:text-white"
                />
              </SlideUp>
              <SlideUp delay={0.5} animateWhenVisible={false}>
                <p className="text-sm sm:text-base tracking-wider text-gray-400 max-w-2xl mb-12">
                  {translations[language].hero.services}
                </p>
              </SlideUp>
              <SlideUp delay={0.7} animateWhenVisible={false}>
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
              </SlideUp>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        delay={1.2}
        aria-hidden="true"
      >
        <div className="w-px h-16 bg-gray-800"></div>
        <p className="mt-4 text-xs tracking-widest text-gray-600">{translations[language].hero.scroll}</p>
      </FadeIn>
    </section>
  )
}

export default HeroSection

