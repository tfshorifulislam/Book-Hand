
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
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="sticky top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between rounded-lg border bg-background/95 px-3 shadow-sm">

            <Logo />

            {user && <DesktopSearch />}

            {user ? (
              <NavigationActions isLoggedIn={true} />
            ) : (
              <div className="flex items-center gap-2">
                <SignInButton />
                <SignUpButton />
              </div>
            )}
          </div>
        </div>
      </header>
    </motion.div>
  );
}