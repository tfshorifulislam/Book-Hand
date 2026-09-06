"use client";

import { motion } from "motion/react";
import type { Review } from "./ReviewCard";
import { ReviewCard } from "./ReviewCard";

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
    ...reviews,
  ];

  const isLeft = direction === "left";

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-3 sm:gap-4 md:gap-6"
        animate={{
          x: isLeft
            ? ["0px", "-1080px"]
            : ["-1080px", "0px"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <ReviewCard
            key={`${direction}-${review.id}-${index}`}
            review={review}
          />
        ))}
      </motion.div>
    </div>
  );
}