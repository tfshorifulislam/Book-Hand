import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";

const HeroMain = () => {
    return (
        <div className="flex justify-between mx-auto max-w-7xl px-4 pt-3 md:px-6">
            <HeroLeft />
            <HeroRight />
        </div>
    );
};

export default HeroMain;