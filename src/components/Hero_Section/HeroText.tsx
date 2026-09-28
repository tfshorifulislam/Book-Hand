import Link from "next/link";
import { ArrowRight, BookOpen, } from "lucide-react";
import { Button } from "../ui/button";


const HeroSectionText = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">

      <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-[#FF9100]/20 bg-background/60 px-3.5 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
        Built for university students
      </div>

      {/* Heading */}
      <div className="">
        {/* Heading */}
        <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-[#FF9100]">
            Find your next book.
          </span>

          <span className="mt-2 block text-foreground">
            Give your old books
            <br className="hidden sm:block" /> a new home.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          Buy affordable university textbooks, sell the books you no
          longer need, and connect with students in one simple
          marketplace.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-9 flex flex-row items-center gap-2 sm:gap-3">
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
    </div>
  );
};

export default HeroSectionText;