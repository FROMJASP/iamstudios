"use client"

import type React from "react"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
// Update imports to use direct imports instead of the index barrel
import { SlideUp } from "../animations/motion"
import { ParallaxScroll } from "../animations/parallax-scroll"
import { RevealSection } from "../animations/reveal-section"

interface AboutSectionProps {
  translations: any
  language: "en" | "nl"
  section: any
  index: number
  scrollToSection: (id: string) => void
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const AboutSection: React.FC<AboutSectionProps> = ({
  translations,
  language,
  section,
  index,
  scrollToSection,
  sectionRefs,
}) => {
  return (
    <RevealSection
      id={section.id}
      ref={(el) => (sectionRefs.current[section.id] = el)}
      className={`py-24 ${index % 2 === 0 ? "bg-black" : "bg-gray-950"}`}
      direction="up"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
        >
          <div className={`${index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}`}>
            <SlideUp delay={0.1}>
              <p className="text-sm text-blue-500 tracking-widest mb-2">{translations[language].aboutUs.subtitle}</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
                {translations[language].nav.aboutUs}
              </h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="w-16 h-px bg-gray-700 mb-8"></div>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-gray-400 leading-relaxed mb-12">{translations[language].aboutUs.content}</p>
            </SlideUp>
            <SlideUp delay={0.5}>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm tracking-wider flex items-center group text-gray-400 hover:text-white"
                aria-label={translations[language].aboutUs.viewOurWork}
              >
                <span>{translations[language].aboutUs.viewOurWork}</span>
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </SlideUp>
          </div>
          <ParallaxScroll className="relative" speed={0.1} direction="up">
            {section.useCustomImage ? (
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-900 border border-gray-800">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-03-12%20at%2015.45.48-EzhhKsMj2jKaREVsyvsaapa2QLJMoJ.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  preload="none"
                  loading="lazy"
                  aria-label={language === "en" ? "IAM STUDIOS recording session" : "IAM STUDIOS opnamesessie"}
                />

                {/* Overlay with slight darkening for better text visibility if needed */}
                <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-12 h-12 border border-gray-700" aria-hidden="true"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 border border-gray-700" aria-hidden="true"></div>
              </div>
            ) : (
              <Image
                src={section.image || "/placeholder.svg?height=600&width=800"}
                alt={language === "en" ? `IAM STUDIOS ${section.title} section` : `IAM STUDIOS ${section.title} sectie`}
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
          </ParallaxScroll>
        </div>
      </div>
    </RevealSection>
  )
}

export default AboutSection

