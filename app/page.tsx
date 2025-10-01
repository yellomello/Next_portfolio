'use client';


import React, { useState } from "react";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import FooterSection from "@/components/footer";
import LogoCloud2 from "@/components/ui/logo-cloud2";
import LogoCloudLarge from "@/components/ui/logo-cloud-large";
import { MacOSDock } from "@/components/ui/shadcn-io/mac-os-dock";
import {MacbookScroll} from "@/components/ui/macbook-scroll";
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
      <HeroSection />
      <LogoCloudLarge />

      <main className="w-full h-screen bg-gray-900 flex items-center justify-center">
        <MacOSDock
          apps={sampleApps}
          onAppClick={handleAppClick}
          openApps={openApps}
        />
      </main>

      <LogoCloud2 />
      <LogoCloud />
      <MacbookScroll />
      <FooterSection />
    </>
  );
}
