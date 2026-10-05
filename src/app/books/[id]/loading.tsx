const Loading = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="flex items-center gap-3">
                <span className="text-xl font-bold tracking-tight">
                    Book<span className="text-primary">Hand</span>
                </span>

                <div className="flex items-center gap-1">
                    <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                    <span className="size-1.5 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
                    <span className="size-1.5 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
                </div>
            </div>
        </div>
    );
};

export default Loading;