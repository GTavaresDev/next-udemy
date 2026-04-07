type Produto = {
  id: number;
  nome: string;

};

const produtos: Produto[] = [
  
];

export default function Page() {
  return (
    <main>
      <h1>Estado vazio</h1>
      {produtos.length === 0 ? (
        <p>Nenhum item cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
