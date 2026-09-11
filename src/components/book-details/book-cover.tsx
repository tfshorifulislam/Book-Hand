import Image from "next/image";

type BookCoverProps = {
  title: string;
  coverImage?: string | null;
};

const BookCover = ({ title, coverImage }: BookCoverProps) => {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-2xl border bg-muted shadow-sm">
        <div className="relative aspect-[3/4]">
          <Image
            src={coverImage || "/book-placeholder.png"}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCover;