"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import HeroSectionText from "./HeroText";

const HeroMain = () => {
    const reducedMotion = useReducedMotion();

    return (
        <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-[#fffaf3] px-6 py-16 dark:bg-[#100d09] sm:py-20">
            {/* Background image */}
            <motion.div
                initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
                animate={
                    reducedMotion
                        ? undefined
                        : {
                              opacity: 1,
                              scale: 1,
                          }
                }
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
            >
                <Image
                    src="/bg.png"
                    alt=""
                    width={1000}
                    height={1000}
                    priority
                    className="w-[680px] max-w-[90vw] object-contain opacity-[0.16] dark:opacity-[0.07]"
                />
            </motion.div>

            {/* Soft center light */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF9100]/[0.08] blur-[100px] dark:bg-[#FF9100]/[0.05]" />

            {/* Top accent */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-40 -translate-x-1/2 bg-[#FF9100]/50" />

            {/* Content */}
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
                    delay: 0.1,
                    ease: "easeOut",
                }}
                className="relative z-10 w-full"
            >
                <HeroSectionText />
            </motion.div>
        </section>
    );
};

export default HeroMain;