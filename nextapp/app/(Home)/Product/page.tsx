import Link from "next/link";

export default function Products () { 
  const ProductID = 4;
  return (
    <div>
      <ul>
        <li>
          <Link href="/Product/1">Product 1</Link>
        </li>
        <li>
          <Link href="/Product/2">Product 2</Link>
        </li>
        <li>
          <Link href="/Product/3" replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link href={`/Product/${ProductID}`}>Product {ProductID}</Link>
        </li>
      </ul>
    </div>
  );
}
