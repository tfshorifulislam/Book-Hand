import { userProfile } from "@/actions/userId.Profile";
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
    console.log(user);

    return (
        <div className="mx-auto">
          <CoverProfile
                user={user}
            />
        </div>
    );
};

export default UsserIdProfilePage;