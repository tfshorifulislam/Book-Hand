import { Wallet, MapPin, MessageCircle } from "lucide-react";

const stats = [
  { value: "2,500+", label: "Books Listed" },
  { value: "500+", label: "Active Students" },
  { value: "15+", label: "Universities" },
];

const benefits = [
  {
    icon: Wallet,
    title: "Zero Commission",
    description:
      "Keep 100% of what you earn. We do not take a single cent from your sales.",
  },
  {
    icon: MapPin,
    title: "Campus-Local Pickups",
    description:
      "Meet sellers on your own campus or nearby for quick, convenient exchanges.",
  },
  {
    icon: MessageCircle,
    title: "Direct Student Chat",
    description:
      "Message sellers directly to ask questions, negotiate, or arrange a meetup.",
  },
];

export function StudentBenefits() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Student Marketplace
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Students{" "}
            <span className="text-emerald-700 dark:text-emerald-500">
              Love BookHand
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            The numbers speak for themselves. BookHand is the go-to marketplace
            for students who want to save money and help each other.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-tight text-emerald-700 dark:text-emerald-500 sm:text-5xl">
                {stat.value}
              </div>

              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border bg-background">
                  <Icon className="size-5 text-emerald-700 dark:text-emerald-500" />
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
