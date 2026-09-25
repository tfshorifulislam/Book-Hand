"use client";

import { motion, useReducedMotion } from "motion/react";
import { BuyBooksCard } from "./BuyBooksCard";
import { SellBooksCard } from "./SellBooksCard";



export function BuyAndSell() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="size-2 rounded-full bg-[#FF9100]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
              BookHand Marketplace
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-[#FF9100]">Find a book.</span>{" "}
            Give one a new home.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Buy affordable textbooks from students or sell the books you no
            longer need.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BuyBooksCard />
          <SellBooksCard />
        </div>
      </div>
    </section>
  );
}