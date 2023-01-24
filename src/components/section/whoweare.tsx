import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import Title from "../title";
import DivisionCard from "../divisioncard";

import ve from "../../../public/assets/images/ve.png";
import metaprint from "../../../public/assets/images/metaprint.png";
import globalasia from "../../../public/assets/images/globalasia.png";
import travity from "../../../public/assets/images/travity.png";
import xcted from "../../../public/assets/images/xcted.png";
import studio123 from "../../../public/assets/images/studio123.png";

import magentaxsrc from "../../../public/assets/images/magentaxsrc.png";

const items = [
  {
    name: "Virtual Event",
    description: "Platform @ Your Fingertips",
    url: "https://virtualevent.id/",
    imagesrc: ve,
  },
  {
    name: "Meta Print",
    description: "Label & Professional Printing Service",
    url: "#_",
    imagesrc: metaprint,
  },
  {
    name: "Global Asia Sinergi",
    description: "IT Consultant Company to Simplify Your IT",
    url: "https://www.asiasinergi.com/",
    imagesrc: globalasia,
  },
  {
    name: "Travity",
    description: "Your Corporate Travel Companion",
    url: "https://www.travitytravel.com/",
    imagesrc: travity,
  },
  {
    name: "Xcted",
    description:
      "Superior art & Development of Digital Environment for your Business",
    url: "https://xcted.com/",
    imagesrc: xcted,
  },
  {
    name: "Studio123",
    description: "Studio & Green Screen Studio",
    url: "https://studio123.id/",
    imagesrc: studio123,
  },
];

const WhoWeAre = () => {
  return (
    <section className="min-h-screen w-full px-4" id="whoweare">
      <div className="w-full max-w-7xl flex flex-col mx-auto py-24">
        <Title>Who We Are</Title>
        <div className="py-20 flex flex-col justify-center items-center">
          <Image src={magentaxsrc} alt="" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item: any, index: any) => (
            <DivisionCard key={`${index}--divisionCard`} props={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
