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
  const pagina = Number(typeof query.pagina === "string" ? query.pagina : "1");
  const paginaAtual = Number.isNaN(pagina) || pagina < 1 ? 1 : pagina;
  const porPagina = 2;
  const inicio = (paginaAtual - 1) * porPagina;
  const itens = produtos.slice(inicio, inicio + porPagina);

  return (
    <main>
      <h1>Paginacao fake</h1>
      <p>Pagina atual: {paginaAtual}</p>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );
}
