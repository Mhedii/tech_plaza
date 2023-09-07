import Image from "next/image";
import Link from "next/link";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
const ComponentInfo = ({ componentInfo }: any) => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 md:grid-cols-2 mx-[5rem] gap-10 mb-20">
      {componentInfo?.map((info: any) => (
        <div key={info.id}>
          <Link href={`/component/${info?.id}`}>
            <div className="card  bg-base-100 shadow-2xl border  bg-gradient-to-tr from-slate-200 to-bg-purple-400">
              <figure>
                <Image
                  src={info.image_url}
                  alt=""
                  width={300}
                  height={50}
                  className="rounded-xl"
                />
              </figure>
              {/* <p>{info.image_url}</p> */}
              <div className="card-body">
                <h2 className="card-title text-sm font-semibold">
                  {info.name}
                </h2>

                <p className="font-bold text-red-500">
                  <span className="text-black">Price:</span> {info.price}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline hover:bg-purple-800 hover:cursor-pointer hover:text-white ">
                    {info.category}
                  </div>
                  <div className="badge badge-outline hover:bg-purple-800 hover:cursor-pointer hover:text-white ">
                    {info.status}
                  </div>
                </div>
              </div>
              <p className="card-body pt-0">Rating: {info.rating}</p>
              {/* {info?.rating==0 ?:}
            <BsStarFill/>
            <BsStarHalf />
            <BsStar /> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ComponentInfo;
