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
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-370 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2.5 sm:mb-5 sm:gap-3">
            <span className="h-px w-6 bg-[#FF9100]/30 sm:w-8" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF9100] sm:text-xs sm:tracking-[0.2em]">
              Find your textbook
            </span>

            <span className="h-px w-6 bg-[#FF9100]/30 sm:w-8" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Find the right book.
            <span className="block text-[#FF9100]">
              For your course.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7">
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
          className="mx-auto mt-8 max-w-4xl sm:mt-10"
        >
          <div className="rounded-xl border bg-card p-1.5 sm:rounded-2xl sm:p-2">

            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2"
            >
              <div className="relative min-w-0 flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground sm:left-4" />

                <Input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by title, author, or ISBN..."
                  className="h-10 border-0 bg-muted/40 pl-9 pr-2 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-[#FF9100]/20 sm:h-11 sm:pl-11 sm:pr-3 dark:bg-muted/30"
                />
              </div>

              <Button
                type="submit"
                className="cursor-pointer h-9 w-full shrink-0 rounded-lg bg-[#FF9100] px-4 text-sm font-medium text-white transition-colors hover:bg-[#EB7D00] sm:h-11 sm:w-auto sm:rounded-xl sm:px-5 dark:text-black"
              >
                Search
                <ArrowRight className="ml-1.5 size-3.5 sm:ml-2 sm:size-4" />
              </Button>
            </form>

            {/* Popular Searches */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-1 pb-1 text-[11px] sm:mt-4 sm:gap-x-3 sm:gap-y-2 sm:text-xs">
              <span className="text-muted-foreground">
                Try searching
              </span>

              {exampleSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    router.push(
                      `/books?search=${encodeURIComponent(item)}`
                    )
                  }
                  className="cursor-pointer font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-[#FF9100]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground sm:mt-4 sm:text-xs">
            Can&apos;t find your book?{" "}
            <button
              type="button"
              onClick={() => router.push("/sell-book")}
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-[#FF9100]"
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