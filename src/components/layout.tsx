import Navbar from "@/components/navbar";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import waicon from "../../public/assets/images/waicon.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Link
        href="https://api.whatsapp.com/send?phone=+6281218687828&text=%20%20%20%20%20%20%20%22"
        className="fixed h-16 w-16 bg-[#25d366] z-40 right-4 bottom-4 rounded-full p-4"
        target="_blank"
      >
        <div className="relative w-full h-full">
          <Image src={waicon} alt="" fill className="object-contain" />
        </div>
      </Link>
    </>
  );
}
