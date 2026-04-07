import Link from "next/link";
import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import { filmes } from "./data";
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

  const filtrados = sortItemsByPrice(
    filterItemsByCategory(filterItemsByName(filmes, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo com rota invalida tratada</h1>
      <p className={styles.subheading}>Pratique lista, query string e detalhe.</p>

      <div className={styles.filters}>
        <Link className={styles.link} href="?busca=next">
          Buscar next
        </Link>
        <Link className={styles.link} href="?categoria=frontend">
          Filtrar frontend
        </Link>
        <Link className={styles.link} href="?ordem=desc">
          Ordem desc
        </Link>
      </div>

      <section className={styles.grid}>
        {filtrados.map((item) => (
          <article
            key={item.id}
            className={`${styles.card} ${item.destaque ? styles.cardDestaque : ""}`}
          >
            <h2>{item.nome}</h2>
            <p className={styles.meta}>{item.categoria}</p>
            <p className={styles.description}>{item.descricao}</p>
            <div className={styles.row}>
              <span>R$ {item.preco}</span>
              <Link className={styles.link} href={`/catalogo/${item.id}`}>
                Ver detalhe
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
