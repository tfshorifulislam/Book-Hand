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
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-600"
            >
                <MessageCircle className="size-4" />
                Contact Seller
            </Button>

            <Link href={profileHref}>
                <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950"
                >
                    <User className="size-4" />
                    View Seller
                </Button>
            </Link>
        </div>
    );
};

export default BookActions;