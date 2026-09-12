"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need to know about buying and selling books on
            Book Hand.
          </p>
        </div>

        <div className="mt-12">
          <Accordion
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-sm leading-6 text-muted-foreground md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}