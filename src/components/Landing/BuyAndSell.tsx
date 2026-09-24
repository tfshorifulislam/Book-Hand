"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookMarked,
  BookOpen,
  Search,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "../ui/button";

const buyRows = [
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
  { label: "Price", value: "৳390" },
  { label: "Listing", value: "Live", live: true },
];

export function BuyAndSell() {
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
              BookHand Marketplace
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-emerald-700 dark:text-emerald-500">
              Find a book.
            </span>

            <span className="block text-foreground">Give one a new home.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Buy affordable textbooks from students or sell the books you no
            longer need.
          </p>
        </motion.div>

        {/* Buy / Sell */}
        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          {/* Buy */}
          <motion.article
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background"
          >
            <div className="border-b border-border p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                    <BookOpen className="size-4 text-emerald-700 dark:text-emerald-500" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                      For readers
                    </p>

                    <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                      Buy Books
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                      Discover affordable textbooks listed by students.
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-muted-foreground/40">
                  01
                </span>
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <div className="rounded-lg border border-border bg-muted/20 p-4 sm:p-5">
                <div className="relative flex h-9 items-center rounded-lg border border-border bg-background pl-9 pr-3">
                  <Search className="absolute left-3 size-4 text-muted-foreground" />

                  <span className="truncate text-sm text-muted-foreground">
                    Search by title, author, or course
                  </span>
                </div>

                <ul className="mt-3 divide-y divide-border overflow-hidden rounded-lg border border-border bg-background">
                  {buyRows.map((row) => (
                    <li
                      key={row.title}
                      className="flex items-center gap-3 p-3"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted/60">
                        <BookMarked className="size-4 text-emerald-700/80 dark:text-emerald-500/80" />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {row.title}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {row.author}
                        </p>
                      </div>

                      <div className="ml-auto shrink-0 text-right">
                        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          {row.condition}
                        </span>

                        <p className="mt-0.5 text-sm font-semibold text-emerald-700 dark:text-emerald-500">
                          {row.price}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border bg-muted/20 p-6 sm:p-8">
              <Link href="/books" className="block">
                <Button
                  size="lg"
                  className="group h-11 w-full cursor-pointer rounded-lg bg-emerald-700 px-6 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                >
                  Browse Books
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.article>

          {/* Sell */}
          <motion.article
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: reducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background"
          >
            <div className="border-b border-border p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                    <Tag className="size-4 text-emerald-700 dark:text-emerald-500" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                      For sellers
                    </p>

                    <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                      Sell Books
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                      List your unused books and connect with students.
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-muted-foreground/40">
                  02
                </span>
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <div className="rounded-lg border border-border bg-muted/20 p-4 sm:p-5">
                <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-background">
                  {sellFields.map((field) => (
                    <div
                      key={field.label}
                      className="flex items-center justify-between gap-4 px-4 py-3"
                    >
                      <span className="text-xs text-muted-foreground">
                        {field.label}
                      </span>

                      {field.live ? (
                        <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-500">
                          <BadgeCheck className="size-3.5" />
                          {field.value}
                        </span>
                      ) : (
                        <span
                          className={[
                            "truncate text-sm font-medium",
                            field.label === "Price"
                              ? "text-emerald-700 dark:text-emerald-500"
                              : "text-foreground",
                          ].join(" ")}
                        >
                          {field.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-muted/20 p-6 sm:p-8">
              <Link href="/sell-book" className="block">
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-11 w-full cursor-pointer rounded-lg px-6 text-sm hover:border-emerald-700/35 hover:bg-emerald-700/5 hover:text-emerald-800 dark:hover:border-emerald-500/35 dark:hover:bg-emerald-500/5 dark:hover:text-emerald-400"
                >
                  Sell a Book
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}