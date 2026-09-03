"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUser, clearUser } from "@/redux/features/user/userSlice";

export default function AuthSync() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMe = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/me`,
                    {
                        credentials: "include",
                    }
                );


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