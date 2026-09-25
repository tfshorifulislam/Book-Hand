"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AvatarDropdown } from "@/components/shared/Avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";
import { cn } from "@/lib/utils";
import { useSession } from "@/lib/auth-client";
import SignInButton from "../Auth/SigIn_Button";
import SignUpButton from "../Auth/SignUp_Button";

import { DesktopSearch } from "./DesktopSearch";
import { Logo } from "./Logo";
import { MobileMenu, type NavItem } from "./MobileMenu";

const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "Browse Books", href: "/books" },
    { title: "Wishlist", href: "/wishlist" },
];

const sellItem: NavItem = { title: "Sell a Book", href: "/sell-book" };

const isLinkActive = (pathname: string, href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

export function NavigationBar() {
    const { data } = useSession();
    const user = data?.user;
    const pathname = usePathname();

    return (
        <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
                <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:grid lg:h-[68px] lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:px-8">
                    <Logo />

                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {navItems.map((item) => {
                            const active = isLinkActive(pathname, item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={cn(
                                        "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
                                        active
                                            ? "bg-emerald-700/8 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}

                        <Link href={sellItem.href} className="ml-1">
                            <Button
                                size="default"
                                className="h-9 cursor-pointer rounded-lg bg-emerald-700 px-4 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                            >
                                {sellItem.title}
                            </Button>
                        </Link>
                    </nav>

                    <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                        {user && <DesktopSearch />}

                        <ThemeToggle />

                        {user ? (
                            <div className="hidden lg:block">
                                <AvatarDropdown />
                            </div>
                        ) : (
                            <div className="hidden items-center gap-2 sm:flex">
                                <SignInButton />
                                <SignUpButton />
                            </div>
                        )}

                        <MobileMenu
                            isLoggedIn={Boolean(user)}
                            user={user ?? null}
                            items={navItems}
                            sellItem={sellItem}
                        />
                    </div>
                </div>
            </header>
        </motion.div>
    );
}