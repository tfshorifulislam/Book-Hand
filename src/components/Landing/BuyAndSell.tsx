"use client";

import { ArrowUpRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function BuyAndSell() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 grid gap-8 md:mb-16 md:grid-cols-[1fr_0.6fr] md:items-end md:gap-12"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-700" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                BookHand Marketplace
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Find a book.
              <br />
              <span className="text-muted-foreground/40">
                Give one a new home.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end">
            Buy affordable textbooks from students or sell the books you no
            longer need.
          </p>
        </motion.div>

        {/* Main CTA */}
        <div className="grid overflow-hidden rounded-xl border md:grid-cols-2">
          {/* BUY */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="group relative min-h-[430px] overflow-hidden bg-emerald-700 p-8 text-white sm:p-10 md:min-h-[470px] md:p-12"
          >
            {/* Decorative circle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10"
            />

            {/* Number */}
            <div className="absolute right-8 top-8 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <span className="text-[11px] font-medium">01</span>
            </div>

            {/* Icon */}
            <div className="relative flex size-14 items-center justify-center rounded-xl bg-white text-emerald-700">
              <BookOpen className="size-6" />
            </div>

            <div className="relative mt-20 max-w-lg">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                For readers
              </p>

              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Buy your next book.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                Discover affordable textbooks listed by students. Find what
                you need without paying full retail prices.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/books"
              className="group/cta absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-white/20 pt-5 text-sm font-medium sm:bottom-10 sm:left-10 sm:right-10 md:bottom-12 md:left-12 md:right-12"
            >
              <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                Browse books
              </span>

              <span className="flex size-11 items-center justify-center rounded-full bg-white text-emerald-700 transition-all duration-300 group-hover/cta:rotate-45 group-hover/cta:scale-110">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>

          {/* SELL */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="group relative min-h-[430px] overflow-hidden bg-muted/30 p-8 sm:p-10 md:min-h-[470px] md:p-12"
          >
            {/* Decorative circle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              className="absolute -bottom-28 -right-28 size-72 rounded-full border border-foreground/5"
            />

            {/* Number */}
            <div className="absolute right-8 top-8 flex size-11 items-center justify-center rounded-full border bg-background">
              <span className="text-[11px] font-medium text-muted-foreground">
                02
              </span>
            </div>

            {/* Icon */}
            <div className="relative flex size-14 items-center justify-center rounded-xl border bg-background">
              <Tag className="size-6 text-emerald-700" />
            </div>

            <div className="relative mt-20 max-w-lg">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                For sellers
              </p>

              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Give your books another life.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                List your unused textbooks, choose your price, and connect
                directly with students who are looking for them.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/sell-book"
              className="group/cta absolute bottom-8 left-8 right-8 flex items-center justify-between border-t pt-5 text-sm font-medium sm:bottom-10 sm:left-10 sm:right-10 md:bottom-12 md:left-12 md:right-12"
            >
              <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                Sell a book
              </span>

              <span className="flex size-11 items-center justify-center rounded-full border bg-background transition-all duration-300 group-hover/cta:rotate-45 group-hover/cta:scale-110 group-hover/cta:border-emerald-700 group-hover/cta:bg-emerald-700 group-hover/cta:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[11px] text-muted-foreground">
            Simple buying. Direct selling.
          </span>

          <div className="h-1.5 w-14 rounded-full bg-emerald-700" />
        </motion.div>
      </div>
    </section>
  );
}