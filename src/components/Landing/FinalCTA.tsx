import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-emerald-700 dark:bg-emerald-600 px-8 py-16 text-center sm:px-16 sm:py-20">

          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-emerald-600/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-emerald-800/40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Save on Textbooks?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-emerald-100 sm:text-lg">
              Join hundreds of university students who are already buying and
              selling books on BookHand. Get started for free today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group cursor-pointer rounded-md bg-white px-6 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-700"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer rounded-md border-emerald-500/30 bg-emerald-600/20 px-6 text-white hover:bg-emerald-600/30 hover:text-white"
              >
                Browse Books
              </Button>
            </div>

            <p className="mt-6 text-sm text-emerald-200">
              Join 500+ students already saving
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
