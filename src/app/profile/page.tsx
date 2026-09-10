import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const ProfilePage = async () => {

    const userInfo = await auth.api.getSession({
        headers: await headers()
    });

    const user = userInfo?.user;

    return (
        <div className="mx-auto my-5 max-w-7xl px-4 pt-3 md:px-6">
           
            <div className="relative w-full">
                <Image
                    width={2000}
                    height={500}
                    src="/cover.png"
                    alt="Profile cover"
                    className="aspect-4/1 w-full rounded-lg object-cover md:rounded-xl"
                />

                <div className="absolute bottom-0 left-1/2 z-50 size-20 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-2 border-background bg-background md:size-30 md:border-4">
                    <Image
                        fill
                        alt="Profile image"
                        src={user?.image || "/profileAvatar.png"}
                        className="object-cover"
                    />
                </div>
            </div>
          

            <div className="mt-14 flex flex-col items-center justify-center text-center md:mt-20">
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {user?.name}
                </h1>

                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                    {user?.email}
                </p>
            </div>


        </div>
    );
};

export default ProfilePage;