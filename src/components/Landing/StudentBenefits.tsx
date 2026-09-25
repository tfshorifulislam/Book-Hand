"use client";

import {
  BadgeDollarSign,
  Search,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Benefit = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    number: "01",
    icon: Wallet,
    title: "Save Money",
    description:
      "Find affordable used textbooks instead of paying full retail prices.",
  },
  {
    number: "02",
    icon: BadgeDollarSign,
    title: "Sell What You No Longer Need",
    description:
      "Turn old textbooks into extra money by listing them for other students.",
  },
  {
    number: "03",
    icon: Search,
    title: "Find Books Faster",
    description:
      "Search for textbooks by title, author, category, or course.",
  },
  {
    number: "04",
    icon: Users,
    title: "Connect With Students",
    description:
      "Discover books from other students within a focused university marketplace.",
  },
];

export function StudentBenefits() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#FF9100] dark:bg-[#FF9100]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF9100] dark:text-[#FF9100]">
                Student-first
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-[#FF9100] dark:text-[#FF9100]">
                Built around
              </span>{" "}
              student needs.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-right sm:text-base">
            BookHand makes buying and selling university textbooks simpler,
            more affordable, and more convenient.
          </p>
        </motion.div>

        <ul className="mt-12 grid overflow-hidden rounded-2xl border md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.li
                key={benefit.number}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={
                  reducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                className={[
                  "group relative p-7 sm:p-9 md:p-12",
                  index === 0 && "border-b md:border-r",
                  index === 1 && "border-b",
                  index === 2 && "border-b md:border-b-0 md:border-r",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background transition-colors group-hover:border-[#FF9100]/50 dark:group-hover:border-[#FF9100]/50">
                    <Icon className="size-4 text-[#FF9100] dark:text-[#FF9100]" />
                  </div>

                  <span className="h-px flex-1 bg-border transition-colors group-hover:bg-[#FF9100]/30 dark:group-hover:bg-[#FF9100]/30" />

                  <span className="font-mono text-[11px] text-muted-foreground/40">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
                  {benefit.description}
                </p>

                <span className="absolute bottom-0 left-7 h-0.5 w-0 bg-[#FF9100] transition-all duration-300 group-hover:w-10 dark:bg-[#FF9100] sm:left-9 md:left-12" />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}