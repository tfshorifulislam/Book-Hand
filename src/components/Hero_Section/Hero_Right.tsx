import Image from "next/image";

const HeroRight = () => {
  return (
    <div className="relative flex w-full items-center justify-center lg:justify-end">
      <Image
        src="/book.png"
        width={700}
        height={700}
        alt="Books"
        priority
        className="h-auto w-64 sm:w-80 md:w-96 lg:w-120 xl:w-140"
      />
    </div>
  );
};

export default HeroRight;