"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import SignInButton from "../Auth/SigIn_Button";
import SignUpButton from "../Auth/SignUp_Button";
import { AvatarDropdown } from "@/components/shared/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type NavItem = { title: string; href: string };

interface MobileMenuProps {
    items: NavItem[];
    sellItem: NavItem;
    isLoggedIn: boolean;
    user: { name?: string | null; email?: string | null } | null;
}

const isLinkActive = (pathname: string, href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

export function MobileMenu({ items, sellItem, isLoggedIn, user }: MobileMenuProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const close = () => setOpen(false);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = query.trim();
        router.push(value ? `/books?search=${encodeURIComponent(value)}` : "/books");
        close();
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-9 cursor-pointer rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
                    >
                        <Menu className="size-5" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                }
            />

            <SheetContent side="right" className="gap-0 p-0">
                <SheetHeader className="sr-only">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>BookHand navigation menu</SheetDescription>
                </SheetHeader>

                <div className="flex flex-col p-4">
                    {isLoggedIn && (
                        <form
                            onSubmit={handleSearch}
                            role="search"
                            aria-label="Search books"
                            className="relative mb-3"
                        >
                            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search books, authors..."
                                aria-label="Search books"
                                className="h-10 rounded-lg bg-muted/40 pl-9 pr-4 text-sm shadow-none focus-visible:bg-background"
                            />
                        </form>
                    )}

                    <nav
                        aria-label="Mobile"
                        className="flex flex-col gap-1"
                    >
                        {items.map((item) => {
                            const active = isLinkActive(pathname, item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={close}
                                    aria-current={active ? "page" : undefined}
                                    className={cn(
                                        "flex h-11 items-center rounded-lg px-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
                                        active
                                            ? "bg-emerald-700/8 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}

                        <Link
                            href={sellItem.href}
                            onClick={close}
                            className="mt-2"
                        >
                            <Button className="h-11 w-full cursor-pointer rounded-lg bg-emerald-700 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400">
                                <span className="font-medium">{sellItem.title}</span>
                            </Button>
                        </Link>
                    </nav>
                </div>

                <div className="mt-auto">
                    <Separator />

                    {isLoggedIn ? (
                        <div className="flex items-center gap-3 p-4">
                            <AvatarDropdown />

                            <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-foreground">
                                    {user?.name || "Account"}
                                </p>

                                {user?.email && (
                                    <p className="truncate text-xs text-muted-foreground">
                                        {user.email}
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-2 p-4">
                            <SheetClose
                                render={
                                    <SignInButton className="w-full" />
                                }
                            />

                            <SheetClose
                                render={
                                    <SignUpButton className="w-full" />
                                }
                            />
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}