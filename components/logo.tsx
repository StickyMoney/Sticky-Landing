export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const bgColor = variant === "dark" ? "#D14727" : "#FFCDC4"
  const fgColor = variant === "dark" ? "#FFFFFF" : "#D14727"

  return (
    <div className="w-16 h-16 relative" style={{ backgroundColor: bgColor }}>
      {/* Top bar */}
      <div
        className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2"
        style={{ backgroundColor: fgColor }}
      ></div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2"
        style={{ backgroundColor: fgColor }}
      ></div>

      {/* Left bar */}
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-8"
        style={{ backgroundColor: fgColor }}
      ></div>

      {/* Right bar */}
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-8"
        style={{ backgroundColor: fgColor }}
      ></div>

      {/* Center pattern */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-3 gap-0.5">
        <div className="w-2 h-2" style={{ backgroundColor: fgColor }}></div>
        <div className="w-2 h-2" style={{ backgroundColor: bgColor }}></div>
        <div className="w-2 h-2" style={{ backgroundColor: fgColor }}></div>

        <div className="w-2 h-2" style={{ backgroundColor: bgColor }}></div>
        <div className="w-2 h-2" style={{ backgroundColor: fgColor }}></div>
        <div className="w-2 h-2" style={{ backgroundColor: bgColor }}></div>

        <div className="w-2 h-2" style={{ backgroundColor: fgColor }}></div>
        <div className="w-2 h-2" style={{ backgroundColor: bgColor }}></div>
        <div className="w-2 h-2" style={{ backgroundColor: fgColor }}></div>
      </div>
    </div>
  )
}
