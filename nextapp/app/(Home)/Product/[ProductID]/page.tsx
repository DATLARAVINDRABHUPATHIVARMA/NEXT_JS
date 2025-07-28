import { Metadata } from "next"

type Props = {params: Promise<{ProductID: string}>}

export async function generateMetaData({params}:Props):Promise<Metadata>{

    const ProductID = (await params).ProductID

    return {
        title:`Product ${ProductID}`,
        description: "Product Description"
    }

}

export default async function ProductDetails({params}:Props){

    const ProductID = (await params).ProductID

    return (
        <div>
            Product Details of {ProductID}
        </div>
    )
}   
