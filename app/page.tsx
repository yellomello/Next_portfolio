'use client';


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

  const CODES = {
  Cursor: `// Copy and paste the code into .cursor/mcp.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "@animate-ui/registry.json"
      }
    }
  }
}`,
  Windsurf: `// Copy and paste the code into .codeium/windsurf/mcp_config.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "@animate-ui/registry.json"
      }
    }
  }
}`,
};

  return (
    <>
    <MagnetLinesHero />
      {/* <MagnetLines /> */}
      <HeroSection />
      <MLogo size={72} withBackground={false} />
      <LogoCloudLarge />

      <main className="w-full h-screen bg-gray-900 relative">
  <div
    className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50"
  >
    <MacOSDock
      apps={sampleApps}
      onAppClick={handleAppClick}
      openApps={openApps}
    />
  </div>
</main>

      <LogoCloud2 />
      <CodeTabs codes={CODES} />
      <LogoCloud />
      <MacbookScroll />
      {/* <LogoCloudFullPage1 /> */}
      <CardSliderFullPage />
      <LogoCloudCards1 />
      {/* <WorldMap /> */}
      <FooterSection />
    </>
  );
}
