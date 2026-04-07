import Link from "next/link";
import { perfumes } from "./data/perfumes";

export default function Page() {
  return (
    <main>
      <h1>Perfumes</h1>
      <ul>
        {perfumes.map((item) => (
          <li key={item.id}>
            <Link href="/perfumes/${item.id}">{item.nome}</Link>
            <p>R$ {item.preco}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
