"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const HeroRight = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
      <motion.div
        whileHover={reducedMotion ? undefined : { y: -2 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border/80" />
              <span className="size-2 rounded-full bg-border/60" />
            </div>

            <div className="mx-auto flex h-7 max-w-56 flex-1 items-center justify-center rounded-md border border-border/50 bg-background/80 px-3">
              <span className="truncate text-[11px] text-muted-foreground">
                bookhand.app
              </span>
            </div>

            <div className="w-7" />
          </div>

          {/* Preview */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
            <Image
              src="/book.jpg"
              alt="BookHand marketplace preview showing book listings for students"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_12%] transition-transform duration-700 ease-out hover:scale-[1.015]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroRight;