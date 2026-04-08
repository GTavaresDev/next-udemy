type Produto = {
  id: number;
  nome: string;
  categoria: string;
};

const produtos: Produto[] = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios" }
];

export default function Page() {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul>
        {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome}
          <span> - {produto.categoria}</span>
        </li>
      ))}
      </ul>
    </main>
  );
}
