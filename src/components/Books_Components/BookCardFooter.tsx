import Link from "next/link";
import { ArrowUpRight, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    id: string;
    price: number | string;
    canDelete: boolean;
    deleting: boolean;
    onDelete: () => void;
};

const BookCardFooter = ({
    id,
    price,
    canDelete,
    deleting,
    onDelete,
}: Props) => {
    return (
        <div className="flex items-end justify-between gap-3 border-t border-border/50 pt-4">

            {/* Price */}
            <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    Price
                </p>

                <p className="mt-0.5 text-xl font-bold tracking-tight">
                    ৳{price}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">

                {canDelete && (
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={onDelete}
                        disabled={deleting}
                        className="
                            size-9
                            border-border
                            text-destructive
                            hover:border-destructive/30
                            hover:bg-destructive/10
                            hover:text-destructive
                        "
                    >
                        <Trash2 className="size-4" />
                    </Button>
                )}

                <Button
                    size="sm"
                    nativeButton={false}
                    render={
                        <Link href={`/books/${id}`} />
                    }
                    className="
                        h-9
                        gap-1.5
                        rounded-lg
                        bg-emerald-600
                        px-3.5
                        text-white
                        shadow-sm
                        transition-all
                        hover:bg-emerald-700
                        hover:shadow-md
                        dark:bg-emerald-500
                        dark:text-black
                        dark:hover:bg-emerald-400
                    "
                >
                    Details
                    <ArrowUpRight className="size-3.5" />
                </Button>
            </div>
        </div>
    );
};

export default BookCardFooter;