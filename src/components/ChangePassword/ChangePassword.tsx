"use client";

import { useState } from "react";
import {
    Eye,
    EyeOff,
    KeyRound,
    Loader2,
    Lock,
} from "lucide-react";

import {
    changePassword,
    setPassword,
} from "@/actions/change.password";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
    isGoogleUser: boolean;
};

const ChangePassword = ({ isGoogleUser }: Props) => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const passwordsMatch = newPassword === confirmPassword;

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        if (!passwordsMatch) {
            return;
        }

        try {
            setIsLoading(true);

            if (isGoogleUser) {
                await setPassword({ newPassword, });
            } else {
                await changePassword({ currentPassword, newPassword, });
            }

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error("Password operation failed:", error);
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto my-20 w-full max-w-2xl">
            <div className="mb-8">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-[#FF9100]/10">
                    <KeyRound className="size-5 text-[#EB7D00]" />
                </div>

                <h2 className="text-xl font-semibold">
                    {isGoogleUser
                        ? "Set password"
                        : "Change password"}
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    {isGoogleUser
                        ? "Set a password to sign in with your email."
                        : "Update your password to keep your account secure."}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                {!isGoogleUser && (
                    <div className="space-y-2">
                        <Label htmlFor="currentPassword">
                            Current password
                        </Label>

                        <div className="relative">
                            <Input
                                id="currentPassword"
                                type={
                                    showCurrent
                                        ? "text"
                                        : "password"
                                }
                                value={currentPassword}
                                onChange={(event) =>
                                    setCurrentPassword(
                                        event.target.value
                                    )
                                }
                                placeholder="Enter current password"
                                className="h-11 rounded-lg pr-11"
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowCurrent(
                                        (value) => !value
                                    )
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            >
                                {showCurrent ? (
                                    <EyeOff className="size-4" />
                                ) : (
                                    <Eye className="size-4" />
                                )}
                            </button>
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <Label htmlFor="newPassword">
                        {isGoogleUser
                            ? "Password"
                            : "New password"}
                    </Label>

                    <div className="relative">
                        <Input
                            id="newPassword"
                            type={
                                showNew
                                    ? "text"
                                    : "password"
                            }
                            value={newPassword}
                            onChange={(event) =>
                                setNewPassword(
                                    event.target.value
                                )
                            }
                            placeholder={
                                isGoogleUser
                                    ? "Create a password"
                                    : "Enter new password"
                            }
                            className="h-11 rounded-lg pr-11"
                            required
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowNew(
                                    (value) => !value
                                )
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        >
                            {showNew ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                        Confirm password
                    </Label>

                    <div className="relative">
                        <Input
                            id="confirmPassword"
                            type={
                                showConfirm
                                    ? "text"
                                    : "password"
                            }
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(
                                    event.target.value
                                )
                            }
                            placeholder="Confirm password"
                            className="h-11 rounded-lg pr-11"
                            required
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirm(
                                    (value) => !value
                                )
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        >
                            {showConfirm ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>

                    {confirmPassword &&
                        !passwordsMatch && (
                            <p className="text-sm text-destructive">
                                Passwords do not match.
                            </p>
                        )}
                </div>

                <div className="flex justify-end pt-3">
                    <Button
                        type="submit"
                        disabled={
                            isLoading ||
                            !newPassword ||
                            !confirmPassword ||
                            !passwordsMatch ||
                            (!isGoogleUser &&
                                !currentPassword)
                        }
                        className="h-10 rounded-lg bg-[#FF9100] px-5 text-white hover:bg-[#EB7D00] dark:text-black"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                {isGoogleUser
                                    ? "Setting..."
                                    : "Updating..."}
                            </>
                        ) : (
                            <>
                                <Lock className="size-4" />
                                {isGoogleUser
                                    ? "Set password"
                                    : "Change password"}
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;