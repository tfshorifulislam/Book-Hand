
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
    <section className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-700" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                FAQ
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Questions,
              <br />
              <span className="text-muted-foreground/40">
                answered simply.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Find quick answers to common questions.
          </p>
        </div>

        {/* FAQ */}
        <div className="divide-y border-y">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center gap-5 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
                {/* Number */}
                <span className="w-6 shrink-0 font-mono text-[10px] text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="flex-1 text-left text-base font-medium tracking-tight md:text-lg">
                  {faq.question}
                </span>

                {/* Icon */}
                <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-colors duration-200 group-hover:border-emerald-700 group-hover:text-emerald-700">
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>

              <div className="grid grid-cols-[24px_1fr_32px] gap-5 pb-6 md:pb-7">
                <span />

                <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  {faq.answer}
                </p>

                <span />
              </div>
            </details>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">
            Still have questions?
          </span>

          <div className="h-1 w-10 rounded-full bg-emerald-700" />
        </div>
      </div>
    </section>
  );
}