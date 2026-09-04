"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";

export default function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (!token) {
            setError("Invalid or missing reset token.");
            return;
        }

        if (newPassword.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const { error } = await authClient.resetPassword({
                newPassword,
                token,
            });

            if (error) {
                setError(
                    error.message || "Failed to reset password."
                );
                return;
            }

            setMessage("Password has been reset successfully.");

            setNewPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                router.push("/auth/signin");
            }, 2000);
        } catch (error) {
            console.error("Reset password error:", error);

            setError(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl border p-6 shadow-sm">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">
                        Reset Password
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Enter your new password below.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <label
                            htmlFor="newPassword"
                            className="text-sm font-medium"
                        >
                            New Password
                        </label>

                        <input
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                            placeholder="Enter new password"
                            className="w-full rounded-md border px-3 py-2 outline-none"
                            disabled={loading}
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="confirmPassword"
                            className="text-sm font-medium"
                        >
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            placeholder="Confirm new password"
                            className="w-full rounded-md border px-3 py-2 outline-none"
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    {message && (
                        <p className="text-sm text-green-600">
                            {message}
                        </p>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer bg-emerald-700 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-black dark:hover:bg-emerald-400"
                    >
                        {loading
                            ? "Resetting..."
                            : "Reset Password"}
                    </Button>
                </form>
            </div>
        </div>
    );
}