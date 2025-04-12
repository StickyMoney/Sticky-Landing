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
import { BookOpen, GithubIcon, Twitter } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left Column - Rich brown with cream and yellow accents */}
      <div className="bg-amber-resin w-full md:w-1/4 p-8 flex flex-col justify-between min-h-[50vh] md:min-h-screen">
        <div className="flex flex-col justify-between h-full">
          {/* Badge with light yellow */}
          <div className="w-1/2 inline-block bg-[#FFE5B4] text-amber-resin font-eight-bit px-4 py-2 text-xl flex items-center justify-center border-2 border-amber-light">
            STICKY.MONEY
          </div>
          {/* Text in cream */}
          <div className="text-[#FFF5E1] text-3xl md:text-4xl font-serif">
            <h1>A BSC-Native Lending Co-Operative.</h1>
            <h2 className="mt-16">The deepest liquidity for BTCFi on Binance Smart Chain.</h2>
          </div>
          {/* Social links with orange hover */}
          <div className="flex space-x-4">
            <Link 
              href="#"
              className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
              prefetch={false}
            >
              <BookOpen className="w-6 h-6 text-amber-resin" />
            </Link>
            <Link 
              href="#"
              className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
              prefetch={false}
            >
              <GithubIcon className="w-6 h-6 text-amber-resin" />
            </Link>
            <Link 
              href="#"
              className="bg-[#FFE5B4] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-[#FF8C42] transition-colors"
              prefetch={false}
            >
              <Twitter className="w-6 h-6 text-amber-resin" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Now using the same warm tan color */}
      <div className="bg-[#FFE5B4] w-full md:w-3/4 flex items-center justify-center p-8">
      </div>
    </main>
  )
}
