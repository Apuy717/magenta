import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import { FC } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import Title from "../title";
import ClientCard from "../ourclientcard";

import bri from "../../../public/assets/images/BRI.png";
import bni from "../../../public/assets/images/BNI.png";
import aeon from "../../../public/assets/images/aeon.png";
import ahm from "../../../public/assets/images/ahm.png";
import alamsutera from "../../../public/assets/images/alamsutera.png";
import astra from "../../../public/assets/images/astra.png";
import centralpark from "../../../public/assets/images/centralpark.png";
import danone from "../../../public/assets/images/Danone.png";
import mandiri from "../../../public/assets/images/Mandiri.png";
import menaraastra from "../../../public/assets/images/menaraastra.png";
import novell from "../../../public/assets/images/Novell.png";
import plazaindonesia from "../../../public/assets/images/plazaindonesia.png";
import pln from "../../../public/assets/images/PLN.png";
import sinarmas from "../../../public/assets/images/sinarmas.png";
import telkomsel from "../../../public/assets/images/Telkomsel.png";
import toyotaastra from "../../../public/assets/images/toyotaastra.png";

import magentaxsrc from "../../../public/assets/images/magentaxsrc.png";

const items1 = [
  {
    imagesrc: bri,
  },
  {
    imagesrc: aeon,
  },
  {
    imagesrc: danone,
  },
  {
    imagesrc: telkomsel,
  },
  {
    imagesrc: plazaindonesia,
  },
  {
    imagesrc: pln,
  },
  {
    imagesrc: toyotaastra,
  },
  {
    imagesrc: menaraastra,
  },
];

const items2 = [
  {
    imagesrc: bni,
  },
  {
    imagesrc: centralpark,
  },
  {
    imagesrc: ahm,
  },
  {
    imagesrc: pln,
  },
  {
    imagesrc: sinarmas,
  },
  {
    imagesrc: mandiri,
  },
  {
    imagesrc: alamsutera,
  },
  {
    imagesrc: novell,
  },
  {
    imagesrc: astra,
  },
];

const OurClient = () => {
  return (
    <section
      className="relative w-full max-w-[100vw] flex flex-col space-y-4 z-0"
      id="ourclients"
    >
      <Swiper
        key={"first"}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={10000}
        slidesPerView="auto"
        modules={[FreeMode, Autoplay]}
        freeMode={{
          momentum: false,
          momentumBounce: false,
          sticky: false,
        }}
        loop
        className="w-full"
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        direction="horizontal"
      >
        {items1.map((item: any, index: any) => (
          <SwiperSlide key={`${index}--client`}>
            <ClientCard props={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        key={"second"}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        speed={10000}
        slidesPerView="auto"
        modules={[FreeMode, Autoplay]}
        freeMode={{
          momentum: false,
          momentumBounce: false,
          sticky: false,
        }}
        loop
        className="w-full"
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        direction="horizontal"
      >
        {items2.map((item: any, index: any) => (
          <SwiperSlide key={`${index}--client`}>
            <ClientCard props={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-10"></div>
    </section>
  );
};

export default OurClient;
