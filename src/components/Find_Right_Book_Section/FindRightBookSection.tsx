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

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    router.push(
      query ? `/books?search=${encodeURIComponent(query)}` : "/books"
    );
  };

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-700/30 dark:bg-emerald-500/30" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
              Find your textbook
            </span>

            <span className="h-px w-8 bg-emerald-700/30 dark:bg-emerald-500/30" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Find the right book.
            <span className="block text-emerald-700 dark:text-emerald-500">
              For your course.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Search university textbooks by title, author, subject, or ISBN.
            Find what you need without spending more than you have to.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="rounded-2xl border bg-card p-2">
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by title, author, or ISBN..."
                  className="h-12 border-0 bg-muted/40 pl-11 shadow-none focus-visible:ring-2 focus-visible:ring-emerald-700/20 dark:bg-muted/30 dark:focus-visible:ring-emerald-500/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-xl bg-emerald-700 px-7 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
              >
                Search
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
              <span className="text-muted-foreground">Try searching</span>

              {exampleSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    router.push(`/books?search=${encodeURIComponent(item)}`)
                  }
                  className="cursor-pointer font-medium text-foreground/70 underline underline-offset-4 hover:text-emerald-700 dark:hover:text-emerald-500"
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
              className="font-medium text-foreground underline underline-offset-4 hover:text-emerald-700 dark:hover:text-emerald-500"
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