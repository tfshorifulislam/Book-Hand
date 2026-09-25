import Link from "next/link";
import { FaBookOpenReader } from "react-icons/fa6";

export function Logo() {
    return (
        <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-lg text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="BookHand home"
        >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#FF9100] text-white transition-colors duration-150 group-hover:bg-[#EB7D00] dark:bg-[#FF9100] dark:text-black dark:group-hover:bg-[#EB7D00]">
                <FaBookOpenReader className="size-[18px] stroke-[2.2]" />
            </span>

            <span className="hidden text-base font-bold tracking-tight sm:block">
                BookHand
            </span>
        </Link>
    );
}