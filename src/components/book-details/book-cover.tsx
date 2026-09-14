import Image from "next/image";

type BookCoverProps = {
  title: string;
  coverImage?: string | null;
};

const BookCover = ({ title, coverImage }: BookCoverProps) => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-2 shadow-xl shadow-black/5 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 dark:shadow-black/20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
          <Image
            src={coverImage || "/book.png"}
            alt={title}
            fill
            priority
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              620px
            "
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Subtle overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default BookCover;