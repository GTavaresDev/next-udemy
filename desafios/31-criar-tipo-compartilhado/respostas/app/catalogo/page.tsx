import { produtos } from "./data";

export default function Page() {
  return (
    <main>
      <h1>Catalogo tipado</h1>
      <section>
        {produtos.map((item) => (
          <article key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.categoria}</p>
            <p>R$ {item.preco}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
