import { FC } from "react";
import Title from "../title";

import PortfolioCard from "../portfoliocard";
import offline1 from "../../../public/assets/images/offline1.png";
import offline2 from "../../../public/assets/images/offline2.png";
import offline4 from "../../../public/assets/images/offline4.png";
import offline3 from "../../../public/assets/images/offline3.png";
import digital2 from "../../../public/assets/images/digital2.png";
import digital3 from "../../../public/assets/images/digital3.png";
import produksi1 from "../../../public/assets/images/produksi1.png";
import produksi2 from "../../../public/assets/images/produksi2.png";
import online1 from "../../../public/assets/images/online1.png";
import online2 from "../../../public/assets/images/online2.png";

const PortfolioSection: FC = () => {
  return (
    <>
      <section className="w-full px-4 flex flex-col" id="portfolio">
        <div className="w-full max-w-7xl py-20 flex flex-col mx-auto">
          <Title>Our Portfolio</Title>
          <div className="mt-1 text-2xl font-extrabold text-black sm:text-3xl sm:tracking-tight lg:text-4xl">
            EXPERIENCE (OFFLINE EVENT)
          </div>
          <div className="flex flex-wrap w-full">
            <PortfolioCard imagesrc={offline4} />
            <PortfolioCard imagesrc={offline2} />
            <PortfolioCard imagesrc={offline3} />
            <PortfolioCard imagesrc={offline1} />
          </div>
        </div>
      </section>
      <section className="w-full px-4 flex flex-col">
        <div className="w-full max-w-7xl py-20 flex flex-col mx-auto">
          <Title>Our Portfolio</Title>
          <div className="mt-1 text-2xl font-extrabold text-black sm:text-3xl sm:tracking-tight lg:text-4xl">
            DIGITALIZATION
          </div>
          <div className="mt-1 text-2xl font-extrabold text-black sm:text-3xl sm:tracking-tight lg:text-4xl"></div>
          <div className="flex flex-wrap w-full">
            <PortfolioCard imagesrc={digital3} />
            <PortfolioCard imagesrc={digital2} />
          </div>
        </div>
      </section>
      <section className="w-full px-4 flex flex-col">
        <div className="w-full max-w-7xl py-20 flex flex-col mx-auto">
          <Title>Our Portfolio</Title>
          <div className="mt-1 text-2xl font-extrabold text-black sm:text-3xl sm:tracking-tight lg:text-4xl">
            OUR PRODUCTION ON FRAME
          </div>
          <div className="flex flex-wrap w-full">
            <PortfolioCard imagesrc={produksi2} />
            <PortfolioCard imagesrc={produksi1} />
          </div>
        </div>
      </section>
      <section className="w-full px-4 flex flex-col">
        <div className="w-full max-w-7xl py-20 flex flex-col mx-auto">
          <Title>Our Portfolio</Title>
          <div className="mt-1 text-2xl font-extrabold text-black sm:text-3xl sm:tracking-tight lg:text-4xl">
            EXPERIENCE (ONLINE EVENT)
          </div>
          <div className="flex flex-wrap w-full">
            <PortfolioCard imagesrc={online1} />
            <PortfolioCard imagesrc={online2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
