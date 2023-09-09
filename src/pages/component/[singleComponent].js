import RootLayout from "@/Layouts/RootLayout";
import Image from "next/image";
import { features } from "process";
const SingleComponent = ({ items }) => {
    const { image_url, name, price, category, status, rating, features } = items
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
                    {features?.brand ? <p className="font-semibold">Brand: {features?.brand}</p> : <p></p>}
                    {features?.mpn ? <p className="font-semibold">Mpn: {features?.mpn}</p> : <p></p>}
                    {features?.model ? <p className="font-semibold">Model: {features?.model}</p> : <p></p>}
                    {features?.volt ? <p className="font-semibold">Volt: {features?.volt}</p> : <p></p>}
                    {features?.weight ? <p className="font-semibold">Weight: {features?.weight}</p> : <p></p>}
                    {features?.productCode ? <p className="font-semibold">Product Code: {features?.productCode}</p> : <p></p>}
                    {features?.cores ? <p className="font-semibold">Cores: {features?.cores}</p> : <p></p>}
                    {features?.clockspeed ? <p className="font-semibold">Clock Speed: {features?.clockspeed}</p> : <p></p>}
                    {features?.generation ? <p className="font-semibold">Generation: {features?.generation}</p> : <p></p>}
                    {features?.display ? <p className="font-semibold">Display: {features?.display}</p> : <p></p>}
                    {features?.capacity ? <p className="font-semibold">Capacity: {features?.capacity}</p> : <p></p>}
                    <h1 className="font-semibold">Rating: {rating}</h1>
                    <p>{features?.description}</p>

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