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
    <article
      className="
        group
        flex
        w-[270px]
        shrink-0
        flex-col
        rounded-xl
        border
        bg-background
        p-4
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg

        xs:w-[280px]

        sm:w-[320px]
        sm:rounded-2xl
        sm:p-5

        md:w-[350px]
        md:p-6

        lg:w-[380px]
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              className="
                size-3.5
                fill-yellow-400
                text-yellow-400
                sm:size-4
              "
            />
          ))}
        </div>

        {/* Quote */}
        <Quote
          className="
            size-6
            text-muted-foreground/20
            sm:size-7
            md:size-8
          "
        />
      </div>

      {/* Review */}
      <p
        className="
          mt-4
          min-h-[84px]
          text-xs
          leading-5
          text-muted-foreground

          sm:mt-5
          sm:min-h-[90px]
          sm:text-sm
          sm:leading-6

          md:mt-6
        "
      >
        “{review.review}”
      </p>

      {/* User */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-3

          sm:mt-6
          md:mt-7
        "
      >
        {/* Avatar */}
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

        {/* User Info */}
        <div className="min-w-0">
          <h4 className="truncate text-xs font-semibold sm:text-sm">
            {review.name}
          </h4>

          <p className="text-[10px] text-muted-foreground sm:text-xs">
            {review.role}
          </p>
        </div>
      </div>
    </article>
  );
}