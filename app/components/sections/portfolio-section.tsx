"use client"

import VinylPortfolio from "../vinyl-portfolio"
import { FadeIn, SlideUp } from "../animations/motion"
import { RevealSection } from "../animations/reveal-section"
import React from "react"

interface PortfolioSectionProps {
  translations: any
  language: "en" | "nl"
  portfolioProjects: any[]
  portfolioProjectsEN: any[]
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  translations,
  language,
  portfolioProjects,
  portfolioProjectsEN,
  sectionRefs,
}) => {
  // Memoize the VinylPortfolio component to prevent unnecessary re-renders
  const MemoizedVinylPortfolio = React.memo(VinylPortfolio)

  return (
    <RevealSection
      id="portfolio"
      ref={(el) => (sectionRefs.current["portfolio"] = el)}
      className="py-24 bg-black"
      direction="up"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <SlideUp delay={0.1}>
            <p className="text-sm text-blue-500 tracking-widest mb-2">{translations[language].portfolio.subtitle}</p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <h2 id="portfolio-heading" className="text-4xl font-light mb-8 text-white">
              {translations[language].nav.portfolio}
            </h2>
          </SlideUp>
          <SlideUp delay={0.3}>
            <div className="w-16 h-px bg-gray-700 mx-auto mb-8"></div>
          </SlideUp>
        </div>

        {/* Vinyl-inspired Portfolio Component - Use the correct language version */}
        <FadeIn delay={0.4}>
          <MemoizedVinylPortfolio
            projects={language === "en" ? portfolioProjectsEN : portfolioProjects}
            otherProjectsText={translations[language].otherProjects}
            nextProjectText={translations[language].nextProject}
            scrollForMoreText={translations[language].portfolio.scrollForMoreProjects}
            swipeForMoreText={translations[language].portfolio.swipeForMoreProjects}
          />
        </FadeIn>
      </div>
    </RevealSection>
  )
}

export default PortfolioSection

