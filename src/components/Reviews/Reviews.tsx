"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Book Buyer",
    review:
      "Book Hand made finding affordable books so easy. I found the books I needed at a great price.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Book Seller",
    review:
      "I had many unused books at home. Book Hand helped me list and sell them easily.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Book Buyer",
    review:
      "The buying experience is simple and convenient. I love the idea of giving used books a second life.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sadia Islam",
    role: "Book Buyer",
    review:
      "I found some amazing books on Book Hand. The whole experience was smooth and enjoyable.",
    rating: 5,
  },
  {
    id: 5,
    name: "Fahim Rahman",
    role: "Book Seller",
    review:
      "Selling my old books has never been this easy. Book Hand is a great platform for readers.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mim Akter",
    role: "Book Buyer",
    review:
      "Great platform for book lovers. I can discover affordable books without any hassle.",
    rating: 5,
  },
];

export function Reviews() {
  const firstRow = reviews.slice(0, 3);
  const secondRow = reviews.slice(3, 6);

  return (
    <section className="w-full overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Community Stories
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>

          <p className="mt-4 text-muted-foreground">
            Hear from readers and sellers who are part of the Book Hand
            community.
          </p>
        </div>

        {/* Reviews */}
        <div className="relative mt-16 space-y-6 overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-linear-to-r from-background to-transparent md:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-linear-to-l from-background to-transparent md:w-32" />

          {/* ================= ROW 1 ================= */}
          <motion.div
            className="flex w-max gap-6"
            animate={{
              x: ["0%", "-25%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...firstRow, ...firstRow, ...firstRow].map(
              (review, index) => (
                <ReviewCard
                  key={`row1-${review.id}-${index}`}
                  review={review}
                />
              )
            )}
          </motion.div>

          {/* ================= ROW 2 ================= */}
          <motion.div
            className="flex w-max gap-6"
            initial={{
              x: "-25%",
            }}
            animate={{
              x: ["-25%", "0%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map(
              (review, index) => (
                <ReviewCard
                  key={`row2-${review.id}-${index}`}
                  review={review}
                />
              )
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <div
      className="
        w-[320px]
        shrink-0
        rounded-2xl
        border
        bg-background
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        sm:w-[360px]
        lg:w-[380px]
      "
    >
      {/* Rating + Quote */}
      <div className="flex items-center justify-between">

        {/* Yellow Stars */}
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              className="size-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <Quote className="size-8 text-muted-foreground/15" />
      </div>

      {/* Review - Exactly 3 line height */}
      <p
        className="
          mt-6
          h-[72px]
          overflow-hidden
          text-sm
          leading-6
          text-muted-foreground
        "
      >
        “{review.review}”
      </p>

      {/* User */}
      <div className="mt-7 flex items-center gap-3">

        {/* Avatar */}
        <div
          className="
            flex
            size-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            bg-muted
            text-sm
            font-semibold
          "
        >
          {review.name.charAt(0)}
        </div>

        {/* User Info */}
        <div>
          <h4 className="text-sm font-semibold">
            {review.name}
          </h4>

          <p className="text-xs text-muted-foreground">
            {review.role}
          </p>
        </div>

      </div>
    </div>
  );
}