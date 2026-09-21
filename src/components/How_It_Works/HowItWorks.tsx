"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { ForBuyers } from "./ForBuyers";
import { ForSellers } from "./ForSellers";

export function HowItWorks() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 space-y-6"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-500" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
                How It Works
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              <span className="text-emerald-700 dark:text-emerald-500">
                Find a book.
              </span>
              <br />
              <span className="text-foreground">
                Sell one when you&apos;re done.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            A simple way to find affordable textbooks or pass your old books
            on to someone who needs them.
          </p>
        </motion.div>

        {/* Buyer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border"
        >
          {/* Buyer Header */}
          <div className="flex items-center justify-between border-b px-6 py-6 sm:px-8 md:px-10 md:py-7">
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-muted-foreground/40">
                01
              </span>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
                  For Buyers
                </span>

                <h3 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
                  Find your next textbook
                </h3>
              </div>
            </div>
          </div>

          {/* Buyer Content */}
          <div className="p-6 sm:p-9 md:p-12">
            <ForBuyers />
          </div>
        </motion.div>

        {/* Connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="flex h-20 items-center justify-center"
        >
          <div className="relative flex size-10 items-center justify-center rounded-full border bg-background">
            <ArrowDown className="size-4 text-emerald-700 dark:text-emerald-500" />

            <span className="absolute -bottom-5 left-1/2 h-5 w-px -translate-x-1/2 bg-border" />
          </div>
        </motion.div>

        {/* Seller */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="overflow-hidden rounded-xl border"
        >
          {/* Seller Header */}
          <div className="flex items-center justify-between border-b px-6 py-6 sm:px-8 md:px-10 md:py-7">
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-muted-foreground/40">
                02
              </span>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
                  For Sellers
                </span>

                <h3 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
                  Give your old books a new home
                </h3>
              </div>
            </div>
          </div>

          {/* Seller Content */}
          <div className="p-6 sm:p-9 md:p-12">
            <ForSellers />
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[11px] text-muted-foreground">
            Simple steps. Better textbook access.
          </span>

          <div className="h-1.5 w-14 rounded-full bg-emerald-700 dark:bg-emerald-500" />
        </motion.div>
      </div>
    </section>
  );
}