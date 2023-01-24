import { FC } from "react";
import WhoCard from "../whowecard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Title from "../title";
import Image from "next/image";

import ve from "../../../public/assets/images/ve.png";
import metaprint from "../../../public/assets/images/metaprint.png";
import globalasia from "../../../public/assets/images/globalasia.png";
import travity from "../../../public/assets/images/travity.png";
import xcted from "../../../public/assets/images/xcted.png";
import studio123 from "../../../public/assets/images/studio123.png";

import magentaxsrc from "../../../public/assets/images/magentaxsrc.png";

const item = [
  {
    title: "Virtual Event",
    content:
      "Platform @ Your Fingertips. Make virtual events more than just a website. Host immersive 3D -360 events and superior features",
    logo: ve,
  },
  {
    title: "Global Asia Sinergi",
    content:
      "Global Asia Sinergi is a specialised IT Service Management & Software Consulting Company that provide software solutions that help IT Professional to manage complexity of IT.",
    logo: globalasia,
  },
  {
    title: "Travity",
    content:
      "Travity Tour & Travel comes as a special travel solution for corporate vacationers everywhere.",

    logo: travity,
  },
  {
    title: "Xcted",
    content:
      "Xcted is a digital studio, a group of talented young people who are passionate about the ins and outs of the digital world",

    logo: xcted,
  },
  {
    title: "Studio 123",
    content: "Studio & Green Screen Studio",

    logo: studio123,
  },
  {
    title: "Meta Print",
    content: "Label & Professional Printing Service",
    logo: metaprint,
  },
];

const WhoWeSection: FC = () => {
  return (
    <section className="flex w-full flex-col  py-16 px-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="mb-2 w-full text-center text-[32px] font-bold text-blue-primary-500">
          <Title>Who We Are</Title>
        </div>
        <div className="py-20 flex flex-col justify-center items-center">
          <Image src={magentaxsrc} alt="" />
        </div>
        <Swiper
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          direction="horizontal"
          spaceBetween={50}
          slidesPerView={3}
          className="w-full !py-6 !px-4"
          pagination={{
            clickable: true,
            el: "#swiper-bullet-protfolio",
            type: "bullets",
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
        >
          {item.map((i) => (
            <SwiperSlide key={i.title}>
              <WhoCard title={i.title} logo={i.logo} content={i.content} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="flex w-full justify-center space-x-2"
          id="swiper-bullet-protfolio"
        ></div>
      </div>
    </section>
  );
};

export default WhoWeSection;
