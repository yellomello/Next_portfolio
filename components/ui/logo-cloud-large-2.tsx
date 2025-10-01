"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { EvervaultCard } from "@/components/ui/evervault-card"; // import your card

export default function CardSliderFullPage() {
  const cardsData = [
    {
      title: "Make things float in air",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Interactive 3D Card",
      link: "#",
    },
    {
      title: "CSS Perspective Magic",
      link: "#",
    },
  ];

  return (
    <section className="bg-background overflow-hidden w-full h-screen">
      <div className="relative flex justify-center items-center w-full h-full">
        <InfiniteSlider
          speedOnHover={50}
          speed={120}
          gap={200}
          className="w-full h-full"
        >
          {cardsData.map((card, index) => (
            <div key={index} className="flex justify-center w-80">
              <EvervaultCard
                text={card.title}
                className="w-80 h-80"
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Left & Right fade / blur */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background pointer-events-none"></div>

        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-32"
          direction="left"
          blurIntensity={2}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-32"
          direction="right"
          blurIntensity={2}
        />
      </div>
    </section>
  );
}
