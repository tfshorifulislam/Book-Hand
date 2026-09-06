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

  const thirdRow = [
    reviews[1],
    reviews[2],
    reviews[3],
  ];

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

        {/* Review Rows */}
        <div className="relative mt-16 space-y-6 overflow-hidden">

          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-20
              bg-linear-to-r
              from-background
              to-transparent
              md:w-32
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-20
              bg-linear-to-l
              from-background
              to-transparent
              md:w-32
            "
          />

          {/* Row 1 */}
          <ReviewRow
            reviews={firstRow}
            direction="left"
          />

          {/* Row 2 */}
          <ReviewRow
            reviews={secondRow}
            direction="right"
          />

          {/* Row 3 */}
          <ReviewRow
            reviews={thirdRow}
            direction="left"
          />
        </div>
      </div>
    </section>
  );
}