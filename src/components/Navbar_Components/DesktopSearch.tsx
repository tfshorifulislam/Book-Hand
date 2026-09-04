import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DesktopSearch() {
    return (
        <div className="absolute left-1/2 hidden w-full max-w-sm -translate-x-1/2 lg:block lg:max-w-md">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    type="search"
                    placeholder="Search books, authors..."
                    className="h-9 rounded-lg border-muted bg-muted/40 pl-9 pr-4 text-sm shadow-none transition-all focus-visible:bg-background focus-visible:ring-1"
                />
            </div>
        </div>
    )
}