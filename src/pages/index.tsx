import React from "react";
import { Inter } from "next/font/google";
import RootLayout from "@/Layouts/RootLayout";
import ComponentInfo from "@/UI/ComponentInfo";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ componentInfo }: any) {
  return (
    <>
      <Head>
        <title>Tech Plaza</title>
        <meta
          name="description"
          content="This is a Tech realted website where you can buy any computer parts or build a pc"
        />
      </Head>
      <ComponentInfo componentInfo={componentInfo} />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/pc/");
  const data = await res.json();
  return {
    props: {
      componentInfo: data,
    },
    revalidate: 10,
  };
};
