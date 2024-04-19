import { Metadata } from "next";


type Props = {
    params: {
        productsId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productsId}`)
        },100)
    })
    return {
        title: `Product ${title}`,
    };
};


export default function ProductDetails({ params }: Props) {
    return <h1>product details {params.productsId}</h1>
}