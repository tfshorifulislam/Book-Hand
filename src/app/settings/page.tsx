
import React from "react";
import {
    // Bell,
    Lock,
    User,
    // ShieldCheck,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AccountDeleteModal from "@/components/Account.Delete.Modal/AccountDeleteModal";

const settingsItems = [
    {
        icon: User,
        title: "Profile",
        description: "Manage your name, profile photo, and personal information.",
        href: "/settings/profile",
    },
    {
        icon: Lock,
        title: "Password & Security",
        description: "Update your password and manage your account security.",
        href: "/settings/security",
    },
    // {
    //     icon: Bell,
    //     title: "Notifications",
    //     description: "Choose how you want to receive notifications from BookHand.",
    //     href: "/settings/notifications",
    // },
    // {
    //     icon: ShieldCheck,
    //     title: "Privacy",
    //     description: "Control your profile visibility and privacy preferences.",
    //     href: "/settings/privacy",
    // },
];

const SettingsPage = () => {
    return (
        <main className="min-h-screen mx-auto">
            <div className="mx-auto w-full max-w-370 px-4 py-8 sm:px-6 lg:px-8">
               
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Settings
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Manage your BookHand account and preferences.
                    </p>
                </div>

        
                <div className="overflow-hidden rounded-2xl border bg-background">
                    {settingsItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-muted/50 sm:px-6 ${
                                    index !== settingsItems.length - 1
                                        ? "border-b"
                                        : ""
                                }`}
                            >
                        
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/40 transition-colors group-hover:border-[#FF9100]/30 group-hover:bg-[#FF9100]/10">
                                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-[#EB7D00]" />
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">
                                    <h2 className="text-sm font-medium sm:text-base">
                                        {item.title}
                                    </h2>

                                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>

                            
                                <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                            </Link>
                        );
                    })}
                </div>

               
                <div className="mt-8">
                    <h2 className="mb-3 px-1 text-sm font-medium text-muted-foreground">
                        Account
                    </h2>

                    <div className="rounded-2xl border bg-background p-5 sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-sm font-medium sm:text-base">
                                    Delete account
                                </h3>

                                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                                    Permanently delete your BookHand account
                                    and all associated data.
                                </p>
                            </div>

                            <AccountDeleteModal />
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SettingsPage;
