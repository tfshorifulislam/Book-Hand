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
                let response = await fetch(`${BASE_URL}/api/me`, {
                    method: "GET",
                    credentials: "include",
                    cache: "no-store",
                });

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

                    response = await fetch(`${BASE_URL}/api/me`, {
                        method: "GET",
                        credentials: "include",
                        cache: "no-store",
                    });
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
                        image: data.data.user.image,
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