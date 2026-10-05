"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    BookOpen,
    Heart,
    Home,
    LogIn,
    LogOut,
    Menu,
    PlusCircle,
    Settings,
    UserPlus,
    UserRound,
} from "lucide-react";
import { FaBookOpenReader } from "react-icons/fa6";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
    { title: "Home", href: "/", icon: Home },
    { title: "Browse Books", href: "/books", icon: BookOpen },
    { title: "Wishlist", href: "/wishlist", icon: Heart },
    { title: "Sell a Book", href: "/sell-book", icon: PlusCircle },
];

const account = [
    { title: "My Profile", href: "/profile", icon: UserRound },
    { title: "Settings", href: "/settings", icon: Settings },
];

type User = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
};

export function MobileMenu({ user }: { user?: User | null; }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const close = () => setOpen(false);

    const logout = async () => {
        await authClient.signOut();
        close();
        router.push("/auth/signin");
    };

    const active = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-9 rounded-lg lg:hidden"
                    >
                        <Menu className="size-5" />
                    </Button>
                }
            />

            <SheetContent side="right" className="gap-0 p-0">
                <SheetTitle className="sr-only">BookHand Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    BookHand navigation
                </SheetDescription>

                {/* Header */}
                <div className="flex h-16 items-center border-b px-4">
                    <Link
                        href="/"
                        onClick={close}
                        className="flex items-center gap-2 font-bold"
                    >
                        <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                            <FaBookOpenReader className="size-4" />
                        </span>
                        BookHand
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-4">
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Navigation
                    </p>

                    <div className="space-y-1">
                        {navigation.map(({ title, href, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={close}
                                className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${active(href)
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                            >
                                <Icon className="size-4" />
                                {title}
                            </Link>
                        ))}
                    </div>

                    <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Account
                    </p>

                    <div className="space-y-1">
                        {user ? (
                            <>
                                {account.map(({ title, href, icon: Icon }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={close}
                                        className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${active(href)
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            }`}
                                    >
                                        <Icon className="size-4" />
                                        {title}
                                    </Link>
                                ))}

                                <button
                                    onClick={logout}
                                    className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <LogOut className="size-4" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/signin"
                                    onClick={close}
                                    className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <LogIn className="size-4" />
                                    Sign In
                                </Link>

                                <Link
                                    href="/auth/signup"
                                    onClick={close}
                                    className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <UserPlus className="size-4" />
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Theme</span>
                        <ThemeToggle />
                    </div>

                    {user && (
                        <Link
                            href="/profile"
                            onClick={close}
                            className="mt-4 flex items-center gap-3"
                        >
                            <Avatar className="size-9">
                                <AvatarImage src={user.image || undefined} />
                                <AvatarFallback>
                                    {user.name?.charAt(0).toUpperCase() || "U"}
                                </AvatarFallback>
                            </Avatar>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold">
                                    {user.name || "Account"}
                                </p>
                                <p className="truncate text-xs text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </Link>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}