"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const HeroRight = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, x: 24, }}
      animate={reducedMotion ? undefined : { opacity: 1, x: 0, }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut", }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      className="w-full"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src="/banner-image.png"
          alt="BookHand marketplace preview showing book listings for students"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroRight;