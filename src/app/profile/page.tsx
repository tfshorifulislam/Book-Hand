import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProfilePage = async () => {

    const userInfo = await auth.api.getSession({
        headers: await headers()
    });

    const user = userInfo?.user;

    return (
        <div>

        </div>
    );
};

export default ProfilePage;