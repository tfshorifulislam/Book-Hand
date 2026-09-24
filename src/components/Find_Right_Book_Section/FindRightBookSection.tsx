"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Search,
  Tags,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const highlights = [
  { icon: Search, label: "Title, author & ISBN" },
  { icon: Tags, label: "Category & filters" },
  { icon: GraduationCap, label: "University & course" },
];

const chips = [
  "Calculus",
  "Database Systems",
  "JavaScript",
  "Operating Systems",
];

const results = [
  {
    title: "Calculus: Early Transcendentals",
    author: "James Stewart · 8th edition",
    price: "৳485",
  },
  {
    title: "Operating System Concepts",
    author: "Silberschatz, Galvin & Gagne",
    price: "৳620",
  },
  {
    title: "Database System Concepts",
    author: "Korth, Sudarshan & Silberschatz",
    price: "৳390",
  },
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
    <section className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-14 sm:gap-14 sm:py-16 lg:grid-cols-[28rem_minmax(0,1fr)] lg:gap-14 lg:py-20">
          {/* Copy */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="max-w-xl text-center lg:text-left">
              <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                <span className="font-mono text-xs text-muted-foreground">
                  02
                </span>

                <span className="h-px w-8 bg-border" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                  Search made simple
                </span>
              </div>

              <h2 className="mt-1.5 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.625rem]">
                <span className="text-emerald-700 dark:text-emerald-500">
                  Find the right book.
                </span>

                <span className="block text-foreground">
                  For the right price.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-md text-[0.9375rem] leading-7 text-muted-foreground sm:text-base lg:mx-0">
                Search by book title, author, category, university, or any
                other useful filter — then pick the best-priced listing from a
                fellow student.
              </p>

              <ul className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 lg:justify-start">
                {highlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center justify-center gap-2 text-xs text-muted-foreground lg:justify-start"
                  >
                    <Icon className="size-3.5 text-emerald-700/90 dark:text-emerald-500/90" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Discovery UI */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: reducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
              <motion.div
                whileHover={reducedMotion ? undefined : { y: -2 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-border" />
                      <span className="size-2 rounded-full bg-border/80" />
                      <span className="size-2 rounded-full bg-border/60" />
                    </div>

                    <div className="mx-auto flex h-7 max-w-56 flex-1 items-center justify-center rounded-md border border-border/50 bg-background/80 px-3">
                      <span className="truncate text-[11px] text-muted-foreground">
                        bookhand.app/books?q=calculus
                      </span>
                    </div>

                    <div className="w-7" />
                  </div>

                  {/* Search */}
                  <div className="p-5 sm:p-6">
                    <form
                      onSubmit={handleSearch}
                      className="flex flex-col gap-3 sm:flex-row"
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

                    {/* Filters */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                        Popular
                      </span>

                      {chips.map((chip, index) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => handleChip(chip)}
                          className={[
                            "cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                            index === 0
                              ? "border-emerald-700 bg-emerald-700/5 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/5 dark:text-emerald-500"
                              : "border-border text-muted-foreground hover:border-emerald-700/40 hover:text-emerald-700 dark:hover:border-emerald-500/40 dark:hover:text-emerald-500",
                          ].join(" ")}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mt-5 space-y-2.5">
                      {results.map((result, index) => (
                        <motion.div
                          key={result.title}
                          initial={
                            reducedMotion ? false : { opacity: 0, y: 10 }
                          }
                          whileInView={
                            reducedMotion ? undefined : { opacity: 1, y: 0 }
                          }
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: reducedMotion ? 0 : index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-emerald-700/40 hover:bg-muted/20 dark:hover:border-emerald-500/40"
                        >
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
                            <BookOpen className="size-4 text-emerald-700 dark:text-emerald-500" />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-foreground">
                              {result.title}
                            </p>

                            <p className="truncate text-xs text-muted-foreground">
                              {result.author}
                            </p>
                          </div>

                          <span className="ml-auto shrink-0 text-sm font-semibold text-emerald-700 dark:text-emerald-500">
                            {result.price}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <Link
                      href="/books"
                      className="group mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-500"
                    >
                      Browse all books
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindRightBookSection;