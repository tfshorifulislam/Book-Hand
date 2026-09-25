import Image from "next/image";

type BookCoverProps = {
  title: string;
  coverImage?: string | null;
};

const BookCover = ({ title, coverImage }: BookCoverProps) => {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-xl bg-muted">
      <div className="relative aspect-3/4">
        <Image
          src={coverImage || 'book Image'}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 400px"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default BookCover;