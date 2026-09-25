const Loading = () => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="flex items-center gap-3">
                <span className="text-lg font-bold tracking-tight">
                    Book<span className="text-[#FF9100]">Hand</span>
                </span>

                <div className="flex items-center gap-1">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#FF9100]" />
                    <span className="size-1.5 animate-pulse rounded-full bg-[#FF9100] [animation-delay:150ms]" />
                    <span className="size-1.5 animate-pulse rounded-full bg-[#FF9100] [animation-delay:300ms]" />
                </div>
            </div>
        </div>
    );
};

export default Loading;