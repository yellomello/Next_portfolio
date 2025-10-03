import React, { useState, ComponentPropsWithoutRef, CSSProperties } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import {FaEnvelope } from 'react-icons/fa'

export interface InteractiveShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  defaultText: string       // "Contact Me"
  hoverText?: string        // "Copy Email"
  clickedText?: string      // "Copied!"
  copyText?: string          // text to copy to clipboard
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

export const InteractiveShimmerButton2 = React.forwardRef<
  HTMLButtonElement,
  InteractiveShimmerButtonProps
>(
  (
    {
      defaultText,
      hoverText = "Copy Email",
      clickedText = "Copied!",
      copyText,
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
      ...props
    },
    ref
  ) => {
    const [clicked, setClicked] = useState(false)
    const [hover, setHover] = useState(false)

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (copyText) {
        try {
          await navigator.clipboard.writeText(copyText)
          setClicked(true)
          setTimeout(() => setClicked(false), 2000) // reset after 2s
        } catch (err) {
          console.error("Failed to copy text:", err)
        }
      }
      if (props.onClick) props.onClick(event)
    }

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
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        {/* Shimmer Layer */}
        <div className="-z-30 blur-[2px] [container-type:size] absolute inset-0 overflow-visible">
          <div className="animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {/* Text */}
       <span
          className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300"
          style={{ minWidth: "16ch" }} // reserve space for the longest text
        >
          {clicked
            ? clickedText
            : hover
            ? (
              <> 
                <FaEnvelope className="h-4 w-4 text-blue-300 hover:opacity-80" />
                {hoverText} <Copy className="h-4 w-4" />
              </>
            )
            : defaultText
          }
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

InteractiveShimmerButton2.displayName = "InteractiveShimmerButton2"
