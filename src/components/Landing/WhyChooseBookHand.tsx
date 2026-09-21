"use client";

import { Banknote, Clock, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Clear and accurate book details help you know what you are buying.",
  },
  {
    icon: Banknote,
    title: "Save More",
    description:
      "Find affordable textbooks directly from students instead of paying retail prices.",
  },
  {
    icon: Clock,
    title: "Quick & Simple",
    description:
      "Find a book or create a listing in just a few simple steps.",
  },
  {
    icon: Users,
    title: "Student Community",
    description:
      "Connect with students looking for the same books and courses.",
  },
];

export function WhyChooseBookHand() {
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
                Why BookHand
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              <span className="text-emerald-700 dark:text-emerald-500">
                Made for students.
              </span>
              <br />
              <span className="text-foreground">
                Built around simplicity.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            Everything you need to buy and sell textbooks without the usual
            hassle.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={[
                  "group relative min-h-80 p-7 sm:p-8 md:min-h-90",
                  "border-b last:border-b-0 sm:odd:border-r",
                  "lg:border-b-0 lg:border-r lg:last:border-r-0",
                ].join(" ")}
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="flex size-12 items-center justify-center rounded-xl border bg-background transition-colors duration-300 group-hover:border-emerald-700 dark:group-hover:border-emerald-500"
                  >
                    <Icon className="size-5 text-emerald-700 dark:text-emerald-500" />
                  </motion.div>

                  <span className="font-mono text-[11px] text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-20">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl text-emerald-700 dark:text-emerald-500">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground sm:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-7 h-0.5 w-0 bg-emerald-700 transition-all duration-300 group-hover:w-12 dark:bg-emerald-500 md:left-8" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[11px] text-muted-foreground">
            Simple tools. Better textbook access.
          </span>

          <div className="h-1.5 w-14 rounded-full bg-emerald-700 dark:bg-emerald-500" />
        </motion.div>
      </div>
    </section>
  );
}