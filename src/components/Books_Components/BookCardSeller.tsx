import Link from "next/link";
import { UserRound } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

type Props = {
    sellerName?: string | null;
    sellerImage?: string | null;
    profileUrl: string;
};

const BookCardSeller = ({ sellerName, sellerImage, profileUrl, }: Props) => {
    console.log(sellerName)
    return (
        <Link
            href={profileUrl}
            className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 p-2.5 transition-all duration-200 hover:border-[#EB7D00]/30 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20"
        >
            <Avatar className="size-9">
                <AvatarImage
                    src={sellerImage || undefined}
                    alt={sellerName || "Seller"}
                />

                <AvatarFallback
                    className="
                        bg-[#FF9100]
                        text-xs
                        font-semibold
                        text-white
                        dark:text-black
                        dark:bg-[#FF9100]
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