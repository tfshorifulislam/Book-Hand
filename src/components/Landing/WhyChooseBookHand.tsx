"use client";

import { GraduationCap, Repeat, ShieldCheck, Wallet } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Benefit = {
  icon: typeof GraduationCap;
  title: string;
  description: string;
  detail: string;
};

const benefits: Benefit[] = [
  {
    icon: GraduationCap,
    title: "Built for Students",
    description:
      "A marketplace designed around university textbooks and student budgets — not a generic classifieds site.",
    detail: "Tuned for campus life",
  },
  {
    icon: Wallet,
    title: "Affordable Books",
    description:
      "Find used textbooks for less than retail, and sell old copies when your course ends.",
    detail: "Priced for students",
  },
  {
    icon: Repeat,
    title: "Buy & Sell Easily",
    description:
      "List a book in minutes and find exactly what you need for your upcoming courses.",
    detail: "Fast, no paperwork",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Student Community",
    description:
      "Buy and sell alongside verified students in one focused, trustworthy marketplace.",
    detail: "Students only",
  },
];

export function WhyChooseBookHand() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
              The BookHand difference
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-emerald-700 dark:text-emerald-500">
              Why choose
            </span>

            <span className="block text-foreground">BookHand?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Built around the way university students actually buy, sell, and
            discover textbooks.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-10 grid border-t md:grid-cols-2 sm:mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative border-b border-border p-7 sm:p-9 md:p-12",
                  index % 2 === 1 ? "md:border-l" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={[
                      "flex size-10 items-center justify-center rounded-lg border transition-colors",
                      index === 0
                        ? "border-emerald-700/25 bg-emerald-700/5 dark:border-emerald-500/25 dark:bg-emerald-500/5"
                        : "border-border bg-background",
                      "group-hover:border-emerald-700/50 group-hover:bg-emerald-700/5 dark:group-hover:border-emerald-500/50 dark:group-hover:bg-emerald-500/5",
                    ].join(" ")}
                  >
                    <Icon className="size-4 text-emerald-700 dark:text-emerald-500" />
                  </div>

                  <span className="font-mono text-[11px] text-muted-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-2.5 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
                  {benefit.description}
                </p>

                <p className="mt-8 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="h-px w-6 bg-emerald-700/60 dark:bg-emerald-500/60" />
                  {benefit.detail}
                </p>

                <span className="absolute bottom-0 left-7 h-0.5 w-0 bg-emerald-700 transition-all duration-300 group-hover:w-12 dark:bg-emerald-500 md:left-12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}