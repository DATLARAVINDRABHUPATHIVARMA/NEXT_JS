"use client"
import { Metadata } from "next"
import { useRouter } from "next/navigation"
import { use } from "react"

type Props = {params: Promise<{ProductID: string}>}

// export async function generateMetaData({params}:Props):Promise<Metadata>{

//     const ProductID = (await params).ProductID

//     return {
//         title:`Product ${ProductID}`,
//         description: "Product Description"
//     }

// }

export default function ProductDetails({params}:Props){

    const router = useRouter()

    const ProductID = use(params).ProductID

    const handleBuyNow = (id=123) => {
        router.push(`/checkout/${id}`)
    }

    return (
        <div>
           <h2>Product Details of {ProductID}</h2>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    )
}   
