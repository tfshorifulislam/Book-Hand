"use client";

import { motion } from "motion/react";
import { useSession } from "@/lib/auth-client";

import { AvatarDropdown } from "@/components/shared/Avatar";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";

import SignInButton from "../Auth/SigIn_Button";
import SignUpButton from "../Auth/SignUp_Button";

import { DesktopSearch } from "./DesktopSearch";
import { MobileMenu, type NavItem } from "./MobileMenu";

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Browse Books", href: "/books" },
  { title: "Wishlist", href: "/wishlist" },
];

const sellItem: NavItem = {
  title: "Sell a Book",
  href: "/sell-book",
};

export function NavigationBar() {
  const { data } = useSession();
  const user = data?.user;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-background/90 backdrop-blur-xl dark:border-[#FF9100]/10"
    >
      <div className="mx-auto flex h-16 max-w-370 items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-17 lg:px-8">
        <div className="min-w-0 flex-1">
          <DesktopSearch />
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="rounded-lg transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950/40">
            <ThemeToggle />
          </div>

          {user ? (
            <div className="hidden rounded-lg transition-colors hover:bg-emerald-50 sm:block dark:hover:bg-emerald-950/40">
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
    </motion.header>
  );
}