import { Metadata } from "next"
// import { useRouter } from "next/navigation"
import { use } from "react"

type Props = {params: Promise<{ProductID: string}>}

// export async function generateMetaData({params}:Props):Promise<Metadata>{

//     const ProductID = (await params).ProductID

//     return {
//         title:`Product ${ProductID}`,
//         description: "Product Description"
//     }

// }

export default async function ProductDetails(){

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000) 
    })

    // const router = useRouter()

    // const ProductID = use(params).ProductID

    // const handleBuyNow = (id=123) => {
    //     router.push(`/checkout/${id}`)
    // }

    return (
        <div>
           <h2>Product Details of </h2>
            {/* <button onClick={handleBuyNow}>Buy Now</button> */}
        </div>
    )
}   
