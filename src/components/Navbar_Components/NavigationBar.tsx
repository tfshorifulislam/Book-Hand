"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";

import { AvatarDropdown } from "@/components/shared/Avatar";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";
import SignInButton from "../Auth/SigIn_Button";
import SignUpButton from "../Auth/SignUp_Button";
import { MobileMenu } from "./MobileMenu";

export const navItems = [
  { title: "Home", href: "/" },
  { title: "Browse Books", href: "/books" },
  { title: "Wishlist", href: "/wishlist" },
  { title: "Sell a Book", href: "/sell-book" },
];

export function NavigationBar() {
  const pathname = usePathname();
  const { data } = useSession();
  const user = data?.user;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-370 items-center px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Book<span className="text-primary">Hand</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {navItems.map(({ title, href }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-1.5">
          <ThemeToggle />

          {user ? (
            <div className="hidden sm:block">
              <AvatarDropdown />
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <SignInButton />
              <SignUpButton />
            </div>
          )}

          <MobileMenu user={user} />
        </div>
      </div>
    </motion.header>
  );
}