import {
  Search,
  ShoppingCart,
  Truck,
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

export function ForBuyers() {
  return (
    <div>
      {/* Header */}
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

      {/* Steps */}
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
  );
}