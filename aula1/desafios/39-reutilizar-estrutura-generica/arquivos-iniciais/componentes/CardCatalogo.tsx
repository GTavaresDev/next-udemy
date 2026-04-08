import Link from "next/link";
import styles from "../app/catalogo/styles.module.css";
type CardCatalogoProps = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};

export default function CardCatalogo({
  id,
  nome,
  categoria,
  preco,
  descricao,
  destaque = false,
  dificuldade,
}: CardCatalogoProps) {
  return (
    <article className={`${styles.card} ${destaque ? styles.cardDestaque : ""}`}>
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>{descricao}</p>
      <div className={styles.row}>
        <span>R$ {preco}</span>
        {dificuldade ? <span className={styles.badge}>{dificuldade}</span> : null}
        <Link className={styles.link} href={`/catalogo/${id}`}>
          Ver detalhe
        </Link>
      </div>
    </article>
  );
}
