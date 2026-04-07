type CardProdutoProps = {
  nome: string;
  preco: number;
};

export default function CardProduto({ nome, preco }: CardProdutoProps) {
  return (
    <article>
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
    </article>
  );
}
