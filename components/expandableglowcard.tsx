"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowCard } from "./spotlight-card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaYoutube, FaGithub } from "react-icons/fa";

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
      {/* Dark Overlay */}
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
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative bg-black/80 text-white rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl 
                         w-full max-w-[900px] h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full flex-shrink-0">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  className="absolute top-4 right-6 text-white/80 hover:text-white text-3xl transition-colors"
                  onClick={() => setActive(null)}
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
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
    title: "Client Project: Pharmaceutical Data Analysis (Bayshore Healthcare)",
    description: "",
    src: "/bayshore.png",
    content: () => (
      <>
        <p>
          <strong>Tools:</strong> Power BI, Excel, Citrix, Kroll <br />
          <strong>Client:</strong> Bayshore Healthcare – Manulife <br />
          Performed data cleaning and preprocessing on real-time pharmaceutical
          data. <br />
          Used DAX for business logic and measuring various metrics. <br />
          Created a multi-page active dashboard with toolbars and enhanced
          UI/UX. <br />
          <br />
          <em>
            *The data used in the following dashboard is masked and is a subset
            of the actual data to secure business data and Personal Identifiable
            Information (PII).
          </em>
        </p>
      </>
    ),
  },
  {
    title: "Twitter ETL Pipeline - AWS, Apache Airflow",
    description: "",
    src: "/twitter.jpg",
    content: () => (
      <div>
        <p>
          This project was created with the help of an online tutorial by
          Darshil Parmar. Do check out his channel at{" "}
          <a
            href="https://www.youtube.com/@DarshilParmar"
            className="text-blue-400 underline"
            target="_blank"
          >
            https://www.youtube.com/@DarshilParmar
          </a>
          <br />
          This is a basic ETL implementation using the following technologies:
          <br />
          1. Python <br />
          2. Pandas <br />
          3. AWS (S3 and EC2) <br />
          4. Apache Airflow <br />
          5. Twitter API <br />
          6. Linux Terminal Commands
          <br />
          <br />
          The pipeline was stopped to avoid incurring costs but remains
          documented with screenshots and explanations.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/yellomello/Twitter-ETL-Pipeline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white hover:opacity-80 text-2xl" />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Kafka and Spark Streaming ETL Pipeline using Hive Tables",
    description: "",
    src: "/kafka.jpg",
    content: () => (
      <div>
        <p>
          Tools: Power BI, Excel, Citrix, Kroll <br />
          Client: Bayshore Healthcare / Manulife <br />
          Performed data cleaning and preprocessing on real-time pharmaceutical
          data. <br />
          Used DAX for business logic and measuring various metrics. <br />
          Created a multi-page active Dashboard with enhanced UI/UX.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.youtube.com/watch?v=2Q4U9cfDx-w&ab_channel=MarcHanselThomas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-600 hover:text-red-800 text-2xl" />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Live Cryptocurrency Tracker Web App",
    description: "",
    src: "/bitcoin.jpg",
    content: () => (
      <div>
        <p>
          Unfortunately, the website is unavailable at the moment to save up on server costs. However, you can watch the video to get a detailed explanation of the code and the web app in production.
          <br />
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.youtube.com/watch?v=AjyQQc03veI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-600 hover:text-red-800 text-2xl" />
          </a>
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white hover:opacity-80 text-2xl" />
          </a>
        </div>
      </div>
    ),
  },
];
