import Link from "next/link";
import styles from "../app/catalogo/styles.module.css";
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
    <article className={styles.card}>
      <h1>{nome}</h1>
      <p>{categoria}</p>
      <p>{descricao}</p>
      <p>R$ {preco}</p>
      <Link className={styles.link} href="/catalogo">
        Voltar para a lista
      </Link>
    </article>
  );
}
