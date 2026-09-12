import Image from "next/image";

type BookCoverProps = {
  title: string;
  coverImage?: string | null;
};

const BookCover = ({ title, coverImage }: BookCoverProps) => {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px]">
      <div className="rounded-3xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 p-4 sm:p-5 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-neutral-900/10 dark:shadow-black/30">
          <Image
            src={coverImage || "/book.png"}
            alt={title}
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 440px, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCover;
