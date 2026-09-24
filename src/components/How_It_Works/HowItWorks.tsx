"use client";

import {
  BookOpen,
  Check,
  MessageCircle,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Step = {
  number: string;
  icon: typeof Search;
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

function StepFlow({ label, steps }: StepFlowProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mb-8 flex items-center justify-center gap-4 lg:mb-10">
        <span className="h-px w-10 bg-border" />

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
          {label}
        </span>

        <span className="h-px w-10 bg-border" />
      </div>

      <div className="relative">
        {/* Mobile connector */}
        <motion.span
          aria-hidden
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute bottom-0 left-6 top-0 w-px bg-border lg:hidden"
        />

        {/* Desktop connector */}
        <motion.span
          aria-hidden
          initial={reducedMotion ? false : { scaleX: 0 }}
          whileInView={reducedMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[8.7rem] right-[8.7rem] top-6 hidden h-px origin-left bg-border lg:block"
        />

        <ol className="relative lg:grid lg:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.li
                key={step.number}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex items-start gap-4 pb-10 last:pb-0 lg:block lg:pb-0 lg:text-center"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-emerald-700/50 dark:bg-background dark:hover:border-emerald-500/50">
                  <Icon className="size-5 text-emerald-700 dark:text-emerald-500" />
                </div>

                <div className="lg:mt-6">
                  <span className="font-mono text-[11px] text-muted-foreground/60">
                    {step.number}
                  </span>

                  <h4 className="mt-1 text-base font-semibold tracking-tight sm:text-lg">
                    {step.title}
                  </h4>

                  <p className="mt-1.5 max-w-xs text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
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
              Simple by design
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-emerald-700 dark:text-emerald-500">
              How BookHand
            </span>

            <span className="block text-foreground">works.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Everything you need to buy or sell university textbooks, without
            the hassle.
          </p>
        </motion.div>

        {/* Flows */}
        <div className="mx-auto mt-10 w-full max-w-2xl sm:mt-12 lg:max-w-3xl">
          <StepFlow label="For Buyers" steps={buyerSteps} />

          <div className="mt-12 lg:mt-16">
            <StepFlow label="For Sellers" steps={sellerSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}