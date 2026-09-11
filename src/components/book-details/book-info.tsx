import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="flex flex-wrap items-center gap-2">
        <Badge
          variant="secondary"
          className="gap-1 rounded-full px-3 py-1"
        >
          <Tag className="size-3.5" />
          {book.category}
        </Badge>

        <Badge
          variant="outline"
          className="rounded-full px-3 py-1 text-emerald-600"
        >
          {status}
        </Badge>
      </div>

      <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {book.title}
      </h1>

      <p className="mt-4 flex items-center gap-2 text-lg text-muted-foreground">
        <UserRound className="size-5" />
        {book.author}
      </p>

      <div className="my-7 h-px bg-border" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <InfoCard
          icon={<BookOpen className="size-5 text-emerald-600" />}
          label="Condition"
          value={condition}
        />

        <InfoCard
          icon={<Globe2 className="size-5 text-emerald-600" />}
          label="Language"
          value={book.language}
        />

        <InfoCard
          icon={<Tag className="size-5 text-emerald-600" />}
          label="Category"
          value={book.category}
        />
      </div>

      <div className="mt-8 rounded-2xl border bg-muted/30 p-5">
        <p className="text-sm text-muted-foreground">
          Selling price
        </p>

        <p className="mt-1 text-4xl font-bold tracking-tight text-emerald-600">
          ৳{price}
        </p>
      </div>

      {book.description && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            About this book
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
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
    <Card className="border shadow-none">
      <CardContent className="p-4">
        <div className="mb-3">{icon}</div>

        <p className="text-xs text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 truncate font-semibold">
          {value}
        </p>
      </CardContent>
    </Card>
  );
};

export default BookInfo;