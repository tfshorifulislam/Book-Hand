"use client";

import { useState } from "react";
import {
    BookOpen,
    Heart,
    Home,
    LogIn,
    LogOut,
    Menu,
    PlusCircle,
    Search,
    Settings,
    UserPlus,
    UserRound,
    type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBookOpenReader } from "react-icons/fa6";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

export type NavItem = { title: string; href: string };

interface MobileMenuProps {
    items: NavItem[];
    sellItem: NavItem;
    isLoggedIn: boolean;
    user: { name?: string | null; email?: string | null; image?: string | null } | null;
}

const NAV_ICONS: Record<string, LucideIcon> = {
    "/": Home,
    "/books": BookOpen,
    "/wishlist": Heart,
    "/sell-book": PlusCircle,
};

const ACCOUNT_ITEMS = [
    { title: "My Profile", href: "/profile", icon: UserRound },
    { title: "Settings", href: "/settings", icon: Settings },
];

const isLinkActive = (pathname: string, href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {children}
        </p>
    );
}

function NavRow({
    href,
    icon: Icon,
    active,
    iconClassName,
    onClick,
    children,
}: {
    href: string;
    icon: LucideIcon;
    active: boolean;
    iconClassName?: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            aria-current={active ? "page" : undefined}
            className={cn(
                "flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
                active
                    ? "bg-emerald-700/10 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
        >
            <Icon className={cn("size-4 shrink-0", iconClassName)} />
            {children}
        </Link>
    );
}

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

    const handleLogout = async () => {
        close();
        await authClient.signOut();
        router.push("/auth/signin");
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
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    BookHand navigation menu
                </SheetDescription>

                {/* Header */}
                <div className="flex h-16 shrink-0 items-center border-b border-border px-4">
                    <Link
                        href="/"
                        onClick={close}
                        className="flex items-center gap-2.5 text-foreground transition-colors"
                        aria-label="BookHand home"
                    >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black">
                            <FaBookOpenReader className="size-[18px] stroke-[2.2]" />
                        </span>

                        <span className="text-base font-bold tracking-tight">
                            BookHand
                        </span>
                    </Link>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-4 py-5">
                    {isLoggedIn && (
                        <form
                            onSubmit={handleSearch}
                            role="search"
                            aria-label="Search books"
                            className="relative mb-6"
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

                    <SectionLabel>Navigation</SectionLabel>

                    <div className="mt-3 flex flex-col gap-1">
                        {items.map((item) => {
                            const active = isLinkActive(pathname, item.href);
                            const Icon = NAV_ICONS[item.href];

                            return (
                                <NavRow
                                    key={item.href}
                                    href={item.href}
                                    icon={Icon}
                                    active={active}
                                    onClick={close}
                                >
                                    {item.title}
                                </NavRow>
                            );
                        })}

                        <NavRow
                            href={sellItem.href}
                            icon={NAV_ICONS[sellItem.href]}
                            active={isLinkActive(pathname, sellItem.href)}
                            onClick={close}
                            iconClassName="text-emerald-700 dark:text-emerald-400"
                        >
                            {sellItem.title}
                        </NavRow>
                    </div>

                    <div className="mt-8">
                        <SectionLabel>Account</SectionLabel>

                        <div className="mt-3 flex flex-col gap-1">
                            {isLoggedIn ? (
                                <>
                                    {ACCOUNT_ITEMS.map((item) => {
                                        const active = isLinkActive(pathname, item.href);

                                        return (
                                            <NavRow
                                                key={item.href}
                                                href={item.href}
                                                icon={item.icon}
                                                active={active}
                                                onClick={close}
                                            >
                                                {item.title}
                                            </NavRow>
                                        );
                                    })}

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <LogOut className="size-4 shrink-0" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavRow
                                        href="/auth/signin"
                                        icon={LogIn}
                                        active={false}
                                        onClick={close}
                                    >
                                        Sign In
                                    </NavRow>

                                    <NavRow
                                        href="/auth/signup"
                                        icon={UserPlus}
                                        active={false}
                                        onClick={close}
                                    >
                                        Sign Up
                                    </NavRow>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto shrink-0 border-t border-border">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Theme</span>
                            <ThemeToggle />
                        </div>

                        {isLoggedIn && (
                            <div className="mt-4 flex items-center gap-3">
                                <Avatar className="size-9 rounded-full">
                                    <AvatarImage
                                        src={user?.image || undefined}
                                        alt={user?.name || "User"}
                                    />
                                    <AvatarFallback className="text-sm font-semibold">
                                        {user?.name?.trim().charAt(0).toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-foreground">
                                        {user?.name || "Account"}
                                    </p>

                                    {user?.email && (
                                        <p className="truncate text-xs text-muted-foreground">
                                            {user.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}