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
    <section className="relative w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 border-b pb-16 md:gap-12 md:pb-20 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-bold text-white">
                +
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why students choose BookHand
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              A simpler way to
              <br />
              <span className="text-muted-foreground/40">
                buy and sell books.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">
            Everything is designed around students — from finding affordable
            textbooks to selling the books sitting unused on your shelf.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid border-b sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className={[
                "py-9 sm:py-10",
                index !== 0
                  ? "border-t sm:border-l sm:border-t-0 sm:pl-10"
                  : "",
              ].join(" ")}
            >
              <span className="block text-4xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </span>

              <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <div className="mt-24 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex items-center justify-between"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What you get
            </p>

            <div className="hidden h-px w-40 bg-border sm:block" />
          </motion.div>

          <div className="divide-y border-y">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group grid gap-7 py-10 md:grid-cols-[70px_64px_1fr_auto] md:items-center md:gap-8 md:py-14 lg:grid-cols-[90px_72px_1fr_48px] lg:gap-10"
                >
                  {/* Number */}
                  <span className="font-mono text-xs text-muted-foreground/40">
                    {benefit.number}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="flex size-14 items-center justify-center rounded-full border transition-colors duration-300 group-hover:border-emerald-700 group-hover:bg-emerald-700 group-hover:text-white"
                  >
                    <Icon className="size-5" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden size-11 items-center justify-center rounded-full border transition-colors duration-300 group-hover:border-emerald-700 group-hover:bg-emerald-700 group-hover:text-white md:flex">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex items-center justify-between md:mt-20"
        >
          <div className="h-1.5 w-16 rounded-full bg-emerald-700" />

          <p className="text-[11px] text-muted-foreground">
            Built for students, by simplicity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}