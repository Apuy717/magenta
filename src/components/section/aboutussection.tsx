import { motion } from "framer-motion";
import Title from "../title";
import Image from "next/image";
import about from "../../../public/assets/images/about.png";
import starblack from "../../../public/assets/images/star-black.png";
import starmagenta from "../../../public/assets/images/star-magenta.png";

const AboutSection = () => {
  return (
    <section className="w-full relative pb-[500px]" id="aboutus">
      <Image src={about} alt="" fill className="w-full object-cover bottom-0" />
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <Title className="justify-center">About us </Title>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="mt-1 text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            WHY MAGENTA ?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            viewport={{ once: true }}
            className="max-w-xl mt-5 mx-auto text-2xl  text-black"
          >
            Magenta provide a good collaboration and elaborate the execution
            from your concern and target into excellent achievements with the
            most effective way.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            viewport={{ once: true }}
            className="max-w-xl mt-5 mx-auto text-2xl text-black"
          >
            Our Goal is to be a Brand of First Choice and have a longterm
            relationship with clients because of our performance and service.
          </motion.div>
        </div>
      </div>
      <Image
        src={starmagenta}
        alt=""
        className="absolute top-[42%] right-[18%] animate-[zoomInOut_3.5s_infinite] delay-1000"
      />
      <Image
        src={starblack}
        alt=""
        className="absolute top-[5%] left-[20%] animate-[zoomInOut_3.5s_infinite] delay-1000 w-8 h-8"
      />
    </section>
  );
};

export default AboutSection;
