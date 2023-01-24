import Image, { StaticImageData } from "next/image";
import { Url } from "url";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface iClientCard {
  props: {
    imagesrc: StaticImageData | string;
  };
}

const ClientCard: FC<iClientCard> = ({ props }) => {
  return (
    <div className="h-full w-full p-6 relative aspect-[2/1] flex rounded-3xl bg-[#FFFBF5] ">
      <div className="w-full h-full relative">
        <Image
          src={props.imagesrc}
          alt=""
          className="drop-shadow object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default ClientCard;
