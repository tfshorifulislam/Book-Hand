"use client";

import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";
import { motion, useReducedMotion } from "motion/react";

const HeroMain = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.55_0.12_160/0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.65_0.14_160/0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-14 sm:gap-14 sm:py-16 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-10 lg:py-20 xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] xl:gap-14 xl:py-24">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 lg:py-4"
          >
            <HeroLeft />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.55,
              delay: prefersReducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 w-full min-w-0 lg:order-2"
          >
            <HeroRight />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
