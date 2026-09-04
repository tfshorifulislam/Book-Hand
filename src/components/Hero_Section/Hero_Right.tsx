import Image from 'next/image';

const HeroRight = () => {
    return (
        <div>
            <Image
                src="/book.png"
                width={700}
                height={700}
                alt='book'
            />
        </div>
    );
};

export default HeroRight;