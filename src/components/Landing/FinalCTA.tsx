"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "../ui/button";

export function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-xl border border-border bg-background px-6 py-16 text-center sm:px-12 sm:py-20 md:py-24"
        >
          {/* Emerald accent line */}
          <span className="absolute inset-x-0 top-0 mx-auto h-px w-24 bg-emerald-700 dark:bg-emerald-500" />

          <div className="mx-auto max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                  Start with BookHand
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
            >
              <span className="text-emerald-700 dark:text-emerald-500">
                Ready to find
              </span>

              <span className="block text-foreground">your next book?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base"
            >
              Buy the textbooks you need, sell the ones you no longer use, and
              make your university life a little easier.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <Link href="/books" className="block">
                <Button
                  size="lg"
                  className="group h-11 w-full cursor-pointer rounded-lg bg-emerald-700 px-6 text-sm text-white hover:bg-emerald-600 sm:w-auto dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                >
                  <BookOpen className="mr-2 size-4" />
                  Browse Books
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/sell-book" className="block">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 w-full cursor-pointer rounded-lg px-6 text-sm hover:border-emerald-700/35 hover:bg-emerald-700/5 hover:text-emerald-800 sm:w-auto dark:hover:border-emerald-500/35 dark:hover:bg-emerald-500/5 dark:hover:text-emerald-400"
                >
                  Sell a Book
                </Button>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={reducedMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: reducedMotion ? 0 : 0.34,
              }}
              className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60"
            >
              Buy
              <span className="mx-2 text-emerald-700/60 dark:text-emerald-500/60">•</span>
              Sell
              <span className="mx-2 text-emerald-700/60 dark:text-emerald-500/60">•</span>
              Discover
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}