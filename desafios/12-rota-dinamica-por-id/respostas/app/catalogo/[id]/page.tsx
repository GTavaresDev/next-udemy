import Link from "next/link";
import { produtos } from "../data/produtos";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const produtoId = Number(id);

  const produto = produtos.find((item) => item.id === produtoId);

  if (!produto) {
    return <p>Item nao encontrado.</p>;
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
      {produto.categoria ? <p>Categoria: {produto.categoria}</p> : null}
      {produto.preco ? <p>Preco: R$ {produto.preco}</p> : null}
      {produto.descricao ? <p>{produto.descricao}</p> : null}
      <Link href="/catalogo">Voltar para a lista</Link>
    </main>
  );
}
