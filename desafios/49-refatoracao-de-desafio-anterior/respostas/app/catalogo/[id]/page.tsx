import { notFound } from "next/navigation";
import DetalheCatalogo from "../../../componentes/DetalheCatalogo";
import { livros } from "../data";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const livroId = Number(id);

  if (Number.isNaN(livroId)) {
    notFound();
  }

  const livro = livros.find((item) => item.id === livroId);

  if (!livro) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <DetalheCatalogo {...livro} />
    </main>
  );
}
