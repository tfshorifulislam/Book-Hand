"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div className="hidden lg:block">
            <form
                onSubmit={handleSearch}
                role="search"
                aria-label="Search books"
                className="relative"
            >
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search books, authors..."
                    aria-label="Search books"
                    className="h-9 w-44 rounded-lg border-border bg-muted/30 pl-9 pr-4 text-sm shadow-none transition-all duration-150 focus-visible:w-52 focus-visible:bg-background dark:border-input dark:bg-muted/30"
                />
            </form>
        </div>
    );
}