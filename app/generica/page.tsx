import Link from "next/link";
import { items } from "./data/items";
import styles from "./styles.module.css";

export default function GenericaPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Template Generico</h1>
      <p className={styles.subheading}>
        Reutilize esta estrutura para qualquer lista de estudo.
      </p>

      <section className={styles.grid}>
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.meta}>{item.category}</p>
            <p className={styles.description}>{item.description}</p>

            <div className={styles.row}>
              {item.difficulty ? (
                <span className={styles.badge}>{item.difficulty}</span>
              ) : (
                <span />
              )}

              <Link href={`/generica/${item.id}`} className={styles.link}>
                Ver detalhe
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
