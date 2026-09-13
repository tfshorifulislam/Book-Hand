import { getUserBooks } from "@/actions/user.Post.get";
import { userProfile } from "@/actions/userId.Profile";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";

type Props = {
    params: Promise<{
        userId: string
    }>
}
const UsserIdProfilePage = async ({ params }: Props) => {

    const { userId } = await params;
    const userInfo = await userProfile(userId);
    const user = userInfo?.user;

    const item = await getUserBooks(userId);

    return (
        <div className="mx-auto">
            <CoverProfile
                user={user}
            />

            <BooksCard
                item={item}
            />
        </div>
    );
};

export default UsserIdProfilePage;