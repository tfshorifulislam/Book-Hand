import { getUserBooks } from "@/actions/user.Post.get";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user) {
        return null;
    }

    const booksData = await getUserBooks(user.id);
    const books = booksData?.listings ?? [];

    return (
        <div className="mx-auto max-w-7xl ">
            <CoverProfile user={user} />

            <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.map((item) => (
                    <BooksCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;