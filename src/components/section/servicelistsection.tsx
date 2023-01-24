import { ReactNode } from "react";
import Title from "../title";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ServiceListItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-nowrap">
      <CheckCircleIcon className=" fill-magenta w-6 h-6" />
      <div className="ml-2 w-full text-xl">{children}</div>
    </div>
  );
};

const ServiceListSection = () => {
  return (
    <section className="w-full px-4 flex flex-col" id="services">
      <div className="w-full max-w-7xl flex flex-col py-20 mx-auto">
        <Title>Our List of Service</Title>
        <div className="grid w-full lg:w-3/4 mt-20 mx-auto gap-10 grid-cols-1 md:grid-cols-2">
          {/*  */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="flex flex-col px-10 py-20 rounded-[50px] w-full border border-magenta"
          >
            <div className="text-3xl text-magenta font-bold text-center mb-6">
              OFFLINE
            </div>
            <div className="w-full flex flex-col mt-4 space-y-4">
              <ServiceListItem>
                Mall to Mall Consumer Activation
              </ServiceListItem>
              <ServiceListItem>
                Office to Office SMB Profiling/Activation
              </ServiceListItem>
              <ServiceListItem>
                SMB Profiling, Education, and Activation
              </ServiceListItem>
              <ServiceListItem>
                Chanel/Partner & Consumer Gathering
              </ServiceListItem>
            </div>
          </motion.div>
          {/*  */}
          {/*  */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="flex flex-col px-10 py-20 rounded-[50px] w-full border border-magenta"
          >
            <div className="text-3xl text-magenta font-bold text-center mb-6">
              ONLINE
            </div>
            <div className="w-full flex flex-col mt-4 space-y-4">
              <ServiceListItem>Large Format Event / Exhibition</ServiceListItem>
              <ServiceListItem>Nation Wide Event Road Show</ServiceListItem>
              <ServiceListItem>Community Based Gathering</ServiceListItem>
              <ServiceListItem>Booth Production</ServiceListItem>
            </div>
          </motion.div>
          {/*  */}
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="self-center rounded-full px-10 py-4 border-magenta border text-xl mt-8"
        >
          Wanna combine them?
          <br />
          We can be a <strong>Hybrid</strong>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceListSection;
