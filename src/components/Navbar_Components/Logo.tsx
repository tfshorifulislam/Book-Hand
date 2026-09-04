import Link from "next/link"

export function Logo() {
    return (
        <Link
            href="/"
            className="group flex items-center gap-2"
        >
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-700 text-sm font-bold text-white transition-all group-hover:scale-105 dark:bg-emerald-500 dark:text-black">
                B
            </div>

            <span className="hidden text-base font-bold tracking-tight sm:block">
                BookHand
            </span>
        </Link>
    )
}