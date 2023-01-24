import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhoCard: FC<{
  title: string;
  content: string;
  logo: any;
}> = ({ title, content, logo }) => {
  return (
    <div
      className={`relative flex  max-w-full flex-col justify-end overflow-hidden rounded-2xl  hover:scale-105 transition-all drop-shadow-xl`}
    >
      <div className="relative inset-x-0 bottom-0 z-0 flex min-h-[300px] w-full flex-col rounded-xl bg-white p-6">
        <Image
          src={logo}
          height={48}
          alt=""
          className="mb-6 animate-infinitebounce self-end mr-2"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <motion.div
          initial={{ y: -40 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-2 text-2xl font-bold"
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default WhoCard;
