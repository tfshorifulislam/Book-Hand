"use client";

import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { MessageCircle, User } from "lucide-react";
import Link from "next/link";

type BookActionsProps = {
    sellerId: string;
};

const BookActions = ({ sellerId }: BookActionsProps) => {
    const { data: session } = useSession();

    const profileHref =
        session?.user?.id === sellerId
            ? "/profile"
            : `/profile/${sellerId}`;

    return (
        <div className="flex gap-3">
            <Button
                size="lg"
                className="cursor-pointer gap-2 bg-[#EB7D00] text-white hover:bg-[#FF9100] dark:bg-[#FF9100] dark:text-black dark:hover:bg-[#EB7D00]"
            >
                <MessageCircle className="size-4" />
                Contact Seller
            </Button>

            <Link href={profileHref}>
                <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer gap-2 text-[#FF9100] hover:border-[#FF9100]/40 hover:bg-[#FF9100]/5 hover:text-[#EB7D00]"
                >
                    <User className="size-4" />
                    View Seller
                </Button>
            </Link>
        </div>
    );
};

export default BookActions;