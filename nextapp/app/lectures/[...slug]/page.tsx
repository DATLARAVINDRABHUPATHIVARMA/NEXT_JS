import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state";

export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  console.log(slug);

  if (slug.length == 2) {
    return <div>Lecture 1</div>;
  }

  if (slug.length == 3) {
    return <div>Lecture 2</div>;
  }

  return <div>Lectures</div>
}
