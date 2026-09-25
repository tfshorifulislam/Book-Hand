"use client";

import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Search,
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

export function BuyBooksCard() {
  const reducedMotion = useReducedMotion();

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
              <BookOpen className="size-4 text-[#EB7D00]" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
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
      </div>

      <div className="border-t bg-muted/20 p-6 sm:p-8">
        <Link href="/books" className="block">
          <Button
            size="lg"
            className="group h-11 w-full cursor-pointer rounded-lg bg-[#FF9100] text-white hover:bg-[#EB7D00] dark:text-black"
          >
            Browse Books

            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.article>
  );
}