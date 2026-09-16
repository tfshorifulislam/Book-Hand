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
                className="
                    h-auto
                    w-[280px]
                    sm:w-[360px]
                    md:w-[420px]
                    lg:w-[520px]
                    xl:w-[600px]
                "
            />
        </div>
    );
};

export default HeroRight;