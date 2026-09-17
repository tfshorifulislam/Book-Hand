import { getWishlist } from "@/actions/get.Wishlist";
import WishlistPage from "@/components/WishList/Wishlist.page";

const Page = async () => {
    const wishlistData = await getWishlist();

    return (
        <WishlistPage
            initialWishlist={wishlistData.data}
        />
    );
};

export default Page;