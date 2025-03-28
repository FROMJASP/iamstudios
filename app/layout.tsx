import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

// Load Space Grotesk font (modern, geometric sans-serif)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iam-studios.nl"),
  title: {
    default: "IAM STUDIOS | Professionele Geluidsstudio Amsterdam",
    template: "%s | IAM STUDIOS",
  },
  description:
    "Geluidsstudio's voor voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie in Amsterdam",
  keywords: [
    "geluidsstudio",
    "voice-over",
    "dubbing",
    "sound design",
    "muziekcompositie",
    "amsterdam",
    "audio post-productie",
  ],
  authors: [{ name: "IAM STUDIOS" }],
  creator: "IAM STUDIOS",
  publisher: "IAM STUDIOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    url: "https://www.iam-studios.nl",
    siteName: "IAM STUDIOS",
    title: "IAM STUDIOS | Professionele Geluidsstudio Amsterdam",
    description:
      "Geluidsstudio's voor voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie in Amsterdam",
    images: [
      {
        url: "https://www.iam-studios.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IAM STUDIOS - Professionele Geluidsstudio Amsterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IAM STUDIOS | Professionele Geluidsstudio Amsterdam",
    description:
      "Geluidsstudio's voor voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie in Amsterdam",
    images: ["https://www.iam-studios.nl/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'