import { ShoppingBag, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BuyAndSell() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get Started
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Buy & Sell Books{" "}
            <span className="text-emerald-700 dark:text-emerald-500">
              Effortlessly
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Whether you need a textbook or want to sell one, BookHand makes
            the process simple and rewarding.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">

          {/* Buy Card */}
          <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40">
              <ShoppingBag className="size-7 text-emerald-700 dark:text-emerald-500" />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Buy Books
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Browse thousands of affordable textbooks from verified students.
              Find the exact book you need at a price that fits your budget
              and get it delivered or pick it up on campus.
            </p>

            <Link href='/books'>
              <Button
                size="lg"
                className="mt-6 group/btn cursor-pointer rounded-md bg-emerald-700 px-6 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
              >
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Sell Card */}
          <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex size-14 items-center justify-center rounded-2xl border bg-muted/50">
              <Tag className="size-7" />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Sell Books
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Turn your unused textbooks into cash. List your book in minutes,
              set your own price, and connect with buyers on your campus who
              need them.
            </p>

            <Link href='/sell-book'>
              <Button
                size="lg"
                variant="outline"
                className="mt-6 group/btn cursor-pointer rounded-md px-6"
              >
                List a Book
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
