"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type Grid = {
  rows: number;
  cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
  src: string;
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // in ms
  maxAnimationDelay?: number; // in ms
  colorRevealDelay?: number; // in ms
  showReplayButton?: boolean;
}

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  customGrid,
  showReplayButton = false,
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [key, setKey] = useState(0);

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid?: Grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  const resetAnimation = () => {
    setIsVisible(false);
    setShowColor(false);
    setKey(prev => prev + 1);
  };

  useEffect(() => {
    // Small delay to ensure proper animation on initial mount/refresh
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    const colorTimeout = setTimeout(() => {
      setShowColor(true);
    }, colorRevealDelay + 50);
    
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(colorTimeout);
    };
  }, [colorRevealDelay, key]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      // Use deterministic "random" based on index to avoid hydration issues
      const delay = ((index * 23) % total) * (maxAnimationDelay / total);
      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

  return (
    <div className="relative">
      <div className="relative h-72 w-72 select-none md:h-96 md:w-96" key={key}>
        {pieces.map((piece, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all ease-out",
              isVisible ? "opacity-100" : "opacity-0",
            )}
            style={{
              clipPath: piece.clipPath,
              transitionDelay: `${piece.delay}ms`,
              transitionDuration: `${pixelFadeInDuration}ms`,
            }}
          >
            <img
              src={src}
              alt={`Pixel image piece ${index + 1}`}
              className={cn(
                "size-full object-cover rounded-xl",
                grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale"),
              )}
              style={{
                transition: grayscaleAnimation
                  ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {showReplayButton && (
        <button
          onClick={resetAnimation}
          className="absolute top-2 right-2 z-10 rounded-lg bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm transition-opacity hover:bg-black/70"
        >
          Replay
        </button>
      )}
    </div>
  );
};