import { notFound } from "next/navigation";
import DetalheCatalogo from "../../../componentes/DetalheCatalogo";
import { getItemById } from "../helpers";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const cursoId = Number(id);

  if (Number.isNaN(cursoId)) {
    notFound();
  }

  const curso = getItemById(cursoId);

  if (!curso) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <DetalheCatalogo {...curso} />
    </main>
  );
}
