"use client";

import { ArrowRight, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FindRightBookSection = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) {
      router.push("/books");
      return;
    }

    router.push(`/books?search=${encodeURIComponent(value)}`);
  };

  return (
    <section className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg border bg-muted/20">
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 size-72 rounded-full border border-foreground/5" />
          <div className="absolute -bottom-32 -left-20 size-64 rounded-full border border-emerald-700/10" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              {/* Label */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-700" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Find your textbook
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Find the right book.
                <br />
                <span className="text-muted-foreground/40">
                  Start with a simple search.
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                Search books by title, author, or ISBN and discover affordable
                textbooks from other students.
              </p>

              {/* Search */}
              <form
                onSubmit={handleSearch}
                className="mx-auto mt-7 flex max-w-2xl flex-col gap-2.5 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title, author, or ISBN..."
                    className="h-11 w-full rounded-md border bg-background pl-11 pr-4 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="group h-11 cursor-pointer rounded-md bg-emerald-700 px-6 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                >
                  Search
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Bottom hint */}
              <p className="mt-4 text-[11px] text-muted-foreground/60">
                Search by book title, author name, or ISBN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindRightBookSection;