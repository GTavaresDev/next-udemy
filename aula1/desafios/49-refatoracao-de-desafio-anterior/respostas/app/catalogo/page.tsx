import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import CardCatalogo from "../../componentes/CardCatalogo";
import { livros } from "./data";
import styles from "./styles.module.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const ordem = query.ordem === "desc" ? "desc" : "asc";

  const itens = sortItemsByPrice(
    filterItemsByCategory(filterItemsByName(livros, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo refatorado</h1>
      <section className={styles.grid}>
        {itens.map((item) => (
          <CardCatalogo key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
