"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
// Utility to join class names conditionally
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function ContainerTextFlipDemo() {
  const words = ["AI Engineer", "Researcher","Data Developer", "Data Engineer", "Software Developer", "Game Developer", "Mathematician", "Product Developer"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block">
        On the highway to becoming a 10x <ContainerTextFlip words={words} />
        {/* <Blips /> */}
        
      </div>
    </motion.h1>
  );
}
