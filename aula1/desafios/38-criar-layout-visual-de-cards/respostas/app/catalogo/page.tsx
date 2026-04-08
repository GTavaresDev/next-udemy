import { produtos } from "./data/produtos";
import CardCatalogo from "../../componentes/CardCatalogo";
import styles from "./styles.module.css";
export default function Page() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo com cards</h1>
      <p className={styles.subheading}>Base para lista e detalhe.</p>
      <section className={styles.grid}>
        {produtos.map((item) =>
          <CardCatalogo key={item.id} {...item} />
        )}
      </section>
    </main>
  );
}
