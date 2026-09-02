"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import AuthSync from "@/app/auth/AuthSync";


export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthSync />
      {children}
    </Provider>
  );
}