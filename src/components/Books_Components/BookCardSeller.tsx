import Link from "next/link";
import { UserRound } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

type Props = {
    sellerId?: string;
    sellerName?: string | null;
    sellerImage?: string | null;
    profileUrl: string;
};

const BookCardSeller = ({
    sellerId,
    sellerName,
    sellerImage,
    profileUrl,
}: Props) => {
    return (
        <Link
            href={profileUrl}
            className="
                flex items-center gap-3
                rounded-xl
                border border-border/50
                bg-muted/30
                p-2.5
                transition-all duration-200
                hover:border-emerald-500/30
                hover:bg-emerald-50/50
                dark:hover:bg-emerald-950/20
            "
        >
            <Avatar className="size-9">
                <AvatarImage
                    src={sellerImage || undefined}
                    alt={sellerName || "Seller"}
                />

                <AvatarFallback
                    className="
                        bg-emerald-100
                        text-xs
                        font-semibold
                        text-emerald-700
                        dark:bg-emerald-900/60
                        dark:text-emerald-300
                    "
                >
                    {sellerName?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Seller
                </p>

                <p className="truncate text-sm font-medium">
                    {sellerName || "Unknown seller"}
                </p>
            </div>

            <UserRound className="size-4 shrink-0 text-muted-foreground" />
        </Link>
    );
};

export default BookCardSeller;