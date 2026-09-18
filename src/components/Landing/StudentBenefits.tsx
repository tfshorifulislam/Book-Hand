
"use client";

import {
  Wallet,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "2.5K+", label: "Books Listed" },
  { value: "500+", label: "Students" },
  { value: "15+", label: "Universities" },
];

const benefits = [
  {
    number: "01",
    icon: Wallet,
    title: "Keep every rupee",
    description:
      "Sell your books without commission, hidden fees, or unnecessary charges.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Meet on campus",
    description:
      "Find students nearby and arrange a simple pickup around your campus.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Talk directly",
    description:
      "Chat with buyers and sellers, ask questions, negotiate, and arrange meetups.",
  },
];

export function StudentBenefits() {
  return (
    <section className="relative w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 border-b pb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-700 text-[10px] font-bold text-white">
                +
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why students choose BookHand
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              A simpler way to
              <br />
              <span className="text-muted-foreground/40">
                buy and sell books.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end"
          >
            Everything is designed around students — from finding affordable
            textbooks to selling the books sitting unused on your shelf.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid border-b sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex items-center justify-between py-7 sm:block sm:py-8",
                index !== 0
                  ? "border-t sm:border-l sm:border-t-0 sm:pl-8"
                  : "",
              ].join(" ")}
            >
              <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:mt-2 sm:block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Benefits */}
        <div className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              What you get
            </p>

            <div className="hidden h-px w-32 bg-border sm:block" />
          </div>

          <div className="divide-y border-y">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group grid gap-6 py-8 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center md:gap-10 md:py-10"
                >
                  {/* Number */}
                  <span className="text-xs font-medium text-muted-foreground/50">
                    {benefit.number}
                  </span>

                  {/* Icon */}
                  <div className="flex size-12 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-emerald-700 group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="size-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex size-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-emerald-700 group-hover:bg-emerald-700 group-hover:text-white">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-14 flex items-center justify-between">
          <div className="h-1.5 w-16 rounded-full bg-emerald-700" />

          <p className="text-xs text-muted-foreground">
            Built for students, by simplicity.
          </p>
        </div>
      </div>
    </section>
  );
}