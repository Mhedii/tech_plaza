import RootLayout from "@/Layouts/RootLayout";

import { BsCpu, BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdWindPower } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import Link from "next/link";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const PcBuild = () => {
  const data = useAppSelector((state) => state.pc.selectedComponents);
  const router = useRouter();
  const handleComplete = () => {
    toast("Pc Build Successfully");
    router.push("/");
  };
  return (
    <div>
      <div className="mx-[5rem] lg:mx-[10rem] ">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <BsCpu />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <div className="flex items-center gap-5">
                <div>
                  {data?.Cpu ? (
                    <Image
                      src={data.Cpu.image_url}
                      alt=""
                      height={20}
                      width={50}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
                <div>
                  <p>Cpu</p>
                  {data?.Cpu ? <p>{data.Cpu.name}</p> : <p></p>}
                </div>
              </div>
            </div>
            <div className="">
              {data?.Cpu ? (
                <p>{data.Cpu.price}</p>
              ) : (
                <Link href={"/featuredproduct?category=Cpu"}>
                  <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center ">
            <div className="">
              <BsMotherboard className="mx-auto" />
            </div>
            <div className=" col-span-9 lg:col-span-10">
              <div className="flex items-center gap-5">
                <div>
                  {data?.Motherboard ? (
                    <Image
                      src={data.Motherboard.image_url}
                      alt=""
                      height={20}
                      width={50}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
                <div>
                  <p className="">MotherBoard</p>
                  {data?.Motherboard ? <p>{data.Motherboard.name}</p> : <p></p>}
                </div>
              </div>
            </div>
            <div className="">
              {data?.Motherboard ? (
                <p>{data.Motherboard.price}</p>
              ) : (
                <Link href={"/featuredproduct?category=Motherboard"}>
                  <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <CgSmartphoneRam />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <div className="flex items-center gap-5">
                <div>
                  {data?.Ram ? (
                    <Image
                      src={data.Ram.image_url}
                      alt=""
                      height={20}
                      width={50}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
                <div>
                  <p>Ram</p>
                  {data?.Ram ? <p>{data.Ram.name}</p> : <p></p>}
                </div>
              </div>
            </div>
            <div className="">
              {data?.Ram ? (
                <p>{data.Ram.price}</p>
              ) : (
                <Link href={"/featuredproduct?category=Ram"}>
                  <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <MdWindPower />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <div className="flex items-center gap-5">
                <div>
                  {data?.Power ? (
                    <Image
                      src={data.Power.image_url}
                      alt=""
                      height={20}
                      width={50}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
                <div>
                  <p>Power Supply</p>
                  {data?.Power ? <p>{data.Power.name}</p> : <p></p>}
                </div>
              </div>
            </div>
            <div className="">
              {data?.Power ? (
                <p>{data.Power.price}</p>
              ) : (
                <Link href={"/featuredproduct?category=Power"}>
                  <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <GrStorage />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <div className="flex items-center gap-5">
                <div>
                  {data?.Storage ? (
                    <Image
                      src={data.Storage.image_url}
                      alt=""
                      height={20}
                      width={50}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
                <div>
                  <p>Storage</p>
                  {data?.Storage ? <p>{data.Storage.name}</p> : <p></p>}
                </div>
              </div>
            </div>
            <div className="">
              {data?.Storage ? (
                <p>{data.Storage.price}</p>
              ) : (
                <Link href={"/featuredproduct?category=Storage"}>
                  <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-12 h-14 card bg-base-300 rounded-box items-center">
            <div className="mx-auto">
              <FiMonitor />
            </div>
            <div className="col-span-9 lg:col-span-10">
              <div className="flex items-center gap-5">
                <div>
                  {data?.Monitor ? (
                    <Image
                      src={data.Monitor.image_url}
                      alt=""
                      height={20}
                      width={50}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
                <div>
                  <p>Monitor</p>
                  {data?.Monitor ? <p>{data.Monitor.name}</p> : <p></p>}
                </div>
              </div>
            </div>
            <div className="">
              {data?.Monitor ? (
                <p>{data.Monitor.price}</p>
              ) : (
                <Link href={"/featuredproduct?category=Monitor"}>
                  <button className="btn-primary rounded-lg px-2 py-1 font-semibold ">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="divider"></div>
          {data.Monitor != null &&
          data.Cpu != null &&
          data.Motherboard != null &&
          data.Ram != null &&
          data.Power != null &&
          data.Storage != null ? (
            <button className="btn btn-primary " onClick={handleComplete}>
              Complete
            </button>
          ) : (
            <button className="btn btn-disabled ">Complete</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PcBuild;
PcBuild.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
