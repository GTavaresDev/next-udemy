import Link from "next/link";

const produtos = [
  { id: 1, nome: "Notebook Delta" },
  { id: 2, nome: "Mouse Pro" },
  { id: 3, nome: "Teclado Studio" },
];

export default function Page() {
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link href="/detalhe-estatico">${produto.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
