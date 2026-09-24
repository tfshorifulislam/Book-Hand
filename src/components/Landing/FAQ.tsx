"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What is BookHand?",
    answer:
      "BookHand is a marketplace built for university students to buy and sell textbooks they need or no longer use.",
  },
  {
    question: "How do I find a book?",
    answer:
      "You can browse available listings or search by book title, author, category, or other available details.",
  },
  {
    question: "How do I sell my book?",
    answer:
      "Create a listing with the book details, price, condition, and photos. Once published, other students can discover your listing.",
  },
  {
    question: "Can I save books for later?",
    answer:
      "Yes. You can save interesting books to your wishlist and come back to them later.",
  },
  {
    question: "Are the books new or used?",
    answer:
      "BookHand primarily focuses on student-to-student textbook listings, so availability and condition depend on each individual listing.",
  },
  {
    question: "How do I contact a seller?",
    answer:
      "You can use the available communication options on a listing to connect with the seller and discuss the purchase.",
  },
];

export function FAQ() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          {/* Heading */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                FAQ
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              <span className="text-emerald-700 dark:text-emerald-500">
                Frequently asked
              </span>

              <span className="block text-foreground">questions.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              Everything you need to know about buying, selling, and using
              BookHand.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: reducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            <div className="border-t border-border">
              <Accordion
                defaultValue={[faqs[0].question]}
                className="w-full"
              >
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="gap-6 py-6 text-base font-semibold tracking-tight hover:no-underline sm:text-lg md:py-7 group-aria-expanded/accordion-trigger:[&_[data-slot=accordion-trigger-icon]]:text-emerald-700 dark:group-aria-expanded/accordion-trigger:[&_[data-slot=accordion-trigger-icon]]:text-emerald-500">
                      <span className="flex-1 text-left group-aria-expanded/accordion-trigger:text-emerald-700 dark:group-aria-expanded/accordion-trigger:text-emerald-500">
                        {faq.question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground [&>div]:pb-6 [&>div]:pr-10 sm:[&>div]:pr-14">
                      <p className="max-w-2xl text-sm leading-7 sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <p className="mt-8 flex items-center gap-2.5 text-[11px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-700 dark:bg-emerald-500" />

              Still have questions? We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}