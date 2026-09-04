"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUser, clearUser } from "@/redux/features/user/userSlice";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function AuthSync() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMe = async () => {
            try {
                // প্রথমে current access token দিয়ে user নেওয়ার চেষ্টা
                let response = await fetch(
                    `${BASE_URL}/api/me`,
                    {
                        credentials: "include",
                    }
                );

                // Access token expired হলে refresh করবো
                if (response.status === 401) {
                    const refreshResponse = await fetch(
                        `${BASE_URL}/api/auth/refresh`,
                        {
                            method: "POST",
                            credentials: "include",
                        }
                    );

                    if (!refreshResponse.ok) {
                        dispatch(clearUser());
                        return;
                    }

                    // নতুন access token cookie পাওয়ার পর
                    // আবার /me call
                    response = await fetch(
                        `${BASE_URL}/api/me`,
                        {
                            credentials: "include",
                        }
                    );
                }

                const data = await response.json();

                if (!response.ok) {
                    dispatch(clearUser());
                    return;
                }

                dispatch(
                    setUser({
                        id: data.data.user.id,
                        name: data.data.user.name,
                    })
                );
            } catch (error) {
                console.error("Auth sync error:", error);
                dispatch(clearUser());
            }
        };

        getMe();
    }, [dispatch]);

    return null;
}