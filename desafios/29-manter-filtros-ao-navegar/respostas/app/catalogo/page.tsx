import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
];

function buildQueryString(busca: string, categoria: string) {
  const params = new URLSearchParams();

  if (busca) {
    params.set("busca", busca);
  }

  if (categoria) {
    params.set("categoria", categoria);
  }

  return params.toString();
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const queryString = buildQueryString(busca, categoria);

  return (
    <main>
      <h1>Manter filtros ao navegar</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link href={`/catalogo/${produto.id}${queryString ? `?${queryString}` : ""}`}>
              {produto.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
