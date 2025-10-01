"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function LogoCloudCards1() {
  const cardsData = [
    {
      image: "/jordans.webp",
      title: "Air Jordan 4 Retro Reimagined",
      description:
        "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
      price: "$100",
    },
    {
      image: "/tensorflow.svg",
      title: "TensorFlow",
      description: "Build & scale ML with Google’s open-source framework.",
      price: "Free",
    },
    {
      image: "/ts.svg",
      title: "TypeScript",
      description: "A strongly typed programming language for JavaScript.",
      price: "Free",
    },
    {
      image: "/r.svg",
      title: "R Language",
      description: "Statistical computing and graphics made easy.",
      price: "Free",
    },
  ];

  return (
    <section className="bg-background overflow-hidden w-full h-screen">
      <div className="relative flex justify-center items-center w-full h-full">
        {/* Infinite Slider with Cards */}
        <InfiniteSlider
          speedOnHover={50}
          speed={120}
          gap={200}
          className="w-full h-full"
        >
          {cardsData.map((card, index) => (
            <div key={index} className="flex justify-center w-80">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <img
                  src={card.image}
                  alt={card.title}
                  height="200"
                  width="200"
                  className="object-contain mx-auto"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {card.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {card.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {card.price}
                  </span>
                </button>
              </BackgroundGradient>
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
