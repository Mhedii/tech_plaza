import RootLayout from "@/Layouts/RootLayout";
import Image from "next/image";
const SingleComponent = ({ items }) => {
    const { image_url, name, price, category, status, rating } = items
    return (
        <div>
            <div className="grid grid-cols-2 mx-[5rem]">
                <div>
                    <Image src={image_url} width={500} height={200} alt=""></Image>

                </div>
                <div className=" my-auto">
                    <h1 className="text-2xl">{name}</h1>
                    <h1 className="badge badge-outline py-3 bg-orange-600 text-white font-semibold" >{category}</h1>
                    <h1 className="font-semibold">Price: <span className="text-red-700">{price}</span></h1>
                    <h1 className="font-semibold">Availability: <span className="text-red-700">{status}</span></h1>
                    <h1>{rating}</h1>
                    {/* NeedToDO */}
                    {/* Description
Key Features (like Brand, Model, Specification, Port, Type, Resolution, Voltage, etc)
Individual Rating (Out of 5 Stars)
Average Rating (Out of 5 Stars)
Reviews */}

                </div>
            </div>
        </div>
    );
};

export default SingleComponent;

SingleComponent.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/pc');
    const data = await res.json()
    const paths = data.map((item) => ({
        params: { singleComponent: item.id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/pc/${params.singleComponent}`);
    const data = await res.json();

    return {
        props: {
            items: data
        }
    }
}