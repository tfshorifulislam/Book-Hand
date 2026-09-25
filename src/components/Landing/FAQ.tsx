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
    number: "01",
    question: "What is BookHand?",
    answer:
      "BookHand is a marketplace built for university students to buy and sell textbooks they need or no longer use.",
  },
  {
    number: "02",
    question: "How do I find a book?",
    answer:
      "Browse available listings or search by title, author, category, course, or other available details.",
  },
  {
    number: "03",
    question: "How do I sell my book?",
    answer:
      "Create a listing with the book details, price, condition, and photos. Once published, other students can discover your listing.",
  },
  {
    number: "04",
    question: "Can I save books for later?",
    answer:
      "Yes. Save interesting books to your wishlist and come back to them whenever you need.",
  },
  {
    number: "05",
    question: "Are the books new or used?",
    answer:
      "BookHand focuses primarily on student-to-student textbook listings, so the condition depends on each individual listing.",
  },
  {
    number: "06",
    question: "How do I contact a seller?",
    answer:
      "Use the communication options available on a listing to connect with the seller and discuss the purchase.",
  },
];

export function FAQ() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="size-2 rounded-full bg-[#EB7D00]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EB7D00]">
              FAQ
            </span>

            <span className="size-2 rounded-full bg-[#EB7D00]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Got questions?
            <span className="block text-[#FF9100]">
              We have answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Everything you need to know about buying, selling, saving, and
            discovering books on BookHand.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.number}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: reducedMotion ? 0 : index * 0.06,
              }}
            >
              <Accordion>
                <AccordionItem
                  value={faq.number}
                  className="
                    h-full rounded-2xl
                    border border-border
                    bg-card px-5
                    transition-colors
                    hover:border-[#FF9100]/40
                    sm:px-6
                  "
                >
                  <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline">
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className="
                          flex size-9 shrink-0 items-center justify-center
                          rounded-lg
                          border border-[#FF9100]/20
                          bg-[#FF9100]/10
                          font-mono text-[10px] font-semibold
                          text-[#EB7D00]
                        "
                      >
                        {faq.number}
                      </span>

                      <span
                        className="
                          text-sm font-semibold leading-6
                          transition-colors
                          group-data-[state=open]:text-[#EB7D00]
                          sm:text-base
                        "
                      >
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-13 pr-6 text-sm leading-7 text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-3 text-center text-sm"
        >
          <span className="h-px w-8 bg-[#FF9100]/40" />

          <span className="text-muted-foreground">
            Still have questions?
          </span>

          <span className="font-medium text-[#EB7D00]">
            We&apos;re here to help.
          </span>

          <span className="h-px w-8 bg-[#FF9100]/40" />
        </motion.div>
      </div>
    </section>
  );
}