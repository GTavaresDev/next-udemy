import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca.toLowerCase() : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";

  const filtrados = produtos.filter((produto) => {
    const bateBusca = busca ? produto.nome.toLowerCase().includes(busca) : true;
    const bateCategoria = categoria ? produto.categoria === categoria : true;
    return bateBusca && bateCategoria;
  });

  return (
    <main>
      <h1>Resetar filtros</h1>
      <Link href="/catalogo">Limpar todos os filtros</Link>
      <ul>
        {filtrados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );
}
