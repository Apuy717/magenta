import { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <a
        href="#_"
        className="relative inline-block px-16 py-4 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 rounded-full ease-out transform translate-x-1 translate-y-1 bg-[#F4D0DC] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 rounded-full border-[#F4D0DC] "></span>
        <span className="relative text-[#EC008C] group-hover:text-[#EC008C]">
          Button Text
        </span>
      </a>
    </div>
  );
};

export default Button;
