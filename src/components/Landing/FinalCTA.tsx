"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "../ui/button";

export function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border bg-background px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <span className="absolute inset-x-0 top-0 mx-auto h-0.5 w-20 bg-[#FF9100] dark:bg-[#FF9100]" />

          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-3"
            >
              <span className="size-2 rounded-full bg-[#FF9100] dark:bg-[#FF9100]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF9100] dark:text-[#FF9100]">
                Start with BookHand
              </span>
            </motion.div>

            <motion.h2
              initial={reducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              <span className="text-[#FF9100] dark:text-[#FF9100]">
                Ready to find
              </span>{" "}
              your next book?
            </motion.h2>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base"
            >
              Buy the textbooks you need, sell the ones you no longer use,
              and make university life a little easier.
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Link href="/books">
                <Button
                  size="lg"
                  className="group h-11 w-full rounded-lg bg-[#FF9100] px-6 text-sm text-white hover:bg-[#EB7D00] sm:w-auto dark:bg-[#FF9100] dark:text-black dark:hover:bg-[#EB7D00]"
                >
                  <BookOpen className="mr-2 size-4" />
                  Browse Books
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/sell-book">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 w-full rounded-lg px-6 text-sm hover:border-[#FF9100]/40 hover:bg-[#FF9100]/5 hover:text-emerald-800 sm:w-auto dark:hover:border-[#FF9100]/40 dark:hover:bg-[#FF9100]/5 dark:hover:text-[#EB7D00]"
                >
                  Sell a Book
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={reducedMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-8 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60"
            >
              <span>Buy</span>
              <span className="text-[#FF9100]/60 dark:text-[#FF9100]/60">
                •
              </span>
              <span>Sell</span>
              <span className="text-[#FF9100]/60 dark:text-[#FF9100]/60">
                •
              </span>
              <span>Discover</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}