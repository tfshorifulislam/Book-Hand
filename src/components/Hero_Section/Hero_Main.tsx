"use client";

import { motion, useReducedMotion } from "motion/react";

import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";

const HeroMain = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="border-b border-border/50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[28rem_minmax(0,1fr)] lg:gap-14 lg:py-28">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-2 lg:order-1"
          >
            <HeroLeft />

          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: reducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 min-w-0 lg:order-2"
          >
            <HeroRight />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;