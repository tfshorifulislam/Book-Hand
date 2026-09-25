"use client";

import {
  BookOpen,
  Check,
  MessageCircle,
  Plus,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type StepFlowProps = {
  label: string;
  steps: Step[];
};

const buyerSteps: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Search",
    description:
      "Find the textbook you need by title, author, category, or course.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Discover",
    description:
      "Compare available books, prices, and seller information.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect",
    description: "Contact the seller and arrange the purchase.",
  },
];

const sellerSteps: Step[] = [
  {
    number: "01",
    icon: Plus,
    title: "List your book",
    description: "Add your book's details, price, and photos in minutes.",
  },
  {
    number: "02",
    icon: Users,
    title: "Reach students",
    description:
      "Your listing becomes visible to students looking for that book.",
  },
  {
    number: "03",
    icon: Check,
    title: "Sell",
    description:
      "Connect with an interested student and complete the sale.",
  },
];

const colors = [
  {
    box: "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
    icon: "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400",
  },
  {
    box: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40",
    icon: "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-400",
  },
  {
    box: "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/40",
    icon: "border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800 dark:bg-violet-900/50 dark:text-violet-400",
  },
];

function StepFlow({ label, steps }: StepFlowProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 15 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-center gap-3"
      >
        <span className="h-px w-8 bg-border" />

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
          {label}
        </span>

        <span className="h-px w-8 bg-border" />
      </motion.div>

      <ol className="grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const color = colors[index];

          return (
            <motion.li
              key={step.number}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
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
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`rounded-2xl border p-6 ${color.box}`}
            >
              <motion.div
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        scale: 1.05,
                        rotate: 2,
                      }
                }
                transition={{ duration: 0.2 }}
                className={`flex size-12 items-center justify-center rounded-xl border ${color.icon}`}
              >
                <Icon className="size-5" />
              </motion.div>

              <span className="mt-6 block text-xs font-medium text-muted-foreground">
                {step.number}
              </span>

              <h4 className="mt-1 text-lg font-semibold tracking-tight">
                {step.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

export function HowItWorks() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
            Simple by design
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How BookHand{" "}
            <span className="text-emerald-700 dark:text-emerald-500">
              works.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            Everything you need to buy or sell university textbooks, without
            the hassle.
          </p>
        </motion.div>

        {/* Flows */}
        <div className="mx-auto mt-14 max-w-370 space-y-14">
          <StepFlow label="For Buyers" steps={buyerSteps} />
          <StepFlow label="For Sellers" steps={sellerSteps} />
        </div>
      </div>
    </section>
  );
}