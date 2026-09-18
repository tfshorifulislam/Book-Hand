import { ArrowRight, BookOpen, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroLeft = () => {
  return (
    <div className="w-full max-w-2xl text-center md:text-left">
      {/* Label */}
      <div className="mb-5 inline-flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-emerald-700 dark:bg-emerald-500" />

        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Built for university students
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
        Find your{" "}
        <span className="text-emerald-700 dark:text-emerald-500">
          next book.
        </span>

        <span className="mt-2 block text-muted-foreground/45">
          Give your old books a new home.
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base md:mx-0">
        A simple marketplace for university students to buy affordable
        textbooks, sell books they no longer need, and connect with other
        students.
      </p>

      {/* Actions */}
      <div className="mt-7 flex flex-nowrap items-center justify-center gap-3 md:justify-start">
        <Link href="/books" className="shrink-0">
          <Button
            size="lg"
            className="group h-11 cursor-pointer rounded-md bg-emerald-700 px-4 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400 sm:px-6"
          >
            <BookOpen className="mr-2 size-4" />
            Browse Books
            <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>

        <Link href="/sell-book" className="shrink-0">
          <Button
            size="lg"
            variant="outline"
            className="h-11 cursor-pointer rounded-md px-4 text-sm sm:px-6"
          >
            Sell a Book
          </Button>
        </Link>
      </div>

      {/* Highlights */}
      <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t pt-5 md:justify-start">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-emerald-700 dark:text-emerald-500" />
          Safe & trusted
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="size-4 text-emerald-700 dark:text-emerald-500" />
          Student community
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="size-4 text-emerald-700 dark:text-emerald-500" />
          University textbooks
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;