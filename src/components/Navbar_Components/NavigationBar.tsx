"use client"

import { useSelector } from "react-redux"
import { motion } from "motion/react";

import { RootState } from "@/redux/store"
import SignInButton from "../Auth/SigIn_Button"
import SignUpButton from "../Auth/SignUp_Button"

import { Logo } from "./Logo"
import { DesktopSearch } from "./DesktopSearch"
import { NavigationActions } from "./NavigationActions"

export function NavigationBar() {

    const user = useSelector((state: RootState) => state.user.user)


    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 pt-3 md:px-6">
                    <div className="relative flex h-14 items-center justify-between rounded-lg border bg-background/95 px-3">


                        <Logo />


                        {user && <DesktopSearch />}



                        {user ? (
                            <NavigationActions isLoggedIn={true} />
                        ) : (
                            <div className="flex gap-2">
                                <SignInButton />
                                <SignUpButton />
                            </div>
                        )}

                    </div>
                </div>
            </header>
        </motion.div>
    )
}