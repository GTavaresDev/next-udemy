import React from 'react'
import Link from 'next/link'
import { products } from '../data/products'

type Props = { 
  params: Promise<{id: number}>;
};

const Produtos = async ({ params }: Props) => {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <Link href="/posts">Voltar para a lista de produtos</Link>
    </div>
  );
}

export default Produtos;