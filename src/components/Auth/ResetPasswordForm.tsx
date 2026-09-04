"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
            setError(
                "Password must be at least 8 characters long."
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                `${BASE_URL}/api/auth/reset-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                        newPassword,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data?.message ||
                        "Failed to reset password."
                );
                return;
            }

            setMessage(
                data?.message ||
                    "Password has been reset successfully."
            );

            setNewPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                router.push("/auth/signin");
            }, 2000);
        } catch (error) {
            console.error(
                "Reset password error:",
                error
            );

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
                                setNewPassword(
                                    e.target.value
                                )
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
                                setConfirmPassword(
                                    e.target.value
                                )
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
                        className="bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer w-full"
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