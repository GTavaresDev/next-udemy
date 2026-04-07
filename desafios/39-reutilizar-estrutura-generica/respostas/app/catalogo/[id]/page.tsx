import DetalheCatalogo from "../../../componentes/DetalheCatalogo";
import { produtos } from "../data/produtos";
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const itemId = Number(id);

  const item = produtos.find((produto) => produto.id === itemId);

  if (!item) {
    return <p>Item nao encontrado.</p>;
  }

  return (
    <main>
      <DetalheCatalogo {...item} />
    </main>
  );
}
