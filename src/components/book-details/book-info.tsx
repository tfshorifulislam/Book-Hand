import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe2, Tag, UserRound } from "lucide-react";

type BookInfoProps = {
  book: {
    title: string;
    author: string;
    category: string;
    language: string;
    description?: string | null;
  };
  price: number;
  condition: string;
  status: string;
};

const BookInfo = ({
  book,
  price,
  condition,
  status,
}: BookInfoProps) => {
  return (
    <div className="min-w-0">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge
          variant="secondary"
          className="rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
        >
          {book.category}
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400"
        >
          {status}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {book.title}
      </h1>

      {/* Author */}
      <p className="mt-2.5 flex items-center gap-2 text-sm text-muted-foreground">
        <UserRound className="size-4" />
        {book.author}
      </p>

      {/* Price */}
      <div className="mt-6 inline-flex items-baseline gap-1.5 rounded-xl bg-emerald-50 px-5 py-3 dark:bg-emerald-950/50">
        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">৳</span>
        <span className="text-3xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
          {price}
        </span>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-border" />

      {/* Meta */}
      <div className="grid grid-cols-3 gap-3">
        <MetaItem icon={<BookOpen className="size-4" />} label="Condition" value={condition} />
        <MetaItem icon={<Globe2 className="size-4" />} label="Language" value={book.language} />
        <MetaItem icon={<Tag className="size-4" />} label="Category" value={book.category} />
      </div>

      {/* Description */}
      {book.description && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-foreground">About this book</h2>
          <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
            {book.description}
          </p>
        </div>
      )}
    </div>
  );
};

const MetaItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <p className="mt-1.5 truncate text-sm font-medium text-foreground">{value}</p>
    </div>
  );
};

export default BookInfo;
