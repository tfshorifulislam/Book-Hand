"use client";

import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  Search,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const categories = [
  { name: "Calculus", query: "Calculus", count: "1,200+", icon: BookOpen },
  { name: "Computer Science", query: "Computer Science", count: "860+", icon: Code2 },
  { name: "Engineering", query: "Engineering", count: "750+", icon: Wrench },
  { name: "Business", query: "Business", count: "640+", icon: Briefcase },
];

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
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-500" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
              Find your textbook
            </span>
          </div>

          <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.625rem]">
            <span className="text-emerald-700 dark:text-emerald-500">
              Find the right book.
            </span>

            <span className="block text-foreground">For your course.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-[0.9375rem] leading-7 text-muted-foreground sm:text-base">
            Search thousands of university textbooks by title, author, category,
            or course and find the books you need at student-friendly prices.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            delay: reducedMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 w-full max-w-3xl sm:mt-12"
        >
          <motion.div
            whileHover={reducedMotion ? undefined : { y: -2 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-xl border border-border bg-background p-2 shadow-lg sm:p-2.5"
          >
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-emerald-700 dark:text-emerald-500" />

                <Input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, author, or ISBN..."
                  className="h-11 w-full rounded-lg border bg-background pl-11 pr-4 text-sm focus-visible:border-emerald-700 focus-visible:ring-emerald-700/20 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-500/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="group h-11 cursor-pointer rounded-lg bg-emerald-700 px-6 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
              >
                Search
                <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </form>

            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 border-t border-border pt-2.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                Popular
              </span>

              {exampleSearches.map((search) => (
                <button
                  key={search}
                  type="button"
                  onClick={() => handleChip(search)}
                  className="cursor-pointer rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-700/40 hover:text-emerald-700 dark:hover:border-emerald-500/40 dark:hover:text-emerald-500"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Categories */}
        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <li key={category.name}>
                <motion.button
                  type="button"
                  onClick={() => handleChip(category.query)}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={
                    reducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: reducedMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group w-full cursor-pointer rounded-xl border border-border bg-background p-5 text-left transition-colors hover:border-emerald-700/40 hover:bg-muted/20 dark:hover:border-emerald-500/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40 transition-colors group-hover:border-emerald-700/40 dark:group-hover:border-emerald-500/40">
                      <Icon className="size-4 text-emerald-700 dark:text-emerald-500" />
                    </div>

                    <span className="font-mono text-[11px] text-muted-foreground/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold tracking-tight text-foreground">
                    {category.name}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {category.count} books
                  </p>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FindRightBookSection;