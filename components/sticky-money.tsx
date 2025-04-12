/**
 * StickyMoney Component
 *
 * This component renders the STICKY.MONEY brand name in two possible variants:
 * - solid: Filled text in dark brown color
 * - outline: Outlined text with transparent fill
 *
 * The component uses the Impact font for a bold, striking appearance and
 * implements the WebkitTextStroke property to create the outline effect.
 *
 * Props:
 * - variant: "outline" | "solid" - Determines the visual style of the text
 */

import { cn } from "@/lib/utils"

interface StickyMoneyProps {
  variant: "outline" | "solid"
}

export function StickyMoney({ variant }: StickyMoneyProps) {
  // Dark brown color for text - rich and professional
  const textColor = "#5E2605"

  return (
    <div className="flex items-center">
      <div
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter",
          variant === "outline" ? "text-transparent" : "",
          "font-display",
        )}
        style={{
          color: variant === "outline" ? "transparent" : textColor,
          WebkitTextStroke: variant === "outline" ? `2px ${textColor}` : "none",
          fontFamily: "'Impact', sans-serif",
        }}
      >
        STICKY
      </div>
      <div
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter ml-4",
          variant === "outline" ? "text-transparent" : "",
          "font-display",
        )}
        style={{
          color: variant === "outline" ? "transparent" : textColor,
          WebkitTextStroke: variant === "outline" ? `2px ${textColor}` : "none",
          fontFamily: "'Impact', sans-serif",
        }}
      >
        . MONEY
      </div>
    </div>
  )
}
