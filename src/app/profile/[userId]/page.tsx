import { getUserBooks } from "@/actions/user.Post.get";
import { userProfile } from "@/actions/userId.Profile";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";

type Props = {
    params: Promise<{
        userId: string;
    }>;
};

const UserIdProfilePage = async ({ params }: Props) => {
    const { userId } = await params;

    const [userInfo, booksData] = await Promise.all([
        userProfile(userId),
        getUserBooks(userId),
    ]);

    const user = userInfo?.user;
    const books = booksData?.listings ?? [];

    return (
        <div className="mx-auto max-w-7xl">
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

export default UserIdProfilePage;