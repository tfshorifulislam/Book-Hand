"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "@/redux/features/user/userSlice";
import { authClient } from "@/lib/auth-client";

export default function AuthSync() {
  const dispatch = useDispatch();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;

    if (session?.user) {
      dispatch(
        setUser({
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        })
      );
    } else {
      dispatch(clearUser());
    }
  }, [session, isPending, dispatch]);

  return null;
}