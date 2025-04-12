import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Load Inter font with Latin character subset
const inter = Inter({ subsets: ["latin"] })

// Define metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "STICKY . MONEY - A BSC-Native Lending Co-Operative",
  description: "The deepest liquidity for BTCFi on Binance Smart Chain",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Playfair Display font for headings */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'