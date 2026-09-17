import { getWishlist } from "@/actions/get.Wishlist";
import BooksCard from "@/components/Books_Components/BooksCard";

const WishlistPage = async () => {
    const wishlistData = await getWishlist();

    const wishlist = wishlistData.data;

    return (
        <main className="container mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    My Wishlist
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Books you have saved for later.
                </p>
            </div>

            {wishlist.length === 0 ? (
                <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-dashed">
                    <p className="text-muted-foreground">
                        You haven't saved any books yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {wishlist.map((item) => (
                        <BooksCard
                            key={item.id}
                            item={item.listing}
                        />
                    ))}
                </div>
            )}
        </main>
    );
};

export default WishlistPage;