import Link from "next/link";
import { ArrowRight, BookOpen, BookOpenCheck, ShieldCheck, Users } from "lucide-react";

import { Button } from "../ui/button";

const highlights = [
  { icon: ShieldCheck, label: "Safe & trusted" },
  { icon: Users, label: "Student community" },
  { icon: BookOpenCheck, label: "University textbooks" },
];

const HeroLeft = () => {
  return (
    <div className="max-w-xl text-center lg:text-left">

      <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">

        <span className="font-mono text-xs text-muted-foreground">01</span>

        <span className="h-px w-8 bg-border" />

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
          Built for university students
        </span>

      </div>

      <p className="text-sm font-medium text-muted-foreground">BookHand</p>

      <h1 className="mt-1.5 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.625rem]">
        <span className="text-emerald-700 dark:text-emerald-500">
          Find your next book.
        </span>

        <span className="block text-foreground">
          Give your old books a new home.
        </span>
      </h1>


      <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base lg:mx-0">
        A simple marketplace for university students to buy affordable
        textbooks, sell books they no longer need, and connect with other
        students.
      </p>


      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
        <Link href="/books">
          <Button
            size="lg"
            className="group h-11 w-full rounded-lg bg-emerald-700 px-6 text-sm text-white hover:bg-emerald-600 sm:w-auto dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
          >
            <BookOpen className="mr-2 size-4" />
            Browse Books
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>

        <Link href="/sell-book">
          <Button
            size="lg"
            variant="outline"
            className="h-11 w-full rounded-lg px-6 text-sm hover:border-emerald-700/35 hover:bg-emerald-700/5 hover:text-emerald-800 sm:w-auto dark:hover:border-emerald-500/35 dark:hover:bg-emerald-500/5 dark:hover:text-emerald-400"
          >
            Sell a Book
          </Button>
        </Link>
      </div>


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
  );
};

export default HeroLeft;