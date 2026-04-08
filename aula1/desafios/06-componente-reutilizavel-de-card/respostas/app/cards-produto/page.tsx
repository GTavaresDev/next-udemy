import CardProduto from "../../componentes/CardProduto";

const produtos = [
  { id: 1, nome: "Notebook Delta", preco: 4999 },
  { id: 2, nome: "Mouse Pro", preco: 199 },
  { id: 3, nome: "Teclado Studio", preco: 349 },
];

export default function Page() {
  return (
    <main>
      <h1>Cards de produtos</h1>
      <section>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} nome={produto.nome} preco={produto.preco} />
        ))}
      </section>
    </main>
  );
}
