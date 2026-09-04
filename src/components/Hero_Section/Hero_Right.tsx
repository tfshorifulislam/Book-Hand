import Image from 'next/image';

const HeroRight = () => {
    return (
        <div>
            <Image
                src="/book.png"
                width={650}
                height={650}
                alt='book'
            />
        </div>
    );
};

export default HeroRight;