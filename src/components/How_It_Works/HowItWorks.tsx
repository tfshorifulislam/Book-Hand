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

import StepFlow from "./StepFlow";

const buyerSteps = [
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

const sellerSteps = [
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

export function HowItWorks() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
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

        <div className="mt-14 space-y-14">
          <StepFlow label="For Buyers" steps={buyerSteps} />
          <StepFlow label="For Sellers" steps={sellerSteps} />
        </div>
      </div>
    </section>
  );
}