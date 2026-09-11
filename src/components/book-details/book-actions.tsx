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
        className="group h-12 gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-0.5 dark:from-emerald-500 dark:to-emerald-600 dark:shadow-emerald-500/20 dark:hover:shadow-emerald-500/25"
      >
        <MessageCircle className="size-5 transition-transform duration-200 group-hover:scale-110" />
        Contact Seller
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="group h-12 gap-2.5 px-8 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:-translate-y-0.5 dark:hover:border-emerald-700 dark:hover:bg-emerald-950"
      >
        <Link href={`/profile/${sellerId}`} className="flex items-center gap-2.5">
          <User className="size-5 transition-transform duration-200 group-hover:scale-110" />
          View Seller
        </Link>
      </Button>
    </div>
  );
};

export default BookActions;
