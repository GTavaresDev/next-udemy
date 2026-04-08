import { Suspense } from "react";
import CardCatalogo from "../../componentes/CardCatalogo";
import FiltrosClient from "../../componentes/FiltrosClient";
import { cursos } from "./data";
import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
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
      <h1 className={styles.heading}>Mini catalogo completo</h1>
      <p className={styles.subheading}>
        Lista, query string, detalhe, tipagem, estilos e organizacao.
      </p>

      <Suspense fallback={<FallbackFiltros />}>
        <FiltrosClient />
      </Suspense>

      <section className={styles.grid}>
        {itens.map((item) => (
          <CardCatalogo key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
