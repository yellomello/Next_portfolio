'use client';

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ParticleTextEffect } from "@/components/interactive-text-particle";
import React, { useState } from "react";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import FooterSection from "@/components/footer";
import LogoCloud2 from "@/components/ui/logo-cloud2";
import LogoCloudLarge from "@/components/ui/logo-cloud-large";
import { MacOSDock } from "@/components/ui/shadcn-io/mac-os-dock";
import {MacbookScroll} from "@/components/ui/macbook-scroll";
// import { WorldMap } from "@/components/ui/world-map";
import CardSliderFullPage  from "@/components/ui/logo-cloud-large-2";
// import LogoCloudFullPage1 from "@/components/ui/logo-cloud-cards";
import LogoCloudCards1 from "@/components/ui/logo-cloud-cards";
import MLogo from "@/components/m-logo";
import { MagnetLines } from "@/components/ui/magnet-lines";
import { MagnetLinesHero } from "@/components/ui/magneticlineshero";
import { CodeTabs } from "@/components/animate-ui/components/animate/code-tabs";
import Comparison_Example from "@/components/ui/comparison";
import {InfiniteQuotes} from "@/components/ui/infinitequotes";
import { InfiniteCerts } from "@/components/ui/infintecerts";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
// import Simple from "@/components/motion-primitives/rivecomp"
import { GlowCard } from "@/components/spotlight-card";
// import {GlowButton } from "@/components/spotlight-button";
// import { InteractiveShimmerButton2 } from "@/components/ui/interactive-shimmer2";
// import { InteractiveShimmerButton2 } from "@/components/ui/interactive-shimmer";
import SchemaVisualizer from "@/components/schema-viz";
import { ImageSwiper  } from "@/components/image-swiper";
import LogoCloud3 from "@/components/ui/logo-cloud3";
import LogoCloud4 from "@/components/ui/logo-cloud-4";
import ExpandableGlowCards from "@/components/expandableglowcard";
import ExpandableGlowCards2 from "@/components/expandableglowcards2";
// import ExpandableGlowCards from "@/components/expandableglowcard";
import ExpandableGlowCards3D from "@/components/expandableglowcards3d";

const imageUrls = "https://img.freepik.com/premium-photo/3d-cartoon_975306-1.jpg?w=2000,https://img.freepik.com/premium-photo/3d-cartoon-boy-avatar_113255-5540.jpg,https://th.bing.com/th/id/OIP.OmBLyKbo8iixJ2SeS12xxwHaE7?w=626&h=417&rs=1&pid=ImgDetMain,https://thumbs.dreamstime.com/b/animated-academic-cheerful-cartoon-scholar-301088562.jpg,https://img.freepik.com/premium-psd/3d-cute-young-business-man-character-generative-ai_43614-1027.jpg,https://img.freepik.com/premium-photo/arafed-cartoon-man-suit-tie-standing-with-his-hands-his-hips_988987-15581.jpg";

export default function Home() {
  // Define your dock apps
  const sampleApps = [
    { id: "finder", name: "Finder", icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024" },
    { id: "calculator", name: "Calculator", icon: "https://cdn.jim-nielsen.com/macos/1024/calculator-2021-04-29.png?rf=1024" },
    { id: "terminal", name: "Terminal", icon: "https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024" },
    { id: "mail", name: "Mail", icon: "https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024" },
    { id: "notes", name: "Notes", icon: "https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024" },
    { id: "safari", name: "Safari", icon: "https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024" },
    { id: "photos", name: "Photos", icon: "https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024" },
    { id: "music", name: "Music", icon: "https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024" },
    { id: "calendar", name: "Calendar", icon: "https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024" },
  ];

  // State to track open apps
  const [openApps, setOpenApps] = useState<string[]>(["finder", "safari"]);

  // Click handler
  const handleAppClick = (appId: string) => {
    setOpenApps(prev =>
      prev.includes(appId)
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };



  return (
    <>
    <MagnetLinesHero />
      {/* <MagnetLines /> */}
      <HeroSection />
        
      {/* <MLogo size={72} withBackground={false} /> */}
      
      {/* <ParticleTextEffect
        text="PROJECTS"
        // className="absolute top-0 left-0"
        // colors={['ff6b6b', 'feca57', '48dbfb', '1dd1a1']}
          colors = {['f8f9fa', 'ff9ff3', '9b5de5', '4a69bd', '341f97', '706fd3', 'c56cf0', '54a0ff', 'ffffff']}
// colors = ['f8f9fa', 'ff9ff3', '9b5de5', '4a69bd', '341f97', '706fd3', 'c56cf0', '54a0ff', 'ffffff'];

      /> */}
 
{/* Selected Projects Section *#######################################################################################################################/}

{/* Heading */}
<div className="flex flex-col items-center mb-24 relative">
  <div className="z-10 flex items-center gap-4">
    <AnimatedGradientText
      speed={2}
      colorFrom="#606060"
      colorTo="#FFFFFF"
      className="text-4xl mt-12 mb-4 font-semibold tracking-tight relative z-[9999]"
    >
      {/* Selected  */}
      Projects
      <br />
      _________
    </AnimatedGradientText>
  </div>

  {/* Glow Cards */}
  <div className="z-50 w-screen mt-8 flex flex-row flex-wrap items-center justify-center gap-10 custom-cursor relative ">
    {/* <GlowCard />
    <GlowCard />
    <GlowCard />
    <GlowCard /> */}
    <ExpandableGlowCards />
    {/* <ExpandableGlowCards2 /> */}
    {/* <ExpandableGlowCards3D/> */}
  </div>

  {/* "See all" link */}
  <a
    // href="/projects"
    className="mt-10 text-sm text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4"
  >
    Agentic AI and Data Processing Projects Coming Soon
  </a>
</div>
{/* Selected Projects Section End *#######################################################################################################################/}


      {/* <main className="w-full h-screen bg-gray-900 relative"> */}
  {/* <div
    className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50"
    >
    <MacOSDock
    apps={sampleApps}
    onAppClick={handleAppClick}
    openApps={openApps}
    />
    </div> */}
{/* </main> */}

      {/* <Comparison_Example /> */}
      {/* <LogoCloud2 /> */}

     {/* <div className="flex items-center justify-center min-h-screen">
      <ImageSwiper images={imageUrls} />
      </div> */}
{/* <div className="flex mt-40 justify-center z-40">
  <AnimatedGradientText
    speed={2}
    colorFrom="#606060"
    colorTo="#FFFFFF"
    className="text-4xl font-semibold tracking-tight"
  >
    Selected Certifications
  </AnimatedGradientText>
</div> */}

      <InfiniteCerts />

      <InfiniteQuotes />
      <LogoCloud4 />
      {/* <LogoCloud />
      <LogoCloud3 />
      
      
       */}
      {/* <MacbookScroll /> */}
      {/* <LogoCloudFullPage1 /> */}
      {/* <CardSliderFullPage /> */}
      {/* <LogoCloudCards1 /> */}
      {/* <WorldMap /> */}
      <FooterSection />

      
    </>
  );
}


