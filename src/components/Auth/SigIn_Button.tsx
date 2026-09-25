import { Button } from "../ui/button";
import Link from "next/link";
import type { ComponentProps } from "react";

type SignInButtonProps = { className?: string } & Omit<
    ComponentProps<typeof Link>,
    "href"
>;

const SignInButton = ({ className, ...props }: SignInButtonProps) => {
    return (
        <Link href="/auth/signin" {...props} className="block">
            <Button
                variant="outline"
                size="default"
                className={["h-9 cursor-pointer rounded-lg px-4", className]
                    .filter(Boolean)
                    .join(" ")}
            >
                Sign In
            </Button>
        </Link>
    );
};

export default SignInButton;