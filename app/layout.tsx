import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

// Load Inter font with Latin character subset
const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"]
})

// Define metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "STICKY . MONEY - A BSC-Native Lending Co-Operative",
  description: "The deepest liquidity for BTCFi on Binance Smart Chain",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
