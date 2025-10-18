import { notFound, redirect } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ ProductID: string; reviewID: string }>;
}) {
  const { ProductID, reviewID } = await params;

  if (reviewID > "60") {
    redirect("/");
  }

  if (reviewID == "50") {
    throw new Error("ReviewID Error");
  }

  return (
    <h2>
      Product ID {ProductID} Review ID {reviewID}
    </h2>
  );
}
