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
        <div className="absolute left-1/2 hidden w-full max-w-sm -translate-x-1/2 lg:block lg:max-w-md">
            <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search books, authors..."
                    className="h-9 rounded-lg border-muted bg-muted/40 pl-9 pr-4 text-sm shadow-none transition-all focus-visible:bg-background focus-visible:ring-1"
                />
            </form>
        </div>
    );
}