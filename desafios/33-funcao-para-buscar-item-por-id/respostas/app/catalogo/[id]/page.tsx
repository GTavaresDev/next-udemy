import Link from "next/link";
import { getItemById } from "../helpers";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const produto = getItemById(Number(id));

  if (!produto) {
    return <p>Item nao encontrado.</p>;
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <Link href="/catalogo">Voltar</Link>
    </main>
  );
}
