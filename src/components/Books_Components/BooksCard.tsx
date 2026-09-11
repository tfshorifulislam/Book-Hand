import Image from "next/image";
import { BookListing } from "../../../Types/Book_Listing";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type Props = {
    item: BookListing;
};

const BooksCard = async ({ item }: Props) => {

    const user = await auth.api.getSession({
        headers: await headers()
    })

    const isOwnListing = user?.user?.id === item.seller.id;
    const profileUrl = isOwnListing ? '/profile' : `/profile/${item.seller.id}`;

    return (
        <div

            className="group w-full overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Cover Image */}
            <div className="relative aspect-3/2 overflow-hidden bg-muted ">
                <Image
                    src={item.book.coverImage}
                    alt={item.book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Condition */}
                <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2.5 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
                    {item.condition}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    {item.book.category}
                </p>

                {/* Title */}
                <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
                    {item.book.title}
                </h3>

                {/* Author */}
                <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                    by {item.book.author}
                </p>

                {/* Seller */}
                <Link
                    href={profileUrl}
                    className="mt-4 -m-1.5 flex items-center gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-muted"
                >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                        {item.seller.name?.charAt(0).toUpperCase() || "U"}
                    </div>

                    <div className="min-w-0">
                        <p className="text-[11px] text-muted-foreground">
                            Sold by
                        </p>

                        <p className="truncate text-sm font-medium">
                            {item.seller.name}
                        </p>
                    </div>
                </Link>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div>
                        <p className="text-[11px] text-muted-foreground">
                            Price
                        </p>

                        <p className="text-xl font-bold tracking-tight">
                            ৳{item.price}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="rounded-md px-4 py-2 bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer"
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;