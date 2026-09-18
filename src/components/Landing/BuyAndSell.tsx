"use client";

import { ArrowUpRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function BuyAndSell() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-700" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                BookHand Marketplace
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Find a book.
              <br />
              <span className="text-muted-foreground/40">
                Give one a new home.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Buy affordable textbooks from students or sell the books you no
            longer need.
          </p>
        </div>

        {/* Main CTA */}
        <div className="grid overflow-hidden rounded-lg border md:grid-cols-2">
          {/* BUY */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="group relative min-h-[350px] overflow-hidden bg-emerald-700 p-7 text-white sm:p-8 md:p-10"
          >
            {/* Decorative circle */}
            <div className="absolute -right-20 -top-20 size-60 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

            {/* Number */}
            <div className="absolute right-7 top-7 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <span className="text-[11px] font-medium">01</span>
            </div>

            {/* Icon */}
            <div className="relative flex size-12 items-center justify-center rounded-xl bg-white text-emerald-700">
              <BookOpen className="size-5" />
            </div>

            <div className="relative mt-12 max-w-md">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                For readers
              </p>

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Buy your next book.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                Discover affordable textbooks listed by students. Find what
                you need without paying full retail prices.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/books"
              className="group/cta absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/20 pt-4 text-sm font-medium sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-10 md:right-10"
            >
              <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                Browse books
              </span>

              <span className="flex size-9 items-center justify-center rounded-full bg-white text-emerald-700 transition-all duration-300 group-hover/cta:rotate-45 group-hover/cta:scale-110">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>

          {/* SELL */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="group relative min-h-[350px] overflow-hidden bg-muted/30 p-7 sm:p-8 md:p-10"
          >
            {/* Decorative circle */}
            <div className="absolute -bottom-24 -right-24 size-64 rounded-full border border-foreground/5 transition-transform duration-700 group-hover:scale-110" />

            {/* Number */}
            <div className="absolute right-7 top-7 flex size-10 items-center justify-center rounded-full border bg-background">
              <span className="text-[11px] font-medium text-muted-foreground">
                02
              </span>
            </div>

            {/* Icon */}
            <div className="relative flex size-12 items-center justify-center rounded-xl border bg-background">
              <Tag className="size-5 text-emerald-700" />
            </div>

            <div className="relative mt-12 max-w-md">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                For sellers
              </p>

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Give your books another life.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                List your unused textbooks, choose your price, and connect
                directly with students who are looking for them.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/sell-book"
              className="group/cta absolute bottom-7 left-7 right-7 flex items-center justify-between border-t pt-4 text-sm font-medium sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-10 md:right-10"
            >
              <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                Sell a book
              </span>

              <span className="flex size-9 items-center justify-center rounded-full border bg-background transition-all duration-300 group-hover/cta:rotate-45 group-hover/cta:scale-110 group-hover/cta:border-emerald-700 group-hover/cta:bg-emerald-700 group-hover/cta:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">
            Simple buying. Direct selling.
          </span>

          <div className="h-1 w-10 rounded-full bg-emerald-700" />
        </div>
      </div>
    </section>
  );
}