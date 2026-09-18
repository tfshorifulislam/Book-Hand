import Link from "next/link";
import { FaBookOpenReader } from "react-icons/fa6";

export function Logo() {
    return (
        <Link
            href="/"
            className="group flex items-center gap-2.5 outline-none"
            aria-label="BookHand home"
        >
            <div
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:shadow-md dark:bg-emerald-500 dark:text-black">

                <FaBookOpenReader className="size-4.25 stroke-[2.2]" />
                
            </div>

            <div className="hidden sm:block">
                <span className="text-[15px] font-bold tracking-tight">
                    BookHand
                </span>
            </div>
        </Link>
    );
}