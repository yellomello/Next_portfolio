'use client';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function LogoCloudFullPage2() {
  return (
    <section className="bg-background overflow-hidden w-full h-screen">
      <div className="relative flex justify-center items-center w-full h-full">
        {/* Infinite Slider */}
        <InfiniteSlider speedOnHover={50} speed={120} gap={200} className="w-full h-full">
          {/* Logos */}
          <div className="flex justify-center">
            <img className="h-48 w-auto dark:invert" src="/dockersvg.svg" alt="Docker Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-48 w-auto dark:invert" src="/Apache_Spark_logo.svg.svg" alt="Spark Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-48 w-auto dark:invert" src="/twilio.svg" alt="Twilio Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-60 w-auto" src="/tensorflow.svg" alt="TensorFlow Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-60 w-auto filter grayscale" src="/terra.svg" alt="Terra Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-60 w-auto" src="/ts.svg" alt="TypeScript Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-60 w-auto" src="/r.svg" alt="R Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-48 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" />
          </div>
          <div className="flex justify-center">
            <img className="h-48 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" />
          </div>
        </InfiniteSlider>

        {/* Left & Right fade / blur */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background pointer-events-none"></div>

        <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-32" direction="left" blurIntensity={2} />
        <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-32" direction="right" blurIntensity={2} />
      </div>
    </section>
  );
}
