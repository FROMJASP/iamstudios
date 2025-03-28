"use client"

import type React from "react"

import { ChevronRight } from "lucide-react"
import { SlideUp, ScaleIn } from "../animations/motion"
import { StaggeredChildren } from "../animations/staggered-children"
import { RevealSection } from "../animations/reveal-section"

interface ContactSectionProps {
  translations: any
  language: "en" | "nl"
  section: any
  index: number
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const ContactSection: React.FC<ContactSectionProps> = ({ translations, language, section, index, sectionRefs }) => {
  return (
    <RevealSection
      id={section.id}
      ref={(el) => (sectionRefs.current[section.id] = el)}
      className={`py-24 ${index % 2 === 0 ? "bg-black" : "bg-gray-950"}`}
      direction="up"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SlideUp delay={0.1}>
            <p className="text-sm text-blue-500 tracking-widest mb-2">{translations[language].contact.subtitle}</p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <h2 id={`${section.id}-heading`} className="text-4xl font-light mb-8 text-white">
              {translations[language].nav.contact}
            </h2>
          </SlideUp>
          <SlideUp delay={0.3}>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-8"></div>
          </SlideUp>
        </div>

        <ScaleIn
          delay={0.4}
          className="max-w-2xl mx-auto bg-gray-900/50 p-10 rounded-lg border border-gray-800 backdrop-blur-sm"
        >
          <SlideUp delay={0.5}>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center">
              {translations[language].contact.message}
            </p>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggeredChildren staggerDelay={0.1} initialDelay={0.6} direction="up">
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
            </StaggeredChildren>
          </div>

          <SlideUp delay={0.8} className="mt-12 pt-8 border-t border-gray-800">
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
          </SlideUp>
        </ScaleIn>
      </div>
    </RevealSection>
  )
}

export default ContactSection

