import { getUserBooks } from "@/actions/user.Post.get";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


type Props = {
    params: Promise<{
        userId: string
    }>
}


const ProfilePage = async ({ params }: Props) => {

    const userInfo = await auth.api.getSession({
        headers: await headers()
    });

    const { userId } = await params;

    const item = await getUserBooks(userId);
    const user = userInfo?.user;

    return (
        <div className="mx-auto">
            <CoverProfile
                user={user}
            />

            <BooksCard
                item={item} />
        </div>
    );
};

export default ProfilePage;