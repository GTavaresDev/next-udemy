import Link from "next/link";
import { notFound } from "next/navigation";

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
];

type PageProps = {
  params: Promise<{ categoria: string; id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { categoria, id } = await params;
  const produtoId = Number(id);

  if (Number.isNaN(produtoId)) {
    notFound();
  }

  const produto = produtos.find(
    (item) => item.id === produtoId && item.categoria === categoria,
  );

  if (!produto) {
    notFound();
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>Categoria: {produto.categoria}</p>
      <Link href="/catalogo-por-categoria">Voltar</Link>
    </main>
  );
}
