"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const HeroRight = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group/preview relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:pl-4 xl:pl-8">
      <div
        className="pointer-events-none absolute -right-6 top-8 hidden h-[88%] w-[72%] rounded-2xl border border-border/40 bg-muted/30 lg:block dark:bg-muted/15"
        aria-hidden
      />

      <motion.div
        className="relative"
        whileHover={
          prefersReducedMotion ? undefined : { y: -2 }
        }
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-xl border border-border/80 bg-background shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_50px_-24px_rgba(0,0,0,0.35)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_28px_60px_-28px_rgba(0,0,0,0.65)]">
          <div className="flex items-center gap-2 border-b border-border/60 bg-muted/25 px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden>
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border/80" />
              <span className="size-2 rounded-full bg-border/60" />
            </div>
            <div className="mx-auto flex h-7 min-w-0 max-w-[min(100%,14rem)] flex-1 items-center justify-center rounded-md border border-border/50 bg-background/80 px-3">
              <span className="truncate text-[11px] text-muted-foreground">
                bookhand.app
              </span>
            </div>
            <div className="w-[52px]" aria-hidden />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
            <Image
              src="/book2.1.png"
              alt="BookHand marketplace preview showing book listings for students"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_12%] transition-transform duration-700 ease-out group-hover/preview:scale-[1.015]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroRight;
