import React from "react";
import Link from "next/link";
import { products } from "./data/products";

const ProductsPage = () => {
  return (
    <div>
      <h1>Ver produtos:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/loja/${product.id}`}>
               {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
