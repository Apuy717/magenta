import Image, { StaticImageData } from "next/image";
import { Url } from "url";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface iDivisionCard {
  props: {
    name: string;
    description: string;
    url: Url | string;
    imagesrc: StaticImageData | string;
  };
}

const DivisionCard: FC<iDivisionCard> = ({ props }) => {
  return (
    <Link
      href={props.url}
      className="w-full h-full aspect-[4/3] z-0 relative flex overflow-hidden flex-col pt-8 hover:scale-105 transition-all px-4 pb-4"
    >
      <Image
        src={props.imagesrc}
        alt=""
        className={`animate-infinitebounce drop-shadow-md -mb-20 self-end mr-2`}
        height={80}
      />

      <div className="flex flex-col h-64 px-8 rounded-3xl shadow-md border justify-center bg-white">
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold text-4xl text-black z-10"
        >
          {props.name}
        </motion.div>
        <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-10"
        >
          {props.description}
        </motion.div>
      </div>
    </Link>
  );
};

export default DivisionCard;
