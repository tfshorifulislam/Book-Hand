import { ForBuyers } from "./ForBuyers";
import { ForSellers } from "./ForSellers";

export function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Simple & Easy
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How Book Hand Works
          </h2>

          <p className="mt-4 text-muted-foreground">
            Whether you want to buy a book or sell one, Book Hand makes
            everything simple.
          </p>
        </div>

        {/* Buyers */}
        <div className="mt-16">
          <ForBuyers />
        </div>

        {/* Sellers */}
        <div className="mt-16">
          <ForSellers />
        </div>

      </div>
    </section>
  );
}