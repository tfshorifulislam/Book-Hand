import { Quote, Star } from "lucide-react";

export type Review = {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
};

export function ReviewCard({
  review,
}: {
  review: Review;
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

      {/* Review */}
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