import Image from "next/image";

const HeroRight = () => {
  return (
    <div className="relative flex w-full items-center justify-center lg:justify-end">
      <Image
        src="/book2.1.png"
        width={500}
        height={500}
        alt="Books"
        priority
        className="h-auto"
      />
    </div>
  );
};

export default HeroRight;