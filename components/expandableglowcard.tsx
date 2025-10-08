"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./spotlight-card"; // your glow effect component
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableGlowCards() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
           <motion.div
  layoutId={`card-${active.title}-${id}`}
  ref={ref}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  className="bg-neutral-900 text-white rounded-3xl shadow-2xl overflow-hidden 
             w-[95%] md:w-[80%] lg:w-[65%] xl:w-[55%] flex flex-col border border-white/10 backdrop-blur-xl"
  transition={{ type: "spring", stiffness: 120, damping: 20 }}
>
  <div className="relative w-full">
    <img
      src={active.src}
      alt={active.title}
      className="w-full h-auto max-h-[75vh] object-contain rounded-t-3xl"
    />
    <button
      className="absolute top-4 right-6 text-white/80 hover:text-white text-3xl transition-colors"
      onClick={() => setActive(null)}
    >
      ✕
    </button>
  </div>

  <div className="p-8">
    <h2 className="text-3xl font-bold mb-4">{active.title}</h2>
    <p className="text-gray-400 mb-6 text-lg leading-relaxed">
      {active.description}
    </p>
    <div className="text-sm md:text-base leading-relaxed space-y-4">
      {active.content()}
    </div>
  </div>
</motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Glow Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer"
          >
            <GlowCard className="flex flex-col justify-end p-6 w-64 h-80">
              <div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </>
  );
}

const cards = [
  {
    title: "Client Project:  Pharmaceutical Data Analysis (Bayshore Healthcare)",
    description: "Bayshore Healthcare",
    src: "/bayshore.png",
    content: () => (
      <p>
       Tools: Power BI, Excel, Citrix, Kroll
Client: Bayshore Healthcare/Manulife
Performed data cleaning and preprocessing on real-time Pharmaceutical data.
Used DAX for business logic and measuring various metrics.
Created a multipage active Dashboard with toolbars and enhanced UI/UX.

*The data used in the following dashboard is masked and is a subset of the actual data for securing business data and Personal Identifiable Information (PII)
      </p>
    ),
  },
  {
    title: "Metallica",
    description: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    content: () => (
      <p>
        Metallica shaped the sound of heavy metal with their powerful riffs and
        dark social commentary. True legends of the genre.
      </p>
    ),
  },
  {
    title: "Led Zeppelin",
    description: "Stairway to Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    content: () => (
      <p>
        A timeless classic. Led Zeppelin’s music continues to define rock’s
        golden age through masterful composition and unmatched artistry.
      </p>
    ),
  },
];
