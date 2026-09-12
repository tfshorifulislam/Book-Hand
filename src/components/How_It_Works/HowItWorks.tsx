import { ArrowDown } from "lucide-react";
import { ForBuyers } from "./ForBuyers";
import { ForSellers } from "./ForSellers";

export function HowItWorks() {
  return (
    <section className="w-full overflow-hidden border-y bg-muted/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            How It Works
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Buy or sell books.
            <br />
            <span className="text-emerald-600 dark:text-emerald-500">
              It&apos;s that simple.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            BookHand makes it easy to find affordable textbooks or turn your
            old books into extra money.
          </p>
        </div>

        {/* Process */}
        <div className="mt-16 space-y-10 md:mt-20 md:space-y-14">
          {/* Buyer */}
          <div className="relative rounded-3xl border bg-background p-5 shadow-sm sm:p-8 md:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
                  For Buyers
                </span>

                <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                  Find your next textbook
                </h3>
              </div>

              <div className="hidden size-10 items-center justify-center rounded-full border bg-muted/50 text-sm font-semibold sm:flex">
                01
              </div>
            </div>

            <ForBuyers />
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="flex size-9 items-center justify-center rounded-full border bg-background shadow-sm">
              <ArrowDown className="size-4 text-emerald-600 dark:text-emerald-500" />
            </div>
          </div>

          {/* Seller */}
          <div className="relative rounded-3xl border bg-background p-5 shadow-sm sm:p-8 md:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
                  For Sellers
                </span>

                <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                  Give your old books a new home
                </h3>
              </div>

              <div className="hidden size-10 items-center justify-center rounded-full border bg-muted/50 text-sm font-semibold sm:flex">
                02
              </div>
            </div>

            <ForSellers />
          </div>
        </div>
      </div>
    </section>
  );
}