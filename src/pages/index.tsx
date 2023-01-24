import AboutSection from "@/components/section/aboutussection";
import HeroSection from "@/components/section/herosection";
import OurClient from "@/components/section/ourclient";
import WhoWeAre from "@/components/section/whoweare";
import PortfolioSection from "@/components/section/portfoliosection";
import ServiceListSection from "@/components/section/servicelistsection";
import WhoWeSection from "@/components/section/whowesection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhoWeAre />
      <ServiceListSection />
      <PortfolioSection />
      <OurClient />
    </>
  );
};

export default Home;
