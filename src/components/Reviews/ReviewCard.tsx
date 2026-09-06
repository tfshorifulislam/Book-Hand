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
        w-[280px]
        shrink-0
        rounded-xl
        border
        bg-background
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        sm:w-[320px]
        sm:rounded-2xl
        sm:p-5

        md:w-[360px]
        md:p-6

        lg:w-[380px]
      "
    >
      {/* Rating + Quote */}
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 sm:gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              className="size-3.5 fill-yellow-400 text-yellow-400 sm:size-4"
            />
          ))}
        </div>

        <Quote className="size-6 text-muted-foreground/15 sm:size-8" />
      </div>

      {/* Review */}
      <p
        className="
          mt-4
          h-[72px]
          overflow-hidden
          text-xs
          leading-6
          text-muted-foreground

          sm:mt-5
          sm:text-sm

          md:mt-6
        "
      >
        “{review.review}”
      </p>

      {/* User */}
      <div className="mt-5 flex items-center gap-3 sm:mt-7">
        <div
          className="
            flex
            size-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            bg-muted
            text-xs
            font-semibold

            sm:size-10
            sm:text-sm

            md:size-11
          "
        >
          {review.name.charAt(0)}
        </div>

        <div className="min-w-0">
          <h4 className="truncate text-xs font-semibold sm:text-sm">
            {review.name}
          </h4>

          <p className="text-[11px] text-muted-foreground sm:text-xs">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}