'use client'
import { Wallet, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

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
      "Keep 100% of your earnings. No hidden fees and no commission on your book sales.",
  },
  {
    icon: MapPin,
    title: "Campus-Local Pickup",
    description:
      "Connect with students nearby and arrange quick, convenient meetups on or near campus.",
  },
  {
    icon: MessageCircle,
    title: "Direct Student Chat",
    description:
      "Talk directly with buyers and sellers, ask questions, negotiate, and arrange meetups.",
  },
];

export function StudentBenefits() {
  return (
    <section className="relative w-full overflow-hidden border-y bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Student Marketplace
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for students.
            <br />
            <span className="text-emerald-600 dark:text-emerald-500">
              Made for smarter buying.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Save money on textbooks, sell the books you no longer need, and
            connect directly with students from your campus community.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border bg-background">
          <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-7 text-center"
              >
                <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {stat.value}
                </div>

                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-xs font-medium text-muted-foreground/50">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex size-11 items-center justify-center rounded-xl border bg-muted/50 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                  <Icon className="size-5 text-emerald-600 dark:text-emerald-500" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {benefit.description}
                </p>

                <div className="mt-6 flex items-center gap-1 text-xs font-medium text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-emerald-500">
                  Learn more
                  <ArrowUpRight className="size-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}