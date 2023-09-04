import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/Layouts/RootLayout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1 className="text-3xl ">This is HomePage</h1>;
}

Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
