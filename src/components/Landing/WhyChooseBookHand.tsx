"use client";

import {
  GraduationCap,
  Repeat,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
  color: keyof typeof colorStyles;
};

const benefits: Benefit[] = [
  {
    icon: GraduationCap,
    title: "Built for Students",
    description:
      "A marketplace designed around university textbooks and student budgets — not a generic classifieds site.",
    detail: "Tuned for campus life",
    color: "emerald",
  },
  {
    icon: Wallet,
    title: "Affordable Books",
    description:
      "Find used textbooks for less than retail, and sell old copies when your course ends.",
    detail: "Priced for students",
    color: "blue",
  },
  {
    icon: Repeat,
    title: "Buy & Sell Easily",
    description:
      "List a book in minutes and find exactly what you need for your upcoming courses.",
    detail: "Fast, no paperwork",
    color: "violet",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Student Community",
    description:
      "Buy and sell alongside verified students in one focused, trustworthy marketplace.",
    detail: "Students only",
    color: "amber",
  },
];

const colorStyles = {
  emerald: {
    box: "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
    icon: "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-400",
    line: "bg-emerald-500",
  },
  blue: {
    box: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40",
    icon: "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/60 dark:text-blue-400",
    line: "bg-blue-500",
  },
  violet: {
    box: "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/40",
    icon: "border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800 dark:bg-violet-900/60 dark:text-violet-400",
    line: "bg-violet-500",
  },
  amber: {
    box: "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
    icon: "border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-900/60 dark:text-amber-400",
    line: "bg-amber-500",
  },
};

export function WhyChooseBookHand() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500"
          >
            The BookHand difference
          </motion.p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything students need.
            <span className="block text-emerald-700 dark:text-emerald-500">
              All in one place.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            A simpler way to discover, buy, sell, and exchange university
            textbooks.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const styles = colorStyles[benefit.color];
            const reversed = index % 2 === 1;

            return (
              <motion.div
                key={benefit.title}
                initial={
                  reducedMotion
                    ? false
                    : {
                      opacity: 0,
                      y: 35,
                    }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                      opacity: 1,
                      y: 0,
                    }
                }
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`grid items-center gap-8 border-t py-12 md:grid-cols-2 md:gap-16 lg:py-16 ${reversed ? "md:[&>div:first-child]:order-2" : ""
                  }`}
              >
                {/* Text */}
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, x: reversed ? 25 : -25 }}
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                        opacity: 1,
                        x: 0,
                      }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08 + 0.1,
                  }}
                  className="max-w-lg"
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {benefit.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className={`h-px w-6 ${styles.line}`} />
                    {benefit.detail}
                  </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                  initial={
                    reducedMotion
                      ? false
                      : {
                        opacity: 0,
                        scale: 0.94,
                        x: reversed ? -25 : 25,
                      }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08 + 0.15,
                    ease: "easeOut",
                  }}
                  className={`flex min-h-56 items-center justify-center rounded-2xl border p-8 sm:min-h-64 ${styles.box}`}
                >
                  <motion.div
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                          scale: 1.06,
                          rotate: 2,
                        }
                    }
                    transition={{ duration: 0.25 }}
                    className={`flex size-24 items-center justify-center rounded-2xl border ${styles.icon}`}
                  >
                    <Icon className="size-10" strokeWidth={1.7} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}