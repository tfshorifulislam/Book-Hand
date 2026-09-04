"use client"

import Link from "next/link"
import { useSelector } from "react-redux"

import { RootState } from "@/redux/store"
import SignInButton from "../Auth/SigIn_Button"
import SignUpButton from "../Auth/SignUp_Button"

import { Logo } from "./Logo"
import { DesktopSearch } from "./DesktopSearch"
import { NavigationActions } from "./NavigationActions"

export function NavigationBar() {
    const user = useSelector(
        (state: RootState) => state.user.user
    )

    return (
        <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 pt-3 md:px-6">
                <div className="relative flex h-14 items-center justify-between rounded-lg border bg-background/95 px-3">

                    {/* Logo */}
                    <Logo />

                    {/* Desktop Search */}
                    {user && <DesktopSearch />}

                    {/* Right Actions */}
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
    )
}