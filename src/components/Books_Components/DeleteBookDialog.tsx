"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    deleting: boolean;
    onConfirm: () => void;
};

const DeleteBookDialog = ({
    open,
    onOpenChange,
    title,
    deleting,
    onConfirm,
}: Props) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Delete this listing?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        Are you sure you want to delete{" "}
                        <span className="font-medium text-foreground">
                            &quot;{title}&quot;
                        </span>
                        ? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={deleting}>
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={onConfirm}
                        disabled={deleting}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                        {deleting ? "Deleting..." : "Delete"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteBookDialog;
