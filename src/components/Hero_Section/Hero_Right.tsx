import Image from "next/image";

const HeroRight = () => {
    return (
        <div className="relative flex w-full items-center justify-center md:justify-end">
            <Image
                src="/book.png"
                width={700}
                height={700}
                alt="Books"
                priority
                className="h-auto w-70 sm:w-90 md:w-105 lg:w-130 xl:w-150" />
        </div>
    );
};

export default HeroRight;