import Link from "next/link";
import { produtos } from "./data/produtos";

export default function Page() {
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((item) => (
          <li key={item.id}>
            <Link href="/catalogo/${item.id}">{item.nome}</Link>
            <p>R$ {item.preco}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
