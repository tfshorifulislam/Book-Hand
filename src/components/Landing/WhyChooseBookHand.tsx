import { ShieldCheck, Banknote, Clock, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every book listing is reviewed to ensure accuracy and quality so you know exactly what you are getting.",
  },
  {
    icon: Banknote,
    title: "Save Big",
    description:
      "Buy textbooks at a fraction of retail price directly from fellow students on your campus.",
  },
  {
    icon: Clock,
    title: "Fast & Easy",
    description:
      "List or find a book in under 2 minutes with our simple, streamlined process.",
  },
  {
    icon: Users,
    title: "Student Network",
    description:
      "Connect with students from your university and nearby campuses who share your courses.",
  },
];

export function WhyChooseBookHand() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why BookHand
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for Students,{" "}
            <span className="text-emerald-700 dark:text-emerald-500">
              by Students
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            We built BookHand to solve the problems every university student
            faces when dealing with expensive textbooks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border bg-emerald-50 dark:bg-emerald-950/40">
                  <Icon className="size-5 text-emerald-700 dark:text-emerald-500" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
