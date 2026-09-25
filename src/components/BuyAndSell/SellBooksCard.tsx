"use client";

import {
  ArrowRight,
  BadgeCheck,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "../ui/button";

const sellFields = [
  {
    label: "Book title",
    value: "Database System Concepts",
  },
  {
    label: "Condition",
    value: "Good",
  },
  {
    label: "Price",
    value: "৳390",
    highlight: true,
  },
  {
    label: "Listing",
    value: "Live",
    live: true,
  },
];

export function SellBooksCard() {
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
              <Tag className="size-4 text-[#EB7D00]" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
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
      </div>

      <div className="border-t bg-muted/20 p-6 sm:p-8">
        <Link href="/sell-book" className="block">
          <Button
            size="lg"
            variant="outline"
            className="group h-11 w-full cursor-pointer rounded-lg border-border hover:border-[#FF9100]/40 hover:bg-[#FF9100]/5 hover:text-[#EB7D00]"
          >
            Sell a Book

            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.article>
  );
}