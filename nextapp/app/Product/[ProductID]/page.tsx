export default async function ProductDetails({params}:{params:Promise<{ProductID: string}>}){

    const ProductID = (await params).ProductID

    return (
        <div>
            Product Details of {ProductID}
        </div>
    )
}   
