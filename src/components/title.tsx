import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const Title: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className={`text-3xl font-semibold text-[#EC008C] flex flex-nowrap items-center ${className}`}
    >
      <div>{children}</div>
      <div className="bg-[#EC008C] h-0.5 w-[160px] ml-4 rounded-full"></div>
    </motion.div>
  );
};

export default Title;
