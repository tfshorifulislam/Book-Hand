import {
  Search,
  ShoppingCart,
  Truck,
  BookOpen,
  Upload,
  PackageCheck,
} from "lucide-react";

const buyerSteps = [
  {
    step: "01",
    icon: Search,
    title: "Find a Book",
    description:
      "Browse thousands of books and find the one you're looking for.",
  },
  {
    step: "02",
    icon: ShoppingCart,
    title: "Place an Order",
    description:
      "Choose your book, add it to your cart, and place your order easily.",
  },
  {
    step: "03",
    icon: Truck,
    title: "Get Your Book",
    description:
      "Your book will be delivered to your preferred address.",
  },
];

const sellerSteps = [
  {
    step: "01",
    icon: BookOpen,
    title: "List Your Book",
    description:
      "Add your book details, condition, price, and photos in minutes.",
  },
  {
    step: "02",
    icon: Upload,
    title: "Get an Order",
    description:
      "Buyers can discover your book and place an order.",
  },
  {
    step: "03",
    icon: PackageCheck,
    title: "Sell & Earn",
    description:
      "Deliver the book to the buyer and earn from your unused books.",
  },
];

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

        {/* Buyer */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-lg border p-2">
              <ShoppingCart className="size-5" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                For Buyers
              </h3>
              <p className="text-sm text-muted-foreground">
                Find and buy your favorite books
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {buyerSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl border">
                      <Icon className="size-5" />
                    </div>

                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seller */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-lg border p-2">
              <BookOpen className="size-5" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                For Sellers
              </h3>
              <p className="text-sm text-muted-foreground">
                Turn your unused books into money
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sellerSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl border">
                      <Icon className="size-5" />
                    </div>

                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}