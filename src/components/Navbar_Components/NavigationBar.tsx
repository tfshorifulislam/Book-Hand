"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useSession } from "@/lib/auth-client";

import { AvatarDropdown } from "@/components/shared/Avatar";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";

import SignInButton from "../Auth/SigIn_Button";
import SignUpButton from "../Auth/SignUp_Button";

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
      className="sticky top-0 z-50 w-full border-b border-[#FF9100]/10 bg-background/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-370 items-center px-4 md:px-6 lg:h-17">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-foreground"
        >
          Book<span className="text-[#FF9100]">Hand</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-[#FF9100]/5 hover:text-[#EB7D00]"
            >
              {item.title}
            </Link>
          ))}

          <Link
            href={sellItem.href}
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-[#FF9100]/5 hover:text-[#EB7D00]"
          >
            {sellItem.title}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Theme Toggle */}
          <div className="rounded-lg transition-colors duration-200 hover:bg-[#FF9100]/5">
            <ThemeToggle />
          </div>

          {/* Auth */}
          {user ? (
            <div className="hidden rounded-lg transition-colors duration-200 hover:bg-[#FF9100]/5 sm:block">
              <AvatarDropdown />
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <SignInButton />
              <SignUpButton />
            </div>
          )}

          {/* Mobile Menu */}
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