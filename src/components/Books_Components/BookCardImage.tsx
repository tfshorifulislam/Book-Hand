import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Props = {
  id: string;
  title: string;
  coverImage?: string | null;
  condition: string;
  category: string;
};

const BookCardImage = ({
  id,
  title,
  coverImage,
  condition,
  category,
}: Props) => {
  return (
    <Link href={`/books/${id}`} className="block">
      <div className="group relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={coverImage || "/book.png"}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Condition */}
        <div className="absolute left-3 top-3">
          <Badge className="border-0 bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {condition}
          </Badge>
        </div>

        {/* Category */}
        <div className="absolute right-3 top-3">
          <Badge
            variant="secondary"
            className="border-0 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-neutral-800 backdrop-blur-md dark:bg-black/80 dark:text-white"
          >
            {category}
          </Badge>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-black/90 dark:text-white">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </Link>
  );
};

export default BookCardImage;