type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia", preco: 4999 },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios", preco: 199 },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios", preco: 349 },
  { id: 4, nome: "Monitor View", categoria: "tecnologia", preco: 1299 },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const itens = categoria
    ? produtos.filter((produto) => produto.categoria === categoria)
    : produtos;

  return (
    <main>
      <h1>Filtro por categoria</h1>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.categoria}
          </li>
        ))}
      </ul>
    </main>
  );
}
