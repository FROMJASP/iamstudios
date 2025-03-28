"use client"

import type React from "react"

import { X, ChevronRight } from "lucide-react"
import { GB, NL } from "country-flag-icons/react/3x2"
// Update imports to use direct imports instead of the index barrel
import { StaggeredChildren } from "../animations/staggered-children"

interface MobileMenuProps {
  menuOpen: boolean
  translations: any
  language: "en" | "nl"
  activeSection: string
  sections: any[]
  scrollToSection: (id: string) => void
  setLanguage: (lang: "en" | "nl") => void
  toggleMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  translations,
  language,
  activeSection,
  sections,
  scrollToSection,
  setLanguage,
  toggleMenu,
}) => {
  return (
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
                <NL title="Dutch" className="w-full h-full" />
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`w-6 h-4 rounded overflow-hidden transition-opacity ${language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                aria-label="Switch to English"
              >
                <GB title="English" className="w-full h-full" />
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
          <StaggeredChildren staggerDelay={0.1} initialDelay={0.2} direction="up">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
                toggleMenu()
              }}
              className="text-xl tracking-widest py-2 relative group text-left flex items-center justify-between text-white hover:bg-gray-900/30 hover:pl-2 transition-all duration-300 rounded-sm"
              aria-label={translations[language].nav.home}
            >
              {translations[language].nav.home}
              <ChevronRight
                className={`w-5 h-5 ${activeSection === "home" ? "text-blue-500" : "text-gray-500 group-hover:text-blue-400"} transition-colors duration-300 group-hover:translate-x-1`}
              />
            </button>

            <button
              onClick={() => scrollToSection("diensten")}
              className="text-xl tracking-widest py-2 relative group text-left flex items-center justify-between text-white hover:bg-gray-900/30 hover:pl-2 transition-all duration-300 rounded-sm"
              aria-label={translations[language].nav.services}
            >
              {translations[language].nav.services}
              <ChevronRight
                className={`w-5 h-5 ${activeSection === "diensten" ? "text-blue-500" : "text-gray-500 group-hover:text-blue-400"} transition-colors duration-300 group-hover:translate-x-1`}
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

                {section.hasDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    <button className="text-gray-400 hover:text-white hover:bg-gray-900/30 hover:pl-2 text-sm tracking-wide py-1 block w-full text-left transition-all duration-300 rounded-sm">
                      Divisie 1
                    </button>
                    <button className="text-gray-400 hover:text-white hover:bg-gray-900/30 hover:pl-2 text-sm tracking-wide py-1 block w-full text-left transition-all duration-300 rounded-sm">
                      Divisie 2
                    </button>
                    <button className="text-gray-400 hover:text-white hover:bg-gray-900/30 hover:pl-2 text-sm tracking-wide py-1 block w-full text-left transition-all duration-300 rounded-sm">
                      Divisie 3
                    </button>
                  </div>
                )}
              </div>
            ))}
          </StaggeredChildren>
        </nav>

        <div className="mt-auto">
          <div className="w-full h-px bg-gray-800 mb-8"></div>
          <StaggeredChildren staggerDelay={0.1} initialDelay={0.5} direction="up">
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
          </StaggeredChildren>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

