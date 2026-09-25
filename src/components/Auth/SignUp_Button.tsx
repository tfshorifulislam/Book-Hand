import { Button } from "../ui/button";
import Link from "next/link";
import type { ComponentProps } from "react";

type SignUpButtonProps = { className?: string } & Omit<
    ComponentProps<typeof Link>,
    "href"
>;

const SignUpButton = ({ className, ...props }: SignUpButtonProps) => {
    return (
        <Link href="/auth/signup" {...props} className="block">
            <Button
                variant="default"
                size="default"
                className={[
                    "h-9 cursor-pointer rounded-lg bg-[#FF9100] px-4 text-white hover:bg-[#EB7D00] dark:bg-[#FF9100] dark:text-black dark:hover:bg-[#EB7D00]",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                Sign Up
            </Button>
        </Link>
    );
};

export default SignUpButton;