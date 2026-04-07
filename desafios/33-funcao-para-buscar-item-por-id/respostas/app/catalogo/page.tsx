import Link from "next/link";
import { produtos } from "./data";

export default function Page() {
  return (
    <main>
      <h1>Catalogo com getItemById</h1>
      <ul>
        {produtos.map((item) => (
          <li key={item.id}>
            <Link href={`/catalogo/${item.id}`}>{item.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
