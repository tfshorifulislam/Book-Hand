import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";

import { User } from "../../../Types/user_type";
import { Button } from "@/components/ui/button";

type CoverProfileProps = {
    user: User | null | undefined;
};

const CoverProfile = ({ user }: CoverProfileProps) => {
    return (
        <div className="mx-auto my-5 pt-3">
            <div className="relative w-full">
                <Image
                    width={2000}
                    height={500}
                    src="/bg.jpg"
                    alt="Profile cover"
                    className="aspect-4/1 w-full rounded-lg object-cover md:rounded-xl"
                />

                <div className="absolute bottom-0 left-1/2 z-10 size-20 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-2 border-white bg-white dark:border-black md:size-30 md:border-4">
                    <Image
                        fill
                        src={user?.image || "/profileAvatar.png"}
                        alt="Profile image"
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="mt-14 flex flex-col items-center text-center md:mt-20">
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {user?.name}
                </h1>

                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                    {user?.email}
                </p>

                <Link href="/settings/profile" className="mt-4">
                    <Button
                        variant="outline"
                        className="h-9 cursor-pointer gap-2 rounded-lg"
                    >
                        <Pencil className="size-4" />
                        Edit Profile
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default CoverProfile;