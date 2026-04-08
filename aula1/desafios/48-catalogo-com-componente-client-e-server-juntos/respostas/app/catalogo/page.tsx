import { Suspense } from "react";
import FiltrosClient from "../../componentes/FiltrosClient";
import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import { cursos } from "./data";
import styles from "./styles.module.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function FallbackFiltros() {
  return <p>Carregando filtros...</p>;
}

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
    filterItemsByCategory(filterItemsByName(cursos, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo com client e server juntos</h1>
      <Suspense fallback={<FallbackFiltros />}>
        <FiltrosClient />
      </Suspense>
      <section className={styles.grid}>
        {itens.map((item) => (
          <article key={item.id} className={styles.card}>
            <h2>{item.nome}</h2>
            <p className={styles.meta}>{item.categoria}</p>
            <p className={styles.description}>{item.descricao}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
