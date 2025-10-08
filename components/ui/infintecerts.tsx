"use client";

import React from "react";
import { InfiniteMovingCerts } from "../ui/infinite-moving-certs";
import { AnimatedGradientText } from "./animated-gradient-text";

export function InfiniteCerts() {
  const images = [
    { src: "/certs/adf.webp", alt: "ADF" },
    { src: "/certs/advancedpandas.webp", alt: "Advanced Pandas" },
    { src: "/certs/advancedsql.webp", alt: "Advanced SQL" },
    { src: "/certs/automation.webp", alt: "Automation" },
    { src: "/certs/aws.png", alt: "AWS" },
    { src: "/certs/math.jpeg", alt: "Math" },
    { src: "/certs/bigdata.webp", alt: "Big Data" },
    { src: "/certs/corporatefinance.webp", alt: "Corporate Finance" },
    { src: "/certs/dataanalytics.webp", alt: "Data Analytics" },
    { src: "/certs/datawarehouse.webp", alt: "Data Warehouse" },
    { src: "/certs/dp203.webp", alt: "DP203" },
    { src: "/certs/financialaccounting.webp", alt: "Financial Accounting" },
    { src: "/certs/intermediatesql.webp", alt: "Intermediate SQL" },
    { src: "/certs/problemsolving.webp", alt: "Problem Solving" },
    { src: "/certs/Rfundamentals.webp", alt: "R Fundamentals" },
    { src: "/certs/sql.webp", alt: "SQL" },
  ];

  return (
    <div className="h-[40rem] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black rounded-md space-y-10">
      {/* Title */}
      <AnimatedGradientText
        speed={2}
        colorFrom="#606060"
        colorTo="#FFFFFF"
        className="text-4xl font-semibold tracking-tight"
      >
        Selected Certifications<br></br>
        ________________________
      </AnimatedGradientText>

      {/* Infinite Moving Certificates */}
      <InfiniteMovingCerts items={images} direction="right" speed="slow" />
    </div>
  );
}
