import { Button } from "@/components/ui/button";
import { Mail, UserRound, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SellerCardProps = {
  seller: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
};

const SellerCard = ({ seller }: SellerCardProps) => {
  return (
    <section>
      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-50 dark:bg-emerald-950">
            {seller.image ? (
              <Image
                src={seller.image}
                alt={seller.name}
                width={44}
                height={44}
                className="size-full object-cover"
              />
            ) : (
              <UserRound className="size-5 text-emerald-600 dark:text-emerald-400" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">{seller.name}</p>
            <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-muted-foreground">
              <Mail className="size-3 shrink-0" />
              {seller.email}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shrink-0 gap-1.5 hover:border-emerald-300 hover:text-emerald-700 dark:hover:border-emerald-700 dark:hover:text-emerald-400"
        >
          <Link href={`/profile/${seller.id}`} className="flex items-center gap-1.5">
            Profile
            <ExternalLink className="size-3" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default SellerCard;
