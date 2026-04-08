import { produtos } from "./data";
import { filterItemsByName } from "./helpers";

const itens = filterItemsByName(produtos, "mouse");

export default function Page() {
  return (
    <main>
      <h1>Separando dados e helpers</h1>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </main>
  );
}
