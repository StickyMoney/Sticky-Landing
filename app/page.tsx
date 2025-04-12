/**
 * Main Landing Page Component
 *
 * This is the primary page component that renders the STICKY.MONEY landing page.
 * It implements a split-screen layout with:
 * - Left section (1/4 width): Dark background with brand information and social links
 * - Right section (3/4 width): Amber/honey colored section with the brand name
 *
 * The page is fully responsive, stacking vertically on mobile devices and
 * displaying side-by-side on larger screens.
 */

import Link from "next/link"
import { StickyMoney } from "@/components/sticky-money"
import { BookIcon, GithubIcon, Twitter } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left Column - Dark Section */}
      <div className="bg-[#0A0A0A] w-full md:w-1/4 p-8 flex flex-col justify-between min-h-[50vh] md:min-h-screen">
        <div>
          <div className="inline-block bg-[#B8860B] text-[#0A0A0A] font-bold px-4 py-2 mb-16">COMING SOON</div>

          <div className="mt-16 text-[#B8860B] text-3xl md:text-4xl font-serif">
            <h1 className="mb-4">A BSC-Native Lending Co-Operative.</h1>
            <h2 className="mt-8">The deepest liquidity for BTCFi on Binance Smart Chain.</h2>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <Link href="#" className="bg-[#B8860B] rounded-full p-2 flex items-center justify-center w-10 h-10">
            <BookIcon className="w-6 h-6 text-[#0A0A0A]" />
          </Link>
          <Link href="#" className="bg-[#B8860B] rounded-full p-2 flex items-center justify-center w-10 h-10">
            <GithubIcon className="w-6 h-6 text-[#0A0A0A]" />
          </Link>
          <Link href="#" className="bg-[#B8860B] rounded-full p-2 flex items-center justify-center w-10 h-10">
            <Twitter className="w-6 h-6 text-[#0A0A0A]" />
          </Link>
        </div>
      </div>

      {/* Right Column - Amber Section */}
      <div className="bg-[#B8860B] w-full md:w-3/4 flex items-center justify-center p-8">
        <div className="space-y-4">
          <StickyMoney variant="solid" />
          <StickyMoney variant="outline" />
          <StickyMoney variant="solid" />
          <StickyMoney variant="outline" />
          <StickyMoney variant="outline" />
        </div>
      </div>
    </main>
  )
}
