
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-emerald-700 px-6 py-12 text-center sm:px-12 sm:py-14 md:px-16">
          {/* Decorative circles */}
          <div className="absolute -left-24 -top-24 size-56 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-24 size-72 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            {/* Label */}
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="size-1.5 rounded-full bg-white/70" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Start with BookHand
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              Ready to save on textbooks?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-emerald-100 sm:text-base">
              Buy affordable books from students or sell the textbooks you no
              longer need. Simple, direct, and free to get started.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/sell-book">
                <Button
                  size="lg"
                  className="group h-11 cursor-pointer rounded-md bg-white px-6 text-emerald-700 hover:bg-emerald-50"
                >
                  <BookOpen className="mr-2 size-4" />
                  Get Started Free
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/books">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 cursor-pointer rounded-md border-white/20 bg-white/10 px-6 text-white hover:bg-white/15 hover:text-white"
                >
                  Browse Books
                </Button>
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-xs text-emerald-100/60">
              Join 500+ students already saving on textbooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
