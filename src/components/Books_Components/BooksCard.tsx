import Image from "next/image";
import { BookListing } from "../../../Types/Book_Listing";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, } from "lucide-react";

type Props = {
    item: BookListing;
};

const BooksCard = async ({ item }: Props) => {
    const user = await auth.api.getSession({
        headers: await headers(),
    });

    const isOwnListing = user?.user?.id === item.seller.id;
    const profileUrl = isOwnListing ? "/profile" : `/profile/${item.seller.id}`;

    return (
        <Card className="group overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
            {/* Cover Image */}
            <div className="relative aspect-3/2  bg-muted">
                <Image
                    src={item.book.coverImage}
                    alt={item.book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Condition Badge */}
                <div className="absolute left-3 top-3">
                    <Badge
                        variant="secondary"
                        className="border-0 bg-black/70 text-white backdrop-blur-sm dark:bg-white/90 dark:text-black"
                    >
                        {item.condition}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <CardContent className="flex flex-1 flex-col gap-3 p-4 pb-0">
                {/* Category */}
                <Badge variant="outline" className="w-fit border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400">
                    {item.book.category}
                </Badge>

                {/* Title & Author */}
                <div className="space-y-1">
                    <h3 className="line-clamp-1 text-base font-semibold leading-snug tracking-tight">
                        {item.book.title}
                    </h3>
                    <p className="line-clamp-1 text-sm text-muted-foreground">
                        by {item.book.author}
                    </p>
                </div>

                {/* Seller */}
                <Link
                    href={profileUrl}
                    className="flex items-center gap-2.5 rounded-lg p-1.5 -mx-1.5 transition-colors hover:bg-muted"
                >
                    <Avatar size="sm">
                        <AvatarFallback className="bg-emerald-100 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                            {item.seller.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                        <p className="text-[11px] text-muted-foreground">
                            Sold by
                        </p>
                        <p className="truncate text-sm font-medium">
                            {item.seller.name}
                        </p>
                    </div>
                </Link>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex items-center justify-between gap-4 border-t border-border/50 p-4">
                <div>
                    <p className="text-[11px] text-muted-foreground">
                        Price
                    </p>
                    <p className="text-xl font-bold tracking-tight">
                        ৳{item.price}
                    </p>
                </div>

                <Button
                    variant="default"
                    size="sm"
                    nativeButton={false}
                    render={<Link href={`/books/${item.id}`} />}
                    className="bg-emerald-700 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500"
                >
                    View Details
                    <ArrowRight className="ml-1 size-3.5" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BooksCard;
