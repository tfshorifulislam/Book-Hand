import CoverProfile from "@/components/Profile_Components/Cover_Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProfilePage = async () => {

    const userInfo = await auth.api.getSession({
        headers: await headers()
    });

    const user = userInfo?.user;

    return (
        <div className="mx-auto">
            <CoverProfile
                user={user}
            />
        </div>
    );
};

export default ProfilePage;