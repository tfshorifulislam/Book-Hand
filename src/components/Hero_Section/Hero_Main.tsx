import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";

const HeroMain = () => {
  return (
    <section className="w-full">
      <div
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 md:gap-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20 " >
        
        <div className="order-1">
          <HeroLeft />
        </div>

      
        <div className="order-2 w-full">
          <HeroRight />
        </div>
        
      </div>
    </section>
  );
};

export default HeroMain;

