import Link from "next/link";
import { ReactNode, FC } from "react";
import { Url } from "url";

interface iNavitem {
  href: Url | string;
  children: ReactNode;
}

const Navitem: FC<iNavitem> = ({ href, children }) => {
  return (
    <Link className="" href={href}>
      {children}
    </Link>
  );
};

export default Navitem;
