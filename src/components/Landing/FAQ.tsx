"use client";

import { motion } from "motion/react";

const faqs = [
  {
    question: "What is Book Hand?",
    answer:
      "Book Hand is a platform where you can buy affordable used books, sell books you no longer need, and give books a second life.",
  },
  {
    question: "How can I sell my books?",
    answer:
      "Simply create an account, add your book details, upload photos, set your price, and publish your listing.",
  },
  {
    question: "Can I buy used books on Book Hand?",
    answer:
      "Yes. You can explore available books, check their details and condition, and contact the seller to purchase the book.",
  },
  {
    question: "Is creating an account free?",
    answer:
      "Yes. Creating an account on Book Hand is completely free.",
  },
  {
    question: "How do I find a specific book?",
    answer:
      "You can use the search feature to find books by title, author, category, or other relevant information.",
  },
  {
    question: "Can I edit or remove my book listing?",
    answer:
      "Yes. You can manage your listings from your account and update or remove a listing whenever you want.",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 grid gap-8 md:mb-16 md:grid-cols-[1fr_0.6fr] md:items-end md:gap-12"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-700" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                FAQ
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Questions,
              <br />
              <span className="text-muted-foreground/40">
                answered simply.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end">
            Find quick answers to common questions about buying, selling, and
            using Book Hand.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="divide-y border-y"
        >
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              className="group"
            >
              {/* Question */}
              <summary className="flex cursor-pointer list-none items-center gap-6 py-7 md:py-8 [&::-webkit-details-marker]:hidden">
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-left text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
                  {faq.question}
                </span>

                {/* Plus / Minus */}
                <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-all duration-300 group-hover:border-emerald-700 group-open:border-emerald-700 group-open:bg-emerald-700 group-open:text-white">
                  <span className="absolute h-px w-3.5 bg-current" />

                  <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:rotate-90" />
                </span>
              </summary>

              {/* Animated Answer */}
              <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-open:grid-rows-[1fr] group-open:opacity-100">
                <div className="min-h-0 overflow-hidden">
                  <div className="grid grid-cols-[32px_1fr_40px] gap-6 pb-8 md:pb-9">
                    <span />

                    <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>

                    <span />
                  </div>
                </div>
              </div>
            </motion.details>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[11px] text-muted-foreground">
            Still have questions?
          </span>

          <div className="h-1.5 w-14 rounded-full bg-emerald-700" />
        </motion.div>
      </div>
    </section>
  );
}