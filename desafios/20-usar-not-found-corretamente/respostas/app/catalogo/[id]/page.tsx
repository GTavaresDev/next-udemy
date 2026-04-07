import Link from "next/link";
import { notFound } from "next/navigation";
import { produtos } from "../data/produtos";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const produtoId = Number(id);

  if (Number.isNaN(produtoId)) {
    notFound();
  }

  const produto = produtos.find((item) => item.id === produtoId);

  if (!produto) {
    notFound();
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
