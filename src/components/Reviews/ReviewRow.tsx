"use client";

import { motion } from "motion/react";
import { Review, ReviewCard } from "./ReviewCard";

type ReviewRowProps = {
  reviews: Review[];
  direction: "left" | "right";
};

export function ReviewRow({
  reviews,
  direction,
}: ReviewRowProps) {
  const duplicatedReviews = [
    ...reviews,
    ...reviews,
    ...reviews,
  ];

  return (
    <motion.div
      className="flex w-max gap-3 sm:gap-4 md:gap-6"
      initial={{
        x: direction === "left" ? "0%" : "-25%",
      }}
      animate={{
        x:
          direction === "left"
            ? ["0%", "-25%"]
            : ["-25%", "0%"],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {duplicatedReviews.map((review, index) => (
        <ReviewCard
          key={`${direction}-${review.id}-${index}`}
          review={review}
        />
      ))}
    </motion.div>
  );
}