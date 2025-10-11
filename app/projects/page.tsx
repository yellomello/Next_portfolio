'use client';

import React from "react";
import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import ExpandableGlowCards from "@/components/expandableglowcard";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import { HeroHeader } from "@/components/header";

export default function ProjectsPage() {
  return (
    <>
      <HeroHeader />

      {/* Add padding-top to push content below header */}
      <div className="flex flex-col items-center mb-24 relative pt-32 lg:pt-40">
        <div className="z-10 flex items-center gap-4">
          <AnimatedGradientText
            speed={2}
            colorFrom="#606060"
            colorTo="#FFFFFF"
            className="text-4xl mt-12 mb-4 font-semibold tracking-tight relative z-[9999]"
          >
            Projects
            <br />
            _________
          </AnimatedGradientText>
        </div>

        {/* Glow Cards */}
        <div className="z-50 w-screen mt-8 flex flex-row flex-wrap items-center justify-center gap-10 custom-cursor relative">
          <ExpandableGlowCards />
        </div>

        {/* Expandable Card Demo */}
        <div className="w-full mt-12">
          <ExpandableCardDemo />
        </div>
      </div>

      <FooterSection />
    </>
  );
}
