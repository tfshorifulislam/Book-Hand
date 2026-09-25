"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type Benefit = {
  image: string;
  title: string;
  description: string;
  detail: string;
};

const benefits: Benefit[] = [
  {
    image: "/student.jpg",
    title: "Built for Students",
    description:
      "A marketplace designed around university textbooks and student budgets — not a generic classifieds site.",
    detail: "Tuned for campus life",
  },
  {
    image: "/affordablebooks.jpg",
    title: "Affordable Books",
    description:
      "Find used textbooks for less than retail, and sell old copies when your course ends.",
    detail: "Priced for students",
  },
  {
    image: "/buyandsell.jpg",
    title: "Buy & Sell Easily",
    description:
      "List a book in minutes and find exactly what you need for your upcoming courses.",
    detail: "Fast, no paperwork",
  },
  {
    image: "/trustedstudentcommunity.jpg",
    title: "Trusted Student Community",
    description:
      "Buy and sell alongside verified students in one focused, trustworthy marketplace.",
    detail: "Students only",
  },
];

export function WhyChooseBookHand() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24">
      <div className="mx-auto max-w-370 px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]"
          >
            The BookHand difference
          </motion.p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything students need.
            <span className="block text-[#FF9100]">
              All in one place.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            A simpler way to discover, buy, sell, and exchange university
            textbooks.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-14">
          {benefits.map((benefit, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.div
                key={benefit.title}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`grid items-center gap-8 border-t py-12 md:grid-cols-2 md:gap-16 lg:py-16 ${
                  reversed ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <motion.div
                  initial={
                    reducedMotion
                      ? false
                      : {
                          opacity: 0,
                          x: reversed ? 25 : -25,
                        }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08 + 0.1,
                  }}
                  className="max-w-lg"
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {benefit.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className="h-px w-6 bg-[#FF9100]" />
                    {benefit.detail}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={
                    reducedMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.96,
                          x: reversed ? -25 : 25,
                        }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          scale: 1,
                          x: 0,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08 + 0.15,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-muted/20"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/0" />

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                        {benefit.detail}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}