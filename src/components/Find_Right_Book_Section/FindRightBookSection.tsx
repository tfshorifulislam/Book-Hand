"use client";

import { ArrowRight, Search } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const exampleSearches = [
  "Calculus",
  "Database Systems",
  "JavaScript",
  "Operating Systems",
];

const FindRightBookSection = () => {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [search, setSearch] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) {
      router.push("/books");
      return;
    }

    router.push(`/books?search=${encodeURIComponent(value)}`);
  };

  const handleChip = (value: string) => {
    router.push(`/books?search=${encodeURIComponent(value)}`);
  };

  return (
    <section className="w-full py-24 sm:py-28">
      <div className="mx-auto w-full max-w-370 px-6 lg:px-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-700/30 dark:bg-emerald-500/30" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
              Find your textbook
            </span>

            <span className="h-px w-8 bg-emerald-700/30 dark:bg-emerald-500/30" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find the right book.
            <span className="mt-1 block text-emerald-700 dark:text-emerald-500">
              For your course.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Search university textbooks by title, author, subject, or ISBN.
            Find what you need without spending more than you have to.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: reducedMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 w-full max-w-4xl sm:mt-12"
        >
          <div className="rounded-2xl border border-border bg-card p-2 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-2.5">
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-2 sm:flex-row"
            >
              {/* Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, author, or ISBN..."
                  className="h-12 rounded-xl border-0 bg-muted/40 pl-11 pr-4 text-sm shadow-none focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-emerald-700/20 dark:bg-muted/30 dark:focus-visible:ring-emerald-500/20"
                />
              </div>

              {/* Search Button */}
              <Button
                type="submit"
                size="lg"
                className="group h-12 rounded-xl bg-emerald-700 px-7 text-sm font-semibold text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
              >
                Search
                <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Popular Searches */}
            <div className="mt-2 flex flex-wrap items-center gap-2 px-1 pb-1 pt-2">
              <span className="mr-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Popular
              </span>

              {exampleSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleChip(item)}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-emerald-700/40 hover:bg-emerald-700/5 hover:text-emerald-700 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/5 dark:hover:text-emerald-500 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

     
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Can&apos;t find your book?{" "}
            <button
              type="button"
              onClick={() => router.push("/sell-book")}
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-emerald-700 dark:hover:text-emerald-500"
            >
              List one instead.
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FindRightBookSection;