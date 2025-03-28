"use client"

import type React from "react"
import Link from "next/link"
import { MenuIcon, ChevronDown } from "lucide-react"
import { GB, NL } from "country-flag-icons/react/3x2"
// Update imports to use direct imports instead of the index barrel
import { FadeIn, SlideDown, Stagger } from "../animations/motion"

interface HeaderProps {
  translations: any
  language: "en" | "nl"
  activeSection: string
  scrollY: number
  sections: any[]
  scrollToSection: (id: string) => void
  setLanguage: (lang: "en" | "nl") => void
  toggleMenu: () => void
  menuOpen?: boolean
}

const Header: React.FC<HeaderProps> = ({
  translations,
  language,
  activeSection,
  scrollY,
  sections,
  scrollToSection,
  setLanguage,
  toggleMenu,
  menuOpen,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? "bg-black shadow-md py-3" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <FadeIn className="text-xl tracking-widest font-light" delay={0.2} animateWhenVisible={false}>
          <Link href="/" aria-label="IAM STUDIOS Home">
            <span className="text-blue-500">iam</span> <span className="text-white">studios</span>
          </Link>
        </FadeIn>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center" aria-label="Main Navigation">
          <Stagger animateWhenVisible={false}>
            <SlideDown delay={0.3}>
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
            </SlideDown>

            <SlideDown delay={0.4}>
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
            </SlideDown>

            {sections.map((section, idx) => (
              <SlideDown key={section.id} delay={0.5 + idx * 0.1}>
                <div className="relative group">
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
              </SlideDown>
            ))}

            {/* Language Switcher */}
            <SlideDown delay={0.9}>
              <div className="flex items-center space-x-2 ml-4">
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
            </SlideDown>
          </Stagger>
        </nav>

        {/* Mobile Menu Button */}
        <FadeIn delay={0.5} animateWhenVisible={false}>
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-gray-900/30 rounded-full transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </FadeIn>
      </div>
    </header>
  )
}

export default Header

