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
        <div className="mx-auto max-w-7xl px-4 md:px-6">
            <CoverProfile user={user} />

            {books.length > 0 ? (
                <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {books.map((item) => (
                        <BooksCard
                            key={item.id}
                            item={item}
                            canDelete={true}
                        />
                    ))}
                </div>
            ) : (
                <div className="my-20 flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 text-center">
                    <h2 className="text-xl font-semibold">
                        No books listed yet
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        You haven&apos;t listed any books for sale yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;