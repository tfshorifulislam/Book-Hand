"use client";

import { motion, useReducedMotion } from "motion/react";

import HeroSectionText from "./HeroText";
import HeroRight from "./Hero_Right";

const HeroMain = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-background px-6 py-16 sm:py-20 lg:min-h-[calc(100vh-72px)]">
      {/* Background Accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px] dark:bg-primary/5" />

      {/* Top Accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-40 -translate-x-1/2 bg-primary/50" />

      <motion.div
        initial={
          reducedMotion
            ? false
            : {
                opacity: 0,
                y: 24,
              }
        }
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <HeroSectionText />

        <HeroRight />
      </motion.div>
    </section>
  );
};

export default HeroMain;