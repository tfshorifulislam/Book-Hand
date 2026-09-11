import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

type BookActionsProps = {
  sellerId: string;
};

const BookActions = ({ sellerId }: BookActionsProps) => {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        className="h-12 gap-2 bg-emerald-600 px-7 hover:bg-emerald-700"
      >
        <ShoppingCart className="size-5" />
        Contact Seller
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="h-12 px-7"
        
      >
        <Link href={`/profile/${sellerId}`}>
          View Seller
        </Link>
      </Button>
    </div>
  );
};

export default BookActions;