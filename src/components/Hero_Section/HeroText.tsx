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
  { icon: ShieldCheck, label: "Safe & trusted" },
  { icon: Users, label: "Student community" },
  { icon: BookOpenCheck, label: "University textbooks" },
];

const HeroSectionText = () => {
  return (
    <div className="w-full max-w-3xl text-center">
      

      {/* Heading */}
      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-[#FF9100] dark:text-[#FF9100]">
          Find your next book.
        </span>

        <span className="mt-2 block text-foreground">
          Give your old books a new home.
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        A simple marketplace for university students to buy affordable
        textbooks, sell books they no longer need, and connect with other
        students.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/books">
          <Button
            size="lg"
            className="group h-11 w-full rounded-lg bg-[#FF9100] px-6 text-sm text-white hover:bg-[#EB7D00] sm:w-auto dark:bg-[#FF9100] dark:text-black dark:hover:bg-[#EB7D00] cursor-pointer"
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
            className="h-11 w-full rounded-lg px-6 text-sm sm:w-auto cursor-pointer"
          >
            Sell a Book
          </Button>
        </Link>
      </div>

      {/* Highlights */}
      <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-border pt-6">
        {highlights.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Icon className="size-3.5 text-[#FF9100] dark:text-[#FF9100]" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSectionText;