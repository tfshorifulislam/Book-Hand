"use client"

import Link from "next/link"
import { Search, User } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "../ui/sidebar"
import { ThemeToggle } from "../theme-provider/ThemeToggle"

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Explore",
        href: "/explore",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

export function NavigationBar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 pt-3 md:px-6">

                <div className="relative flex h-14 items-center justify-between rounded-2xl border bg-background/95 px-3 shadow-sm">

                    <div className="flex items-center gap-2">


                        <SidebarTrigger
                            className="hidden size-9 rounded-xl text-muted-foreground transition-all hover:bg-muted hover:text-foreground md:flex"
                        />

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
                    </div>


                    <NavigationMenu className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
                        <NavigationMenuList className="gap-0.5 rounded-xl p-1">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink
                                        render={<Link href={item.href} />}
                                        className={`${navigationMenuTriggerStyle()} h-9 rounded-lg px-4 text-sm font-medium text-muted-foreground transition-all hover:bg-background hover:text-foreground`}
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>


                    <div className="flex items-center gap-1.5">

                        {/* Search */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-9 rounded-xl text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                            aria-label="Search"
                        >
                            <Search className="size-4.25" />
                        </Button>

                        <ThemeToggle />

                        {/* Profile */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-9 rounded-xl bg-background transition-all hover:bg-muted hidden md:flex"
                            aria-label="Profile"
                        >
                            <User className="size-4.25" />
                        </Button>

                        {/* Mobile Sidebar Trigger */}
                        <SidebarTrigger
                            className="flex size-9 rounded-xl text-muted-foreground transition-all hover:bg-muted hover:text-foreground md:hidden"
                        />

                    </div>
                </div>
            </div>
        </header>
    )
}