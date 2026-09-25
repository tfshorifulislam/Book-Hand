import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type Props = {
    id: string;
    title: string;
    coverImage?: string | null;
    condition: string;
    category: string;
};

const BookCardImage = ({
    id,
    title,
    coverImage,
    condition,
    category,
}: Props) => {
    return (
        <Link href={`/books/${id}`} className="block">
            <div className="relative aspect-4/3 overflow-hidden bg-muted/40">
                <Image
                    src={coverImage || "/book.png"}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <div className="absolute left-3 top-3">
                    <Badge
                        className="
                            border border-[#FF9100]/20
                            bg-background/90
                            text-[#EB7D00]
                            backdrop-blur-sm
                        "
                    >
                        {condition}
                    </Badge>
                </div>

                <div className="absolute right-3 top-3">
                    <Badge
                        variant="secondary"
                        className="
                            border border-border/60
                            bg-background/90
                            text-foreground/80
                            backdrop-blur-sm
                        "
                    >
                        {category}
                    </Badge>
                </div>
            </div>
        </Link>
    );
};

export default BookCardImage;