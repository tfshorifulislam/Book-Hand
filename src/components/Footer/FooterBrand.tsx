import Link from "next/link";
import { BookOpen } from "lucide-react";

export function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"
      >
        <BookOpen className="h-6 w-6" />
        <span>BookHand</span>
      </Link>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Discover books, share your thoughts, and connect with people who love
        reading. Your space for everything books.
      </p>
    </div>
  );
}