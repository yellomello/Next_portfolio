'use client';
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import { useState } from 'react';
import { TextEffect } from '@/components/ui/text-effect'

export function TextScrambleCustomTrigger() {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <a
      href="#"
      className="text-white-500 transition-colors hover:text-stone-500 dark:hover:text-stone-500"
      onMouseEnter={() => setIsTrigger(true)} // hover triggers scramble
    >
      <TextScramble
        className= "font-bold"
        // className="text-smmx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
        as="span"
        speed={0.01}
        trigger={isTrigger}
        onScrambleComplete={() => setIsTrigger(false)} // reset after done
      >
         {/* <TextEffect
                                            
                                            className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                            Marc Hansel Thomas
                                            
        </TextEffect> */}
        Marc Thomas
                                        
      </TextScramble>
    </a>
  );
}
