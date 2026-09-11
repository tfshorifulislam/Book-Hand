import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, UserRound } from "lucide-react";
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
    <section className="mt-16 border-t pt-10">
      <div className="mb-5">
        <p className="text-sm font-medium text-emerald-600">
          SELLER
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Seller Information
        </h2>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-muted">
              {seller.image ? (
                <Image
                  src={seller.image}
                  alt={seller.name}
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
              ) : (
                <UserRound className="size-6 text-muted-foreground" />
              )}
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold">
                {seller.name}
              </h3>

              <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
                <Mail className="size-3.5 shrink-0" />
                {seller.email}
              </p>
            </div>
          </div>

          <Button variant="outline">
            <Link href={`/profile/${seller.id}`}>
              View Profile
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default SellerCard;