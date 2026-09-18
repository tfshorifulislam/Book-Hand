"use client";

import { useState } from "react";
import { Search, X, Plus, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "../ui/sidebar";
import { ThemeToggle } from "../theme-provider/ThemeToggle";
import { AvatarDropdown } from "../shared/Avatar";

interface NavigationActionsProps {
  isLoggedIn: boolean;
}

export function NavigationActions({
  isLoggedIn,
}: NavigationActionsProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Desktop Sell Button */}
        <Button
          asChild
          size="sm"
          className="
            hidden
            h-9
            rounded-lg
            bg-emerald-700
            px-3.5
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition-all
            hover:bg-emerald-800
            hover:shadow-md
            dark:bg-emerald-500
            dark:text-black
            dark:hover:bg-emerald-400
            sm:inline-flex
          "
        >
          <a href="/sell-book">
            <Plus className="mr-1.5 size-3.5" />
            Sell a Book
          </a>
        </Button>

        {/* Mobile Search */}
        <Button
          variant="ghost"
          size="icon"
          className="
            size-9
            rounded-lg
            text-muted-foreground
            hover:bg-muted
            hover:text-foreground
            lg:hidden
          "
          onClick={() => setShowMobileSearch((prev) => !prev)}
          aria-label={
            showMobileSearch ? "Close search" : "Search books"
          }
        >
          {showMobileSearch ? (
            <X className="size-[17px]" />
          ) : (
            <Search className="size-[17px]" />
          )}
        </Button>

        {/* Theme */}
        <div className="flex size-9 items-center justify-center">
          <ThemeToggle />
        </div>

        {/* Desktop Avatar */}
        <div
          className="
            hidden
            size-9
            items-center
            justify-center
            rounded-lg
            border
            border-transparent
            transition-colors
            hover:border-border
            hover:bg-muted
            md:flex
          "
        >
          <AvatarDropdown />
        </div>

        {/* Mobile Sidebar */}
        <div
          className="
            flex size-9
            items-center
            justify-center
            rounded-lg
            border
            bg-background
            transition-colors
            hover:bg-muted
            md:hidden
          "
        >
          <SidebarTrigger>
            <Menu className="size-[17px]" />
          </SidebarTrigger>
        </div>
      </div>

      {/* Mobile Search */}
      {showMobileSearch && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[calc(100%+8px)]
            mx-1
            rounded-xl
            border
            border-border/70
            bg-background/95
            p-2.5
            shadow-lg
            backdrop-blur-xl
            lg:hidden
          "
        >
          <form
            action="/books"
            className="relative"
          >
            <Search
              className="
                absolute
                left-3
                top-1/2
                size-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <Input
              autoFocus
              type="search"
              name="search"
              placeholder="Search books, authors..."
              className="
                h-10
                rounded-lg
                border-border/60
                bg-muted/40
                pl-9
                pr-3
                shadow-none
                focus-visible:bg-background
                focus-visible:ring-2
                focus-visible:ring-emerald-500/10
              "
            />
          </form>
        </div>
      )}
    </>
  );
}