"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "../ui/sidebar"
import { ThemeToggle } from "../theme-provider/ThemeToggle"
import { AvatarDropdown } from "./Avatar"

export function NavigationBar() {
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 pt-3 md:px-6">

                <div className="relative flex h-14 items-center justify-between rounded-2xl border bg-background/95 px-3 shadow-sm">

                    {/* Left */}
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

                    {/* Desktop Search */}
                    <div className="absolute left-1/2 hidden w-full max-w-sm -translate-x-1/2 md:block lg:max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                type="search"
                                placeholder="Search books, authors..."
                                className="h-9 rounded-xl border-muted bg-muted/40 pl-9 pr-4 text-sm shadow-none transition-all focus-visible:bg-background focus-visible:ring-1"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3">

                        {/* Mobile Search Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-9 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
                            onClick={() => setShowMobileSearch(!showMobileSearch)}
                            aria-label="Search"
                        >
                            {showMobileSearch ? (
                                <X className="size-4" />
                            ) : (
                                <Search className="size-4" />
                            )}
                        </Button>

                        {/* Theme */}
                        <ThemeToggle />

                        {/* Profile */}
                        <div
                            className="hidden size-9 rounded-xl bg-background transition-all hover:bg-muted md:flex"
                            aria-label="Profile"
                        >
                            <AvatarDropdown />

                        </div>

                        {/* Mobile Sidebar */}
                        <div className="relative flex size-9 items-center justify-center rounded-xl border bg-background transition-colors hover:bg-muted md:hidden">
                            <SidebarTrigger />
                        </div>

                    </div>

                    {/* Mobile Search Bar */}
                    {showMobileSearch && (
                        <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border bg-background/95 p-3 shadow-lg backdrop-blur-xl md:hidden">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    autoFocus
                                    type="search"
                                    placeholder="Search books, authors..."
                                    className="h-10 rounded-xl bg-muted/40 pl-9 pr-4 shadow-none focus-visible:bg-background"
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </header>
    )
}