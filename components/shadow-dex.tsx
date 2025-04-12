import { cn } from "@/lib/utils"

interface ShadowDexProps {
  variant: "outline" | "solid"
}

export function ShadowDex({ variant }: ShadowDexProps) {
  return (
    <div className="flex items-center">
      <div
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter",
          variant === "outline" ? "text-transparent" : "text-[#120807]",
          "font-display",
        )}
        style={{
          WebkitTextStroke: variant === "outline" ? "2px #120807" : "none",
          fontFamily: "'Impact', sans-serif",
        }}
      >
        SHADOW
      </div>
      <div
        className={cn(
          "text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter ml-4",
          variant === "outline" ? "text-transparent" : "text-[#120807]",
          "font-display",
        )}
        style={{
          WebkitTextStroke: variant === "outline" ? "2px #120807" : "none",
          fontFamily: "'Impact', sans-serif",
        }}
      >
        DEX
      </div>
    </div>
  )
}
