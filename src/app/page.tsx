import FindRightBookSection from "@/components/Find_Right_Book_Section/FindRightBookSection";
import HeroMain from "@/components/Hero_Section/Hero_Main";
import { HowItWorks } from "@/components/How_It_Works/HowItWorks";

const page = () => {
  return (
    <div>
      <HeroMain />
      <FindRightBookSection/>
      <HowItWorks/>
    </div>
  );
};

export default page;