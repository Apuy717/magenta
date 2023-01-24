import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

const PortfolioCard: FC<{ imagesrc: StaticImageData }> = ({ imagesrc }) => {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
        },
      }}
      viewport={{
        once: true,
      }}
      className="relative h-48 basis-2/5 p-2 md:h-96 md:p-4 [&:nth-child(4n+1)]:basis-3/5 [&:nth-child(4n+4)]:basis-3/5"
    >
      <div className="relative w-full h-full rounded-[20px] lg:rounded-[20px] overflow-clip border-2 border-white shadow-md">
        <Image
          src={imagesrc}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
