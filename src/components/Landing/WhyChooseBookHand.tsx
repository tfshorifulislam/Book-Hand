"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

export type Benefit = {
  image: string;
  title: string;
  description: string;
  detail: string;
  buttonText?: string;
  buttonHref?: string;
};

export type WhyChooseBookHandProps = {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  subheading?: string;
  benefits?: Benefit[];
};

const defaultBenefits: Benefit[] = [
  {
    image: "/student1.jpg",
    title: "Built for Students",
    description:
      "BookHand is built specifically around the way university students find, use, and exchange textbooks. Instead of searching through large general marketplaces where books are mixed with unrelated products, students can explore a focused marketplace made for their academic needs. Whether you are starting a new semester, looking for a required textbook, or trying to pass on books from previous courses, BookHand keeps the experience simple and relevant to student life.",
    detail: "Made for campus life",
    buttonText: "Explore Marketplace",
    buttonHref: "/marketplace",
  },
  {
    image: "/affordablebooks1.jpg",
    title: "Save More on Textbooks",
    description:
      "Buying textbooks every semester can quickly become expensive, especially when some books are only needed for a limited period. BookHand gives students an easier way to discover used textbooks at more affordable prices instead of always buying new copies. At the same time, students who have finished their courses can sell books they no longer need and recover part of what they originally spent.",
    detail: "Student-friendly prices",
    buttonText: "Find Affordable Books",
    buttonHref: "/search",
  },
  {
    image: "/trustedstudentcommunity1.jpg",
    title: "Buy & Sell With Ease",
    description:
      "BookHand keeps the buying and selling process straightforward from beginning to end. Buyers can browse listings, search for specific books, view important details such as condition and price, and decide which listing fits their needs. Sellers can create a listing by adding the book information, condition, price, and photos, making it easier for other students to discover and contact them.",
    detail: "Simple from start to finish",
    buttonText: "List a Book",
    buttonHref: "/sell",
  },
  {
    image: "/12.jpg",
    title: "Connect With Students",
    description:
      "Books are more useful when they can move from one student to another, and BookHand is designed to make that connection easier. Students can discover books listed by other members of the university community and communicate directly with sellers about availability, condition, price, and other details. It creates a focused environment where students can buy and sell books with people who understand their needs.",
    detail: "Student-to-student marketplace",
    buttonText: "Join Community",
    buttonHref: "/community",
  },
];

export function WhyChooseBookHand({
  eyebrow = "The BookHand difference",
  heading = "Everything students need.",
  headingAccent = "All in one place.",
  subheading = "A simpler way to discover, buy, sell, and exchange university textbooks.",
  benefits = defaultBenefits,
}: WhyChooseBookHandProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            className="inline-flex items-center rounded-full bg-[#EB7D00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]"
          >
            {eyebrow}
          </motion.p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {heading}
            <span className="block mt-1 text-[#FF9100]">{headingAccent}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {subheading}
          </p>
        </motion.div>

        {/* Benefits List */}
        <div className="mt-16 sm:mt-20 space-y-16 lg:space-y-24">
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
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  reversed ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Text Content */}
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
                  className="max-w-xl flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF9100]/10 text-xs font-bold text-[#FF9100]">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="h-px w-6 bg-[#FF9100]" />
                      {benefit.detail}
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>

                  {/* Dynamic Action Button */}
                  {benefit.buttonText && benefit.buttonHref && (
                    <div className="mt-8">
                      <Link
                        href={benefit.buttonHref}
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:translate-x-0.5 active:translate-y-0"
                      >
                        <span>{benefit.buttonText}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </motion.div>

                {/* Image Card */}
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
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-muted/30 p-2 shadow-xl shadow-black/3 backdrop-blur-sm transition-all duration-500 hover:border-[#FF9100]/40 hover:shadow-2xl hover:shadow-[#FF9100]/5"
                >
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-xl border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
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