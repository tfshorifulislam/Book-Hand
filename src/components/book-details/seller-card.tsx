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
    <section className="mt-16">
      {/* Section Header */}
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Seller
        </span>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">
          Seller Information
        </h2>
      </div>

      {/* Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 dark:from-emerald-400 dark:via-emerald-500 dark:to-emerald-600" />

        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          {/* Seller Info */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative size-16 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 p-[2px]">
                <div className="flex size-full items-center justify-center overflow-hidden rounded-full bg-background">
                  {seller.image ? (
                    <Image
                      src={seller.image}
                      alt={seller.name}
                      width={60}
                      height={60}
                      className="size-full object-cover"
                    />
                  ) : (
                    <UserRound className="size-7 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>

            {/* Name & Email */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-foreground">
                {seller.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
                <Mail className="size-3.5 shrink-0" />
                {seller.email}
              </p>
            </div>
          </div>

          {/* View Profile Button */}
          <Button
            variant="outline"
            size="lg"
            className="group/btn h-11 gap-2 px-6 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:-translate-y-0.5 dark:hover:border-emerald-700 dark:hover:bg-emerald-950"
          >
            <Link
              href={`/profile/${seller.id}`}
              className="flex items-center gap-2"
            >
              View Profile
              <ExternalLink className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellerCard;
