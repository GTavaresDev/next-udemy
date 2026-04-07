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
  const busca = typeof query.busca === "string" ? query.busca : "";

  return (
    <main>
      <h1>Leitura de searchParams</h1>
      <p>Busca atual: {busca || "nenhuma"}</p>
      <p>Total de itens locais: {produtos.length}</p>
    </main>
  );
}
