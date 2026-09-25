import FindRightBookSection from "@/components/Find_Right_Book_Section/FindRightBookSection";
import HeroMain from "@/components/Hero_Section/HeroMain";
import { WhyChooseBookHand } from "@/components/Landing/WhyChooseBookHand";
import { HowItWorks } from "@/components/How_It_Works/HowItWorks";
import { StudentBenefits } from "@/components/Landing/StudentBenefits";
import { BuyAndSell } from "@/components/Landing/BuyAndSell";
import { FinalCTA } from "@/components/Landing/FinalCTA";
import { FAQ } from "@/components/Landing/FAQ";

const page = () => {
  return (
    <>
      <HeroMain />
      <FindRightBookSection />
      <WhyChooseBookHand />
      <HowItWorks />
      <StudentBenefits />
      <BuyAndSell />
      <FinalCTA />
      <FAQ />
    </>
  );
};

export default page;