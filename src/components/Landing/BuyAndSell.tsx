"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookMarked,
  BookOpen,
  Search,
  Tag,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "../ui/button";

const buyBooks = [
  {
    title: "Calculus: Early Transcendentals",
    author: "James Stewart · 8th edition",
    condition: "Good",
    price: "৳485",
  },
  {
    title: "Operating System Concepts",
    author: "Silberschatz, Gagne & Galvin",
    condition: "Like New",
    price: "৳620",
  },
];

const sellFields = [
  { label: "Book title", value: "Database System Concepts" },
  { label: "Condition", value: "Good" },
  { label: "Price", value: "৳390", highlight: true },
  { label: "Listing", value: "Live", live: true },
];

export function BuyAndSell() {
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
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="size-2 rounded-full bg-[#FF9100]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
              BookHand Marketplace
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-[#FF9100]">Find a book.</span>{" "}
            Give one a new home.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Buy affordable textbooks from students or sell the books you no
            longer need.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Buy */}
          <MarketplaceCard
            number="01"
            label="For readers"
            title="Buy Books"
            description="Discover affordable textbooks listed by students."
            icon={BookOpen}
            href="/books"
            button="Browse Books"
            reducedMotion={reducedMotion}
          >
            <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
              <div className="relative flex h-10 items-center rounded-lg border bg-background pl-10 pr-3">
                <Search className="absolute left-3.5 size-4 text-muted-foreground" />

                <span className="truncate text-sm text-muted-foreground">
                  Search by title, author, or course
                </span>
              </div>

              <ul className="mt-3 overflow-hidden rounded-lg border bg-background">
                {buyBooks.map((book) => (
                  <li
                    key={book.title}
                    className="flex items-center gap-3 border-b p-3 last:border-0"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#FF9100]/10">
                      <BookMarked className="size-4 text-[#EB7D00]" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {book.title}
                      </p>

                      <p className="truncate text-xs text-muted-foreground">
                        {book.author}
                      </p>
                    </div>

                    <div className="ml-auto shrink-0 text-right">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {book.condition}
                      </span>

                      <p className="text-sm font-semibold text-[#EB7D00]">
                        {book.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </MarketplaceCard>

          {/* Sell */}
          <MarketplaceCard
            number="02"
            label="For sellers"
            title="Sell Books"
            description="List your unused books and connect with students."
            icon={Tag}
            href="/sell-book"
            button="Sell a Book"
            outline
            reducedMotion={reducedMotion}
          >
            <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
              <div className="overflow-hidden rounded-lg border bg-background">
                {sellFields.map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between gap-4 border-b px-4 py-3 last:border-0"
                  >
                    <span className="text-xs text-muted-foreground">
                      {field.label}
                    </span>

                    {field.live ? (
                      <span className="flex items-center gap-1.5 text-sm font-medium text-[#EB7D00]">
                        <BadgeCheck className="size-3.5" />
                        {field.value}
                      </span>
                    ) : (
                      <span
                        className={
                          field.highlight
                            ? "text-sm font-medium text-[#EB7D00]"
                            : "truncate text-sm font-medium"
                        }
                      >
                        {field.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </MarketplaceCard>
        </div>
      </div>
    </section>
  );
}

type MarketplaceCardProps = {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  button: string;
  outline?: boolean;
  reducedMotion: boolean | null;
  children: React.ReactNode;
};

function MarketplaceCard({
  number,
  label,
  title,
  description,
  icon: Icon,
  href,
  button,
  outline,
  reducedMotion,
  children,
}: MarketplaceCardProps) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col overflow-hidden rounded-2xl border bg-background"
    >
      <div className="border-b p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-[#FF9100]/10">
              <Icon className="size-4 text-[#EB7D00]" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
                {label}
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                {title}
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          <span className="font-mono text-[11px] text-muted-foreground/40">
            {number}
          </span>
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-8">{children}</div>

      <div className="border-t bg-muted/20 p-6 sm:p-8">
        <Link href={href} className="block">
          <Button
            size="lg"
            variant={outline ? "outline" : "default"}
            className={
              outline
                ? "group cursor-pointer h-11 w-full rounded-lg border-border hover:border-[#FF9100]/40 hover:bg-[#FF9100]/5 hover:text-[#EB7D00]"
                : "group h-11 w-full rounded-lg bg-[#FF9100] text-white hover:bg-[#EB7D00] dark:text-black cursor-pointer"
            }
          >
            {button}

            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.article>
  );
}