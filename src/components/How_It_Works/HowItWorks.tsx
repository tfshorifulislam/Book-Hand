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
      "Compare available books, prices, conditions, and seller information.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect",
    description:
      "Contact the seller, discuss the details, and arrange the purchase.",
  },
];

const sellerSteps = [
  {
    number: "01",
    icon: Plus,
    title: "List your book",
    description:
      "Add your book details, condition, price, and photos in minutes.",
  },
  {
    number: "02",
    icon: Users,
    title: "Reach students",
    description:
      "Your listing becomes visible to students looking for that textbook.",
  },
  {
    number: "03",
    icon: Check,
    title: "Sell",
    description:
      "Connect with an interested student and complete the transaction.",
  },
];

export function HowItWorks() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-container bg-background">
      <div className="mx-auto px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="section-eyebrow inline-block">
            How it works
          </p>

          <h2 className="section-heading mt-4 text-left">
            Simple from start
            <span className="section-heading-gradient"> to finish.</span>
          </h2>

          <p className="section-description mx-0 max-w-lg mt-5 text-left">
            Whether you're looking for a book or selling one, BookHand keeps
            the process simple.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          <StepFlow label="For Buyers" steps={buyerSteps} />
          <StepFlow label="For Sellers" steps={sellerSteps} />
        </div>
      </div>
    </section>
  );
}