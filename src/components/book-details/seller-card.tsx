
"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { ExternalLink, Mail, UserRound } from "lucide-react";
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
  const { data: session } = useSession();

  const profileHref =
    session?.user?.id === seller.id
      ? "/profile"
      : `/profile/${seller.id}`;

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950">
          {seller.image ? (
            <Image
              src={seller.image}
              alt={seller.name}
              width={48}
              height={48}
              className="size-full object-cover"
            />
          ) : (
            <UserRound className="size-5 text-[#EB7D00] dark:text-[#EB7D00]" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate font-semibold">{seller.name}</p>

          <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
            <Mail className="size-3.5 shrink-0" />
            {seller.email}
          </p>
        </div>
      </div>

      <Link href={profileHref}>
        <Button variant="outline" size="sm" className="shrink-0">
          View Profile
          <ExternalLink className="ml-1.5 size-3.5" />
        </Button>
      </Link>
    </div>
  );
};

export default SellerCard;