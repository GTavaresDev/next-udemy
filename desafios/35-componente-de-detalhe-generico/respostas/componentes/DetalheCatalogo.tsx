import Link from "next/link";
type DetalheCatalogoProps = {
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
};

export default function DetalheCatalogo({
  nome,
  categoria,
  preco,
  descricao,
}: DetalheCatalogoProps) {
  return (
    <article>
      <h1>{nome}</h1>
      <p>{categoria}</p>
      <p>{descricao}</p>
      <p>R$ {preco}</p>
      <Link href="/catalogo">
        Voltar para a lista
      </Link>
    </article>
  );
}
