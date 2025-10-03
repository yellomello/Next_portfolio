import React, { ComponentPropsWithoutRef, CSSProperties } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InteractiveShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  beforeText: string
  afterText?: string
  shimmerColor0?: string
  shimmerColor1?: string
  shimmerColor?: string
  shimmerColor2?: string
  shimmerColor3?: string
  shimmerColor4?: string
  shimmerColor5?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
}

export const InteractiveShimmerButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveShimmerButtonProps
>(
  (
    {
      beforeText,
      afterText = "Copied!",
      shimmerColor0 = "white",
      shimmerColor1 = "white",
      shimmerColor = "purple",
      shimmerColor2 = "green",
      shimmerColor3 = "white",
      shimmerColor4 = "white",
      shimmerColor5 = "green",
      shimmerSize = "0.15em",
      shimmerDuration = "2s",
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
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": [
              shimmerColor0,
              shimmerColor1,
              shimmerColor,
              shimmerColor2,
              shimmerColor3,
              shimmerColor4,
              shimmerColor5,
            ],
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        {...props}
      >
        {/* Shimmer Layer */}
        <div className="-z-30 blur-[2px] [container-type:size] absolute inset-0 overflow-visible">
          <div className="animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {/* Text Layers */}
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {beforeText}
        </span>

        <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
          <span>{afterText}</span>
          <Copy className="h-4 w-4" />
        </span>

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

        {/* Backdrop */}
        <div className="absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]" />
      </button>
    )
  }
)

InteractiveShimmerButton.displayName = "InteractiveShimmerButton"
