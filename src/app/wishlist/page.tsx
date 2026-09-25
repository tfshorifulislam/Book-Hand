import { getWishlist } from "@/actions/get.Wishlist";
import WishlistPage from "@/components/WishList/Wishlist.page";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
    const wishlistData = await getWishlist();

    const userId = await auth.api.getSession({
        headers: await headers()
    });

    return (
        <WishlistPage
            initialWishlist={wishlistData.data}
            userId={userId}
        />
    );
};

export default Page;