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
        <Link href={`/books/${id}`}>
            <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <Image
                    src={coverImage || "/book.png"}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                />

                <div className="absolute left-3 top-3">
                    <Badge>{condition}</Badge>
                </div>

                <div className="absolute right-3 top-3">
                    <Badge variant="secondary">{category}</Badge>
                </div>
            </div>
        </Link>
    );
};

export default BookCardImage;