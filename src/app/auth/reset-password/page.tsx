import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import { Suspense } from "react";

export default function ResetPasswordPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center">
                    Loading...
                </div>
            }
        >
            <ResetPasswordForm />
        </Suspense>
    );
}