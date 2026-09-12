import { Button } from "@/components/ui/button";
import { MessageCircle, User } from "lucide-react";
import Link from "next/link";

type BookActionsProps = {
  sellerId: string;
};

const BookActions = ({ sellerId }: BookActionsProps) => {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        className="h-12 gap-2.5 bg-emerald-700 px-8 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-black"
      >
        <MessageCircle className="size-4.5" />
        Contact Seller
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="h-12 gap-2.5 px-8 hover:border-emerald-300 hover:text-emerald-700 dark:hover:border-emerald-700 dark:hover:text-emerald-400"
      >
        <Link href={`/profile/${sellerId}`} className="flex items-center gap-2.5">
          <User className="size-4.5" />
          View Seller
        </Link>
      </Button>
    </div>
  );
};

export default BookActions;
