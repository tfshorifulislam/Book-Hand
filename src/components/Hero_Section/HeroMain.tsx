"use client";

import { motion, useReducedMotion } from "motion/react";

import HeroSectionText from "./HeroText";

const HeroMain = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative mx-auto flex min-h-[70vh] items-center justify-center overflow-hidden bg-emerald-50 px-6 dark:bg-zinc-950">
      {/* Emerald Glow */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, -20, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 -top-32 size-96 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20"
      />

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 20, 0],
                y: [0, -15, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -left-32 size-96 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-950/30"
      />

      {/* Hero Content */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10"
      >
        <HeroSectionText />
      </motion.div>
    </section>
  );
};

export default HeroMain;