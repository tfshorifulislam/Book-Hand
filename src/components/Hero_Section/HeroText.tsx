import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "../ui/button";

const HeroSectionText = () => {
  return (
    <div className="w-full">

      {/* Badge */}
      <div className="mb-7 inline-flex rounded-sm border px-3.5 py-2 text-xs font-medium text-muted-foreground">
        Built for university students
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block text-primary">
          Find a book.
        </span>

        <span className="block mt-2 text-foreground">
          Give one a home.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
        Buy affordable university textbooks, sell the books you no longer
        need, and connect with students in one simple marketplace.
      </p>

      {/* Actions */}
      <div className="mt-9 flex items-center gap-2 sm:gap-3">
        <Link href="/books">
          <Button
            size="lg"
            className="rounded-sm bg-primary px-4 text-xs font-semibold text-primary-foreground hover:bg-primary/90 sm:px-7 sm:text-sm cursor-pointer"
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
            className="rounded-sm px-4 text-xs font-semibold sm:px-7 sm:text-sm cursor-pointer"
          >
            Sell a Book
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionText;