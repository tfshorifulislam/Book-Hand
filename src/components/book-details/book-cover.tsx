import Image from "next/image";

type BookCoverProps = {
  title: string;
  coverImage?: string | null;
};

const BookCover = ({ title, coverImage }: BookCoverProps) => {
  return (
    <div className="w-full">
      <div className="group relative mx-auto max-w-sm">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Cover container */}
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg shadow-black/5 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/10 group-hover:-translate-y-1">
          <div className="relative aspect-[3/4]">
            <Image
              src={coverImage || "/book-placeholder.png"}
              alt={title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
