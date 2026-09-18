"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "../ui/sidebar"
import { ThemeToggle } from "../theme-provider/ThemeToggle"
import { AvatarDropdown } from "../shared/Avatar"


interface NavigationActionsProps { isLoggedIn: boolean }

export function NavigationActions({ isLoggedIn, }: NavigationActionsProps) {
    
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    if (!isLoggedIn) {
        return null
    }

    return (
        <>
            <div className="flex items-center gap-3">
                {/* Mobile Search */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="size-9 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
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
        </>
    )
}