import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "../ui/button";

const highlights = [
  {
    icon: ShieldCheck,
    label: "Safe & trusted",
  },
  {
    icon: Users,
    label: "Student community",
  },
  {
    icon: BookOpenCheck,
    label: "University textbooks",
  },
];

const HeroSectionText = () => {
  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      {/* Eyebrow */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-[#FF9100]/20 bg-background/60 px-3.5 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-[#FF9100]" />
        Built for university students
      </div>

      {/* Heading */}
      <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block text-[#FF9100]">
          Find your next book.
        </span>

        <span className="mt-2 block text-foreground">
          Give your old books
          <br className="hidden sm:block" /> a new home.
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
        Buy affordable university textbooks, sell the books you no
        longer need, and connect with students in one simple
        marketplace.
      </p>

      {/* Actions */}
      <div className="mt-9 flex flex-row items-center justify-center gap-2 sm:gap-3">
        <Link href="/books">
          <Button
            size="lg"
            className="group h-10 cursor-pointer rounded-lg bg-[#FF9100] px-4 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#EB7D00] sm:h-12 sm:px-7 sm:text-sm dark:text-black"
          >
            <BookOpen className="mr-1.5 size-3.5 sm:mr-2 sm:size-4" />
            Browse Books
            <ArrowRight className="ml-1.5 size-3.5 transition-transform duration-200 group-hover:translate-x-1 sm:ml-2 sm:size-4" />
          </Button>
        </Link>

        <Link href="/sell-book">
          <Button
            size="lg"
            variant="outline"
            className="h-10 cursor-pointer rounded-lg border-border bg-background/60 px-4 text-xs font-semibold backdrop-blur-sm transition-all duration-200 hover:border-[#FF9100]/40 hover:bg-[#FF9100]/5 hover:text-[#EB7D00] sm:h-12 sm:px-7 sm:text-sm"
          >
            Sell a Book
          </Button>
        </Link>
      </div>

      {/* Highlights */}
      <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-border/70 pt-6">
        {highlights.map(({ icon: Icon, label }, index) => (
          <div
            key={label}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Icon className="size-3.5 text-[#FF9100]" />
            <span>{label}</span>

            {index < highlights.length - 1 && (
              <span className="ml-5 hidden h-1 w-1 rounded-full bg-border sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom micro copy */}
      <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/50">
        Buy · Sell · Connect
      </p>
    </div>
  );
};

export default HeroSectionText;