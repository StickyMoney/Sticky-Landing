import { cn } from "@/lib/utils"

interface DexProps {
  variant: "outline" | "solid"
}

export function Dex({ variant }: DexProps) {
  return (
    <div
      className={cn(
        "text-8xl font-bold tracking-tighter",
        variant === "outline" ? "text-transparent" : "text-black",
        variant === "outline" ? "stroke-black" : "",
        "stroke-[12px] sm:stroke-[16px]",
      )}
      style={{ WebkitTextStroke: variant === "outline" ? "2px black" : "none" }}
    >
      DEX
    </div>
  )
}
