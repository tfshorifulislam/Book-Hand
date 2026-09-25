"use client";

import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deleteAccount } from "@/actions/delete.account";
import { useRouter } from "next/navigation";

const AccountDeleteModal = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        try {
            setIsDeleting(true);

            await deleteAccount();

            router.push("/auth/signin");
        } catch (error) {
            console.error("Account deletion failed:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <div
                    className="w-full rounded-lg border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10 sm:w-auto"
                >
                    Delete account
                </div>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                        <Trash2 className="size-5 text-destructive" />
                    </div>

                    <AlertDialogTitle>
                        Delete your account?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        This action cannot be undone. Your account and
                        associated data will be permanently deleted.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel
                        disabled={isDeleting}
                        className="rounded-lg"
                    >
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="rounded-lg bg-destructive text-white dark:text-black hover:bg-destructive/90"
                    >
                        {isDeleting ? ( <>
                                <Loader2 className="size-4 animate-spin" />
                                Deleting... </>
                        ) : (
                            "Delete account"
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AccountDeleteModal;