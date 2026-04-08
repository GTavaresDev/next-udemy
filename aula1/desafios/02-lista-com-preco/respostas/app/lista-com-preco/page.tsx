type Produto = {
  id: number;
  nome: string;
  preco: number;
};

const produtos: Produto[] = [
  { id: 1, nome: "Notebook Delta", preco: 4999 },
  { id: 2, nome: "Mouse Pro", preco: 199 },
  { id: 3, nome: "Teclado Studio", preco: 349 }
];

export default function Page() {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul>
        {produtos.map((produto) => (
        <li key={produto.id}>
          <strong>{produto.nome}</strong> - R$ {produto.preco}
          
        </li>
      ))}
      </ul>
    </main>
  );
}
