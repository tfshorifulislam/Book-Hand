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
    session?.user?.id === sellerId ? "/profile" : `/profile/${sellerId}`;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        className="h-12 gap-2.5 bg-emerald-600 px-8 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-600"
      >
        <MessageCircle className="size-4.5" />
        Contact Seller
      </Button>

      <Link href={profileHref}>
        <Button
          size="lg"
          variant="outline"
          className="h-12 gap-2.5 border-emerald-200 px-8 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950 dark:hover:text-emerald-300"
        >
          <User className="size-4.5" />
          View Seller
        </Button>
      </Link>
    </div>
  );
};

export default BookActions;