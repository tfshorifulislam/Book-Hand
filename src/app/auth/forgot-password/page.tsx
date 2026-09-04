"use client";

import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (!email) {
            setError("Please enter your email.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                `${BASE_URL}/api/auth/forgot-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data?.message ||
                        "Something went wrong. Please try again."
                );
                return;
            }

            setMessage(
                data?.message ||
                    "If an account exists with this email, a password reset link has been sent."
            );

            setEmail("");
        } catch (error) {
            console.error("Forgot password error:", error);

            setError(
                "Unable to connect to the server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl border p-6 shadow-sm">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold">
                        Forgot Password?
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Enter your email and we&apos;ll send you a
                        password reset link.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter your email"
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
                            ? "Sending..."
                            : "Send Reset Link"}
                    </Button>
                </form>
            </div>
        </div>
    );
}