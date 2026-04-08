import { produtos } from "./data/produtos";
import styles from "./styles.module.css";
export default function Page() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo</h1>
      <p className={styles.subheading}>Base para lista e detalhe.</p>
      <section className={styles.grid}>
        {produtos.map((item) =>
          <article key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.categoria}</p>
            <p>R$ {item.preco}</p>
          </article>
        )}
      </section>
    </main>
  );
}
