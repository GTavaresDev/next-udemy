import BuscaProdutos from "../../componentes/BuscaProdutos";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta" },
  { id: 2, nome: "Mouse Pro" },
  { id: 3, nome: "Teclado Studio" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca.toLowerCase() : "";
  const itens = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca));

  return (
    <main>
      <h1>Busca com client component</h1>
      <BuscaProdutos />
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );
}
