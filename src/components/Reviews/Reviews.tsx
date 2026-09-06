"use client";

import { ReviewRow } from "./ReviewRow";
import type { Review } from "./ReviewCard";

const reviews: Review[] = [
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
    <section className="w-full overflow-hidden py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs md:text-sm">
            Community Stories
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            What Our Users Say
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base">
            Hear from readers and sellers who are part of the Book Hand
            community.
          </p>
        </div>

        {/* Review Slider */}
        <div className="relative mt-10 w-full sm:mt-12 md:mt-16">

          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-6
              bg-linear-to-r
              from-background
              to-transparent
              sm:w-12
              md:w-20
              lg:w-28
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-6
              bg-linear-to-l
              from-background
              to-transparent
              sm:w-12
              md:w-20
              lg:w-28
            "
          />

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <ReviewRow
              reviews={firstRow}
              direction="left"
            />

            <ReviewRow
              reviews={secondRow}
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}