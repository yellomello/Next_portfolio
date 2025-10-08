"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./spotlight-card"; // your existing glow effect
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableGlowCards2() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <>
      {/* Overlay behind expanded card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-black-900 text-white rounded-3xl shadow-2xl overflow-hidden 
                         w-full max-w-[900px] flex flex-col border border-white/10 backdrop-blur-xl"
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
            className="cursor-pointer relative w-64 h-80"
          >
            <GlowCard className="flex flex-col justify-end p-6 w-full h-full relative overflow-hidden rounded-xl">
              
              {/* GIF Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-7000 pointer-events-none"
                style={{
                  backgroundImage:
                    "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 5,
                }}
              />

              {/* Card content */}
              <div className="relative z-10 text-white">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
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
    title: "Client Project: Pharmaceutical Data Analysis (Bayshore Healthcare)",
    description: "PowerBI | DAX | Citrix | Kroll | SQL Server",
    src: "/bayshore.png",
    content: () => (
      <p>
        Tools: Power BI, Excel, Citrix, Kroll
        <br />
        Client: Bayshore Healthcare/Manulife
        <br />
        Performed data cleaning and preprocessing on real-time Pharmaceutical data.
        <br />
        Used DAX for business logic and measuring various metrics.
        <br />
        Created a multipage active Dashboard with toolbars and enhanced UI/UX.
        <br />
        *The data used is masked for security and PII protection.
      </p>
    ),
  },
  {
    title: "Twitter ETL Pipeline - AWS, Apache Airflow",
    description: "",
    src: "/twitter.jpg",
    content: () => (
      <p>
        Twitter ETL pipeline using AWS and Airflow. Performed real-time data ingestion
        and transformation.
      </p>
    ),
  },
  {
    title: "Kafka and Spark Streaming ETL Pipeline using Hive Tables",
    description: "",
    src: "/kafka.jpg",
    content: () => (
      <p>
        Built a real-time ETL pipeline with Kafka, Spark Streaming, and Hive Tables.
        Ensured data integrity and low-latency processing.
      </p>
    ),
  },
  {
    title: "Live Cryptocurrency Tracker Web App",
    description: "",
    src: "/bitcoin.jpg",
    content: () => (
      <p>
        Developed a live cryptocurrency tracker web app with React and WebSocket
        integration for real-time updates.
      </p>
    ),
  },
];
