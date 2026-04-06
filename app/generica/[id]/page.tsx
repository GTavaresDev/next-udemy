import Link from "next/link";
import { notFound } from "next/navigation";
import { items } from "../data/items";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GenericaItemPage({ params }: PageProps) {
  const { id } = await params;
  const itemId = Number(id);

  if (Number.isNaN(itemId)) {
    notFound();
  }

  const item = items.find((x) => x.id === itemId);

  if (!item) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>{item.title}</h1>
      <p className={styles.subheading}>{item.category}</p>

      <article className={`${styles.card} ${styles.detail}`}>
        <p className={styles.description}>{item.description}</p>
        {item.difficulty ? (
          <span className={styles.badge}>{item.difficulty}</span>
        ) : null}

        <div className={styles.actions}>
          <Link href="/generica" className={styles.link}>
            Voltar para lista
          </Link>
        </div>
      </article>
    </main>
  );
}
