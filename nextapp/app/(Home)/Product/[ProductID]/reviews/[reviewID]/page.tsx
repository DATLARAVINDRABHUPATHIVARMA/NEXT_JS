import {notFound} from "next/navigation"

export default async function ReviewDetails({params}:{params:Promise<{ProductID: string, reviewID: string}>}){
    const {ProductID, reviewID} = await params

    if(reviewID > "50"){
        notFound()
    }
    
    return (<h2>Product ID {ProductID} Review ID {reviewID}</h2>)
}