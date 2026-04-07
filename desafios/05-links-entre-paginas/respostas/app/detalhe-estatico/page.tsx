import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Notebook Delta</h1>
      <p>Um produto estatico apenas para praticar JSX.</p>
      <Link href="/lista-com-links">Voltar para a lista</Link>
    </main>
  );
}
