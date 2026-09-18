"use client";

import { ArrowRight, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

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
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl border bg-muted/20"
        >
          {/* Decorative circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -right-28 -top-28 size-80 rounded-full border border-foreground/5"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-36 -left-24 size-72 rounded-full border border-emerald-700/10"
          />

          <div className="relative px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 flex items-center justify-center gap-3"
              >
                <span className="size-2 rounded-full bg-emerald-700" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Find your textbook
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl"
              >
                Find the right book.
                <br />
                <span className="text-muted-foreground/40">
                  Start with a simple search.
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
              >
                Search books by title, author, or ISBN and discover affordable
                textbooks from other students.
              </motion.p>

              {/* Search */}
              <motion.form
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSearch}
                className="mx-auto mt-9 flex max-w-3xl flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title, author, or ISBN..."
                    className="h-14 w-full rounded-lg border bg-background pl-13 pr-5 text-sm sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group h-14 cursor-pointer rounded-lg bg-emerald-700 px-8 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                >
                  Search
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </motion.form>

              {/* Bottom hint */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-5 text-[11px] text-muted-foreground/60"
              >
                Search by book title, author name, or ISBN
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindRightBookSection;