import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { TextLoop } from './motion-primitives/text-loop'
import { TextScramble } from './motion-primitives/text-scramble' 
// import { useState } from 'react';
import { TextScrambleCustomTrigger } from './motion-primitives/text-scramble-custom-trigger'
import { Spotlight } from '@/components/motion-primitives/spotlight';

import { CodeTabs } from "@/components/animate-ui/components/animate/code-tabs";

const CODES = {
  SQL: `-- Copy and paste into your SQL editor
SELECT candidate_name
FROM candidate_pool
WHERE candidate_name = "Marc Thomas"
  AND skills = 'MAX'
  AND coolness = 'INFINITE'
HAVING hire_decision = 'YES';`,

  Pandas: `# Copy and paste into a Python script
import pandas as pd

data = pd.DataFrame({
    "candidate_name": ["Marc Thomas"],
    "skills": ["MAX"],
    "coolness": ["INFINITE"],
    "hire_decision": ["YES"]
})

result = data.query("skills == 'MAX' and coolness == 'INFINITE' and hire_decision == 'YES'")
result`,

  PySpark: `# Copy and paste into a PySpark shell
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("HireMarc").getOrCreate()

data = [("Marc Thomas", "MAX", "INFINITE", "YES")]
columns = ["candidate_name", "skills", "coolness", "hire_decision"]

df = spark.createDataFrame(data, columns)
df.filter(
    (df.skills == "MAX") & (df.coolness == "INFINITE") & (df.hire_decision == "YES")
).show()`,

  Scala: `// Copy and paste into your Scala REPL
object HireMarc extends App {
  case class Candidate(candidate_name: String, skills: String, coolness: String, hire_decision: String)

  val marc = Candidate("Marc Thomas", "MAX", "INFINITE", "YES")

  if (marc.skills == "MAX" && marc.coolness == "INFINITE" && marc.hire_decision == "YES") {
    println(s"Hire \${marc.candidate_name} immediately!")
  }
}
`,
 "C++": `// Copy and paste into your C++ program
#include <iostream>
#include <string>
using namespace std;

int main() {
    string candidate_name = "Marc Thomas";
    string skills = "MAX";
    string coolness = "INFINITE";
    string salary_expectation = "******";
    string hire_decision = "YES";

    if (candidate_name == "Marc Thomas" &&
        skills == "MAX" &&
        coolness == "INFINITE") {
        cout << "Hire decision: " << hire_decision << endl;
    }
    return 0;
}`,

  Output: `-- Output Tab
-- candidate_name
-- ---------------
-- Marc Thomas
-- Company revenue goes UP 📈`,
};



const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">AI Projects Coming Soon</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                {/* <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Marc Hansel Thomas
                                    
                                </TextEffect>
                                 */}

                                {/* <div className="mt-4">
                                <TextScrambleCustomTrigger />
                                </div> */}

                                
                                <TextEffect per="line" // or "word" if line isn't supported by your TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="group mx-auto mt-8 max-w-2xl text-balance text-lg"
                                    >
                                    
                                        Data Engineer | AI Engineer | Software Developer | Game Developer
                                    
                                    </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                                                                    <Spotlight className='from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400'size={124}/>

                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Building</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 
                bg-background relative mx-auto 
                max-w-[90rem] w-full h-[700px]  /* make it wide + taller */
                overflow-hidden rounded-3xl border p-6 
                shadow-2xl shadow-zinc-950/20 ring-1">
                                    {/* <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/mail2.webp"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/mail2-light.webp"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    /> */}
                                    <div >
          <CodeTabs codes={CODES} />
        </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                
            </main>
        </>
    )
}
