import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Globe2,
  Tag,
  UserRound,
} from "lucide-react";

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
      <div className="flex flex-wrap items-center gap-2.5">
        <Badge
          variant="secondary"
          className="gap-1.5 rounded-full border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400"
        >
          <Tag className="size-3.5" />
          {book.category}
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full border-emerald-200 bg-emerald-50/50 px-3.5 py-1.5 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400"
        >
          {status}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {book.title}
      </h1>

      {/* Author */}
      <p className="mt-4 flex items-center gap-2.5 text-lg text-muted-foreground">
        <span className="flex size-8 items-center justify-center rounded-full bg-muted">
          <UserRound className="size-4" />
        </span>
        {book.author}
      </p>

      {/* Divider */}
      <div className="my-8 h-px bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <InfoCard
          icon={<BookOpen className="size-5 text-emerald-600 dark:text-emerald-400" />}
          label="Condition"
          value={condition}
        />

        <InfoCard
          icon={<Globe2 className="size-5 text-emerald-600 dark:text-emerald-400" />}
          label="Language"
          value={book.language}
        />

        <InfoCard
          icon={<Tag className="size-5 text-emerald-600 dark:text-emerald-400" />}
          label="Category"
          value={book.category}
        />
      </div>

      {/* Price Section */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-emerald-50/80 to-transparent p-6 dark:border-emerald-800/60 dark:from-emerald-950/50 dark:via-emerald-950/30 dark:to-transparent">
        <p className="text-sm font-medium text-emerald-700/70 dark:text-emerald-400/70">
          Selling price
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
          ৳{price}
        </p>
      </div>

      {/* Description */}
      {book.description && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">
            About this book
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            {book.description}
          </p>
        </div>
      )}
    </div>
  );
};

type InfoCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const InfoCard = ({ icon, label, value }: InfoCardProps) => {
  return (
    <div className="group rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-emerald-200 hover:shadow-sm dark:hover:border-emerald-800">
      <div className="mb-3 rounded-lg bg-emerald-50 p-2 size-fit dark:bg-emerald-950">
        {icon}
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 truncate font-semibold text-foreground">
        {value}
      </p>
    </div>
  );
};

export default BookInfo;
