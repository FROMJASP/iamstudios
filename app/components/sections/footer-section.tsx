"use client"

import type React from "react"

import { StaggeredChildren, SlideUp } from "../animations/motion"
import { RevealSection } from "../animations/reveal-section"

interface FooterSectionProps {
  translations: any
  language: "en" | "nl"
}

const FooterSection: React.FC<FooterSectionProps> = ({ translations, language }) => {
  return (
    <RevealSection className="bg-black text-white py-16 border-t border-gray-900" direction="up">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <StaggeredChildren staggerDelay={0.1} initialDelay={0.2} direction="up">
            <div>
              <div className="text-xl tracking-widest font-light mb-6">
                <span className="text-blue-500">iam</span> <span className="text-white">studios</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{translations[language].footer.services}</p>
            </div>
            <div>
              <h3 className="text-sm tracking-widest mb-6">{translations[language].footer.contact}</h3>
              <p className="text-gray-400 text-sm mb-2">info@iam-studios.nl</p>
              <p className="text-gray-400 text-sm mb-2">020 24 44 821</p>
              <address className="text-gray-400 text-sm not-italic">Donauweg 10, Amsterdam</address>
            </div>
          </StaggeredChildren>
        </div>
        <SlideUp
          delay={0.5}
          className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} IAM STUDIOS. {translations[language].footer.rights}
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              href="https://www.wearesabine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white text-xs transition-colors"
            >
              WeAreSabine
            </a>
            <a
              href="https://14voices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white text-xs transition-colors"
            >
              14voices
            </a>
          </div>
        </SlideUp>
      </div>
    </RevealSection>
  )
}

export default FooterSection

