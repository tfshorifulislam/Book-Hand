import { ArrowDown } from "lucide-react";
import { ForBuyers } from "./ForBuyers";
import { ForSellers } from "./ForSellers";

export function HowItWorks() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-700" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                How It Works
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Buy or sell books.
              <br />
              <span className="text-muted-foreground/40">
                It&apos;s that simple.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            A simple way to find affordable textbooks or pass your old books
            on to someone who needs them.
          </p>
        </div>

        {/* Buyer */}
        <div className="overflow-hidden rounded-lg border">
          <div className="flex items-center justify-between border-b px-6 py-5 md:px-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted-foreground/40">
                01
              </span>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  For Buyers
                </span>

                <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                  Find your next textbook
                </h3>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 md:p-8">
            <ForBuyers />
          </div>
        </div>

        {/* Connector */}
        <div className="flex h-14 items-center justify-center">
          <div className="flex size-8 items-center justify-center rounded-full border bg-background">
            <ArrowDown className="size-3.5 text-emerald-700" />
          </div>
        </div>

        {/* Seller */}
        <div className="overflow-hidden rounded-lg border">
          <div className="flex items-center justify-between border-b px-6 py-5 md:px-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted-foreground/40">
                02
              </span>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  For Sellers
                </span>

                <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                  Give your old books a new home
                </h3>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 md:p-8">
            <ForSellers />
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">
            Simple steps. Better textbook access.
          </span>

          <div className="h-1 w-10 rounded-full bg-emerald-700" />
        </div>
      </div>
    </section>
  );
}