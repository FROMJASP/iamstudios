"use client"

import type React from "react"

import { ChevronRight } from "lucide-react"
// Update imports to use direct imports instead of the index barrel
import { SlideUp, ScaleIn } from "../animations/motion"
import { RevealSection } from "../animations/reveal-section"

interface DivisionsSectionProps {
  translations: any
  language: "en" | "nl"
  section: any
  index: number
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const DivisionsSection: React.FC<DivisionsSectionProps> = ({ translations, language, section, index, sectionRefs }) => {
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
              <p className="text-sm text-blue-500 tracking-widest mb-2">{translations[language].divisions.subtitle}</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
                {translations[language].nav.divisions}
              </h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="w-16 h-px bg-gray-700 mb-8"></div>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-gray-400 leading-relaxed mb-12">{translations[language].divisions.content}</p>
            </SlideUp>
            <SlideUp delay={0.5}>
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
            </SlideUp>
          </div>
          <ScaleIn delay={0.3} className="relative">
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
                  language === "en" ? "The Sabine 1 speaking cell demonstration" : "The Sabine 1 spreekcel demonstratie"
                }
              />
            </div>
            <div
              className={`absolute ${index % 2 === 0 ? "-bottom-6 -left-6" : "-bottom-6 -right-6"} w-24 h-24 border border-gray-800`}
              aria-hidden="true"
            ></div>
          </ScaleIn>
        </div>
      </div>
    </RevealSection>
  )
}

export default DivisionsSection

