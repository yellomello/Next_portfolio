"use client"
import { cn } from "@/lib/utils"

type MLogoProps = {
  size?: number
  className?: string
  withBackground?: boolean
  title?: string
}

/**
 * Animated “M” Logo
 * - Bounce + scale on hover
 * - CSS-only hover animation: stroke draw + glow
 * - White background + black text, inverts in light mode
 */
export function MLogo({ size = 72, className, withBackground = true, title = "M logo" }: MLogoProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform",
        "hover:scale-105 hover:animate-bounce", // Added scale + bounce
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={title}
      role="img"
    >
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "h-full w-full",
          // Default black text, white background
          "text-black group-hover:text-black",
          "transition-colors duration-300",
          // Hover glow
          "transition-[filter] ease-out will-change-filter group-hover:[filter:drop-shadow(0_0_8px_currentColor)_drop-shadow(0_0_16px_currentColor)]"
        )}
        aria-hidden="false"
      >
        {/* <title>{title}</title> */}

        {withBackground ? (
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            rx="16"
            className="transition-colors duration-300 fill-white group-hover:fill-black invert dark:fill-black dark:group-hover:fill-black"
          />
        ) : null}

        {/* The “M” path */}
        <path
          d="M20 80 L20 20 L50 55 L80 20 L80 80"
          className={cn(
            "stroke-current fill-none",
            "[stroke-dasharray:400] [stroke-dashoffset:400] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0]"
          )}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Baseline accent */}
        <line
          x1="18"
          y1="84"
          x2="82"
          y2="84"
          className="opacity-60 stroke-current transition-opacity duration-300 group-hover:opacity-80"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default MLogo
