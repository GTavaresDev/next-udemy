type Produto = {
  id: number;
  nome: string;

};

const produtos: Produto[] = [
  { id: 1, nome: "Notebook Delta" },
  { id: 2, nome: "Mouse Pro" },
  { id: 3, nome: "Teclado Studio" }
];

export default function Page() {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul>
        {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome}
          
        </li>
      ))}
      </ul>
    </main>
  );
}
