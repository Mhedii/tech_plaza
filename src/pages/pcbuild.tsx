import RootLayout from "@/Layouts/RootLayout";
import React from "react";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdWindPower } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
const PcBuild = () => {
  return (
    <div>
      <div className="mx-[5rem] lg:mx-[10rem] ">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <BsCpu />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <p>Cpu</p>
              <p className="hidden"></p>
            </div>
            <div className="">
              <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                Choose
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center ">
            <div className="">
              <BsMotherboard className="mx-auto" />
            </div>
            <div className=" col-span-9 lg:col-span-10">
              <p className="">MotherBoard</p>
            </div>
            <div className="">
              <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                Choose
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <CgSmartphoneRam />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <p>Ram</p>
              <p className="hidden"></p>
            </div>
            <div className="">
              <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                Choose
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <MdWindPower />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <p>Power Supply</p>
              <p className="hidden"></p>
            </div>
            <div className="">
              <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                Choose
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <GrStorage />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <p>Storage</p>
              <p className="hidden"></p>
            </div>
            <div className="">
              <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                Choose
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <FiMonitor />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <p>Monitor</p>
              <p className="hidden"></p>
            </div>
            <div className="">
              <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuild;
PcBuild.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
