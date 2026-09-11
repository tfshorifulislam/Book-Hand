import Image from "next/image";

type BookCoverProps = {
  title: string;
  coverImage?: string | null;
};

const BookCover = ({ title, coverImage }: BookCoverProps) => {
  return (
    <div className="w-full">
      <div className="mx-auto rounded-2xl border bg-muted shadow-sm">
        <div className="relative aspect-3/4 rounded-2xl">
          <Image
            src={coverImage || "/book-placeholder.png"}
            alt={title}
            fill
            priority
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCover;