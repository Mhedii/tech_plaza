import RootLayout from "@/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";

const FeaturedProduct = ({ items }) => {

    return (
        <div className="grid lg:grid-cols-6 grid-cols-1 md:grid-cols-2 mx-[5rem] gap-10 mb-20">
            {items?.map((item) => (
                <div key={item.id}>
                    <Link href={`/component/${item?.id}`}>

                        <div className="card  bg-base-100 shadow-2xl border  bg-gradient-to-tr from-slate-200 to-bg-purple-400">
                            <figure>
                                <Image
                                    src={item.image_url}
                                    alt=""
                                    width={300}
                                    height={50}
                                    className="rounded-xl"
                                />
                            </figure>
                            {/* <p>{item.image_url}</p> */}
                            <div className="card-body">
                                <h2 className="card-title text-sm font-semibold">
                                    {item.name}
                                </h2>

                                <p className="font-bold text-red-500">
                                    <span className="text-black">Price:</span> {item.price}
                                </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline hover:bg-purple-800 hover:cursor-pointer hover:text-white ">
                                        {item.category}
                                    </div>
                                    <div className="badge badge-outline hover:bg-purple-800 hover:cursor-pointer hover:text-white ">
                                        {item.status}
                                    </div>
                                </div>
                            </div>
                            <p className="card-body pt-0">Rating: {item.rating}</p>
                            {/* {item?.rating==0 ?:}
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

export default FeaturedProduct;


FeaturedProduct.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/pc');
    const data = await res.json()
    const paths = data.map((item) => ({
        params: {
            featuredproduct: item.id,
            category: item.category
        }

    }))

    // console.log("Path", paths);
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/pc/${params.featuredproduct}`);
    const data = await res.json();
    const query = data.category;
    const result = await fetch(`http://localhost:5000/pc?category=${query}`);

    const queryResult = await result.json()

    return {
        props: {
            items: queryResult
        }
    }
}