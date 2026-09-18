import { Banknote, Clock, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Clear and accurate book details help you know what you are buying.",
  },
  {
    icon: Banknote,
    title: "Save More",
    description:
      "Find affordable textbooks directly from students instead of paying retail prices.",
  },
  {
    icon: Clock,
    title: "Quick & Simple",
    description:
      "Find a book or create a listing in just a few simple steps.",
  },
  {
    icon: Users,
    title: "Student Community",
    description:
      "Connect with students looking for the same books and courses.",
  },
];

export function WhyChooseBookHand() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-700" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why BookHand
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Made for students.
              <br />
              <span className="text-muted-foreground/40">
                Built around simplicity.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Everything you need to buy and sell textbooks without the usual
            hassle.
          </p>
        </div>

        {/* Features */}
        <div className="grid overflow-hidden rounded-lg border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={[
                  "group relative min-h-62.5 p-6 md:p-7",
                  "border-b last:border-b-0 sm:odd:border-r",
                  "lg:border-b-0 lg:border-r lg:last:border-r-0",
                ].join(" ")}
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                    <Icon className="size-4 text-emerald-700" />
                  </div>

                  <span className="font-mono text-[10px] text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">
            Simple tools. Better textbook access.
          </span>

          <div className="h-1 w-10 rounded-full bg-emerald-700" />
        </div>
      </div>
    </section>
  );
}