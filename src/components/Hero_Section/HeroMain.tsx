"use client";

import { motion, useReducedMotion } from "motion/react";

import HeroSectionText from "./HeroText";
import HeroRight from "./Hero_Right";

const HeroMain = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background px-6 py-16 sm:py-20">
      {/* Hero Ambient Glow Effect */}
      <div className="hero-glow-wrapper" aria-hidden="true">
        <div className="hero-glow-primary animate-glow-pulse" />
        <div className="hero-glow-secondary animate-glow-drift" />
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24, }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0, }}
        transition={{ duration: 0.7, ease: "easeOut", }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <HeroSectionText />
        <HeroRight />
      </motion.div>
    </section>
  );
};

export default HeroMain;