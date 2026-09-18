
"use client";

import { Search, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";

export function DesktopSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) {
      router.push("/books");
      return;
    }

    router.push(`/books?search=${encodeURIComponent(value)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="group relative w-[min(42vw,420px)]"
    >
      <Search
        className="
          absolute left-3 top-1/2 size-4
          -translate-y-1/2
          text-muted-foreground
          transition-colors
          group-focus-within:text-emerald-600
          dark:group-focus-within:text-emerald-400
        "
      />

      <Input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search books, authors..."
        aria-label="Search books and authors"
        className="
          h-9
          rounded-lg
          border-border/60
          bg-muted/40
          pl-9
          pr-10
          text-sm
          shadow-none
          transition-all
          placeholder:text-muted-foreground/70
          hover:bg-muted/60
          focus-visible:border-emerald-500/50
          focus-visible:bg-background
          focus-visible:ring-2
          focus-visible:ring-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute right-2 top-1/2
          hidden -translate-y-1/2
          items-center gap-1
          rounded-md
          border border-border/60
          bg-background/70
          px-1.5 py-0.5
          text-[10px]
          font-medium
          text-muted-foreground
          sm:flex
        "
      >
        <span>↵</span>
      </div>
    </form>
  );
}