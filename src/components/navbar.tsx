import logo from "../../public/assets/images/magentamediatama.png";
import Image from "next/image";
import Navitem from "./navitem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", url: "#hero" },
  { name: "About", url: "#aboutus" },
  { name: "Our Service", url: "#services" },
  { name: "Experience", url: "#portfolio" },
  { name: "Our Clients", url: "#ourclients" },
  { name: "Contact us", url: "/" },
];

const navAnimVariants = {
  belowTreshold: {
    height: "6rem",
    backgroundColor: "rgba(255,255,255,1)",
  },
  beyondTreshold: {
    height: "9rem",
    backgroundColor: "rgba(255,255,255,0)",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  useEffect(() => {
    scrollY.on("change", (y) => {
      if (y > 400) {
        setIsScrolledDown(true);
      }
      if (y < 400) {
        setIsScrolledDown(false);
      }
    });
  }, [isScrolledDown, scrollY]);

  return (
    <>
      <motion.div
        initial={{ height: "9rem" }}
        animate={isScrolledDown ? "belowTreshold" : "beyondTreshold"}
        variants={navAnimVariants}
        className="w-full hidden lg:flex z-50 flex-col justify-center font-bold fixed top-0 inset-x-0"
      >
        <div className="w-full max-w-7xl h-20 mx-auto flex items-center ">
          <Image src={logo} alt="" height={50} className="object-contain" />
          <div className="flex space-x-8 ml-auto">
            {navigation.map((item: any, index: any) => (
              <Navitem key={index} href={item.url}>
                {item.name}
              </Navitem>
            ))}
          </div>
          <Link
            href="https://www.instagram.com/magentamediatama/"
            target="_blank"
            className="w-6 h-6 ml-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ height: "9rem" }}
        animate={isScrolledDown ? "belowTreshold" : "beyondTreshold"}
        variants={navAnimVariants}
        className="z-50 w-full fixed inset-x-0 top-0 flex px-4 lg:hidden"
      >
        <div className="w-full max-w-7xl py-6 flex justify-between items-center">
          <Image src={logo} alt="" width={150} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 w-12 border bg-white rounded-xl p-2"
          >
            <Bars3Icon className="w-full h-full" />
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 p-2 w-full h-full z-50 bg-black/40"
          >
            <div className="w-full h-full bg-white rounded-xl flex flex-col">
              <div className="flex justify-between items-center py-4 px-2">
                <Image src={logo} alt="" width={150} />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-12 w-12 border bg-white rounded-xl p-2"
                >
                  <XMarkIcon className="w-full h-full" />
                </button>
              </div>
              <div className="flex flex-col py-4 px-2 space-y-4">
                {navigation.map((item: any, index: any) => (
                  <Link
                    key={`${index}--mobile-menu`}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="mx-4 px-4 py-2 border-magenta rounded-xl border bg-white shadow-md text-xl"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
