import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joint Free Trading Signals - Premium Trading Analysis & Signals",
  description:
    "Welcome to Free Trading Signals Club. Get premium trading signals, analysis, and access to exclusive trading offers and opportunities.",
  generator: "v0.app",
  keywords: "trading signals, free signals, forex signals, trading analysis",
  authors: [{ name: "Free Trading Signals Club" }],
  openGraph: {
    title: "Joint Free Trading Signals - Premium Trading Analysis & Signals",
    description:
      "Welcome to Free Trading Signals Club. Get premium trading signals, analysis, and access to exclusive trading offers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joint Free Trading Signals",
    description: "Premium trading signals and analysis",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
