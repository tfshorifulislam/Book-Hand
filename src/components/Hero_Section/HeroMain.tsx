"use client";

import { motion, useReducedMotion } from "motion/react";

import HeroSectionText from "./HeroText";

const HeroMain = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative mx-auto flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#fffaf3] px-6 dark:bg-[#100d09] py-10 md:py-0">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,145,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,145,0,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Main orange glow */}
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
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 -top-40 size-150 rounded-full bg-[#FF9100]/10 blur-3xl dark:bg-[#FF9100]/10"
      />

      {/* Secondary orange glow */}
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
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-48 -left-40 size-125 rounded-full bg-[#EB7D00]/8 blur-3xl dark:bg-[#EB7D00]/8"
      />

      {/* Center warm light */}
      <div className="absolute left-1/2 top-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB84D]/10 blur-3xl dark:bg-[#FF9100]/5" />

      {/* Content */}
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