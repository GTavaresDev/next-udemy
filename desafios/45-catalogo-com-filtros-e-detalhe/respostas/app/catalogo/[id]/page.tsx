import Link from "next/link";
import { notFound } from "next/navigation";
import { livros } from "../data";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const itemId = Number(id);

  if (Number.isNaN(itemId)) {
    notFound();
  }

  const item = livros.find((entry) => entry.id === itemId);

  if (!item) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <article className={styles.card}>
        <h1 className={styles.heading}>{item.nome}</h1>
        <p className={styles.meta}>{item.categoria}</p>
        <p className={styles.description}>{item.descricao}</p>
        <div className={styles.row}>
          <span>R$ {item.preco}</span>
          <Link className={styles.link} href="/catalogo">
            Voltar para lista
          </Link>
        </div>
      </article>
    </main>
  );
}
