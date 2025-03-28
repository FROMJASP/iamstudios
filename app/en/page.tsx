"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import the actual Home component to avoid initial rendering issues
const HomeContent = dynamic(() => import("../components/home-content"), {
  ssr: true,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-t-2 border-gray-700 rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-t-2 border-l-2 border-blue-500 rounded-full animate-spin-slow"></div>
      </div>
      <p className="mt-8 text-sm tracking-widest text-white font-light">IAM STUDIOS</p>
    </div>
  ),
})

export default function EnglishHome() {
  // Set the language attribute for the English page
  useEffect(() => {
    document.documentElement.lang = "en"
  }, [])

  return <HomeContent />
}

