import "@/styles/globals.css";
import localFont from "@next/font/local";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";
import { motion } from "framer-motion";

const gillSansNovaRegular = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gill-sans-nova-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gill-sans-nova-bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <motion.main
      layout
      className={`${gillSansNovaRegular.className} bg-[#FFFBF5]`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.main>
  );
}
