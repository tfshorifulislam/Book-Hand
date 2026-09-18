
"use client";

import { motion } from "motion/react";

import SignInButton from "../Auth/SigIn_Button";
import SignUpButton from "../Auth/SignUp_Button";

import { Logo } from "./Logo";
import { DesktopSearch } from "./DesktopSearch";
import { NavigationActions } from "./NavigationActions";
import { useSession } from "@/lib/auth-client";

export function NavigationBar() {
  const { data } = useSession();
  const user = data?.user;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-4 md:px-6">
        <div className="relative flex h-14 items-center rounded-xl border border-border/70 bg-background/90 px-2.5 shadow-sm backdrop-blur-xl sm:px-3">
          
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Search */}
          {user && (
            <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
              <DesktopSearch />
            </div>
          )}

          {/* Right Actions */}
          <div className="ml-auto">
            {user ? (
              <NavigationActions isLoggedIn />
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <SignInButton />
                <SignUpButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}