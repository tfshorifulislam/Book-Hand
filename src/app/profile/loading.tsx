import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-8">
            {/* Profile Header */}
            <div className="rounded-2xl border bg-background p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    {/* Avatar */}
                    <Skeleton className="h-24 w-24 shrink-0 rounded-full" />

                    {/* User Info */}
                    <div className="flex-1 space-y-3">
                        <Skeleton className="h-7 w-48" />
                        <Skeleton className="h-4 w-64" />
                        <Skeleton className="h-4 w-32" />
                    </div>

                    {/* Button */}
                    <Skeleton className="h-10 w-28 rounded-md" />
                </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border p-5 text-center">
                    <Skeleton className="mx-auto h-7 w-12" />
                    <Skeleton className="mx-auto mt-2 h-4 w-20" />
                </div>

                <div className="rounded-xl border p-5 text-center">
                    <Skeleton className="mx-auto h-7 w-12" />
                    <Skeleton className="mx-auto mt-2 h-4 w-20" />
                </div>

                <div className="rounded-xl border p-5 text-center">
                    <Skeleton className="mx-auto h-7 w-12" />
                    <Skeleton className="mx-auto mt-2 h-4 w-20" />
                </div>
            </div>

            {/* Books Section */}
            <div className="mt-8">
                <Skeleton className="h-7 w-36" />

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="overflow-hidden rounded-xl border"
                        >
                            <Skeleton className="h-48 w-full" />

                            <div className="space-y-3 p-4">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-4 w-1/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;