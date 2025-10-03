import React, { ComponentPropsWithoutRef, CSSProperties } from "react"
import { cn } from "@/lib/utils"

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  shimmerColor2?: string
  shimmerColor3?: string
  shimmerColor4?: string
  shimmerSize?: string
  shimmerDuration?: string
  borderRadius?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export const ShimmerButton2 = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "purple",
      shimmerColor2 = "green",
      shimmerColor3 = "white",
      shimmerColor4 = "white",
      shimmerSize = "0.15em",
      shimmerDuration = "3s",
      borderRadius = "200px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": [shimmerColor, shimmerColor2, shimmerColor3, shimmerColor4],
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
      {/* First shimmer */}
<div className="absolute inset-0 -z-30 overflow-visible [container-type:size]">
  <div className="animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
    <div className="animate-spin-around absolute -inset-full w-auto rotate-0 blur-[2px] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
  </div>
</div>

{/* Second shimmer */}
<div
  className={cn(
    "-z-29 blur-[1px] [container-type:size] absolute inset-0 overflow-visible opacity-70"
  )}
>
  <div className="animate-shimmer-slide-reverse absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
    <div
      className="[transform:rotate(180deg)] animate-spin-around absolute -inset-full w-auto rotate-90 [background:conic-gradient(from_calc(90deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
    />
  </div>
</div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0 size-full",
            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
          )}
        />
      </button>
    )
  }
)

ShimmerButton2.displayName = "ShimmerButton2"
