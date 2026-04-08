type Produto = {
  id: number;
  nome: string;
  emEstoque: boolean;
};

const produtos: Produto[] = [
  { id: 1, nome: "Notebook Delta", emEstoque: true },
  { id: 2, nome: "Mouse Pro", emEstoque: false },
  { id: 3, nome: "Teclado Studio", emEstoque: true }
];

export default function Page() {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul>
        {produtos.map((produto) => (
        <li key={produto.id}>
          <strong>{produto.nome}</strong>{" "}
          {produto.emEstoque ? <span>disponivel</span> : <span>sem estoque</span>}
        </li>
      ))}
      </ul>
    </main>
  );
}
