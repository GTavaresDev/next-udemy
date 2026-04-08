import Link from "next/link";
type CardCatalogoProps = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  
  
};

export default function CardCatalogo({
  id,
  nome,
  categoria,
  preco,
  descricao,
  
  
}: CardCatalogoProps) {
  return (
    <article>
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>{descricao}</p>
      <div>
        <span>R$ {preco}</span>
        
        <Link href={`/catalogo/${id}`}>
          Ver detalhe
        </Link>
      </div>
    </article>
  );
}
