"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { authClient } from "@/lib/auth-client";
import { setUser, clearUser } from "@/redux/features/user/userSlice";

export default function AuthSync() {
  const dispatch = useDispatch();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          id: session.user.id,
          name: session.user.name,
          image: session.user.image ?? undefined,
        })
      );
    } else if (!isPending) {
      dispatch(clearUser());
    }
  }, [session, isPending, dispatch]);

  return null;
}