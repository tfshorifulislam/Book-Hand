"use client"

import { useSelector } from "react-redux"
import { motion } from "motion/react"

import { RootState } from "@/redux/store"
import SignInButton from "../Auth/SigIn_Button"
import SignUpButton from "../Auth/SignUp_Button"

import { Logo } from "./Logo"
import { DesktopSearch } from "./DesktopSearch"
import { NavigationActions } from "./NavigationActions"

export function NavigationBar() {
    const { user, pending } = useSelector((state: RootState) => state.user)

    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <header className="sticky top-0 left-0 right-0 z-50 w-full bg-background/70 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 pt-3 md:px-6">
                    <div className="relative flex h-14 items-center justify-between rounded-lg border bg-background/95 px-3">

                        <Logo />

                       {pending ? (
    <div className="flex items-center gap-3">
        <div className="hidden h-9 w-48 animate-pulse rounded-md bg-muted md:block" />

        <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
        <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
    </div>
) : user ? (
    <>
        <DesktopSearch />
        <NavigationActions isLoggedIn={true} />
    </>
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
