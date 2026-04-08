import Link from "next/link";
import { perfumes } from "../data/perfumes";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const perfumeId = Number(id);

  if (Number.isNaN(perfumeId)) {
    return <p>Id invalido.</p>;
  }

  const perfume = perfumes.find((item) => item.id === perfumeId);

  if (!perfume) {
    return <p>Item nao encontrado.</p>;
  }

  return (
    <main>
      <h1>{perfume.nome}</h1>
      {perfume.categoria ? <p>Categoria: {perfume.categoria}</p> : null}
      {perfume.preco ? <p>Preco: R$ {perfume.preco}</p> : null}
      {perfume.descricao ? <p>{perfume.descricao}</p> : null}
      <Link href="/perfumes">Voltar para a lista</Link>
    </main>
  );
}
