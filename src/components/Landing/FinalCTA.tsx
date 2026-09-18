"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-emerald-700 px-6 py-16 text-center sm:px-12 sm:py-20 md:px-20 md:py-24"
        >
          {/* Decorative circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -left-28 -top-28 size-72 rounded-full border border-white/10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-36 -right-28 size-80 rounded-full border border-white/10"
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-7 flex items-center justify-center gap-3"
            >
              <span className="size-2 rounded-full bg-white/70" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Start with BookHand
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl"
            >
              Ready to save on textbooks?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base"
            >
              Buy affordable books from students or sell the textbooks you no
              longer need. Simple, direct, and free to get started.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link href="/sell-book">
                <Button
                  size="lg"
                  className="group h-12 cursor-pointer rounded-md bg-white px-7 text-emerald-700 hover:bg-emerald-50"
                >
                  <BookOpen className="mr-2 size-4" />
                  Get Started Free
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/books">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 cursor-pointer rounded-md border-white/20 bg-white/10 px-7 text-white hover:bg-white/15 hover:text-white"
                >
                  Browse Books
                </Button>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-6 text-xs text-emerald-100/60"
            >
              Join 500+ students already saving on textbooks.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}