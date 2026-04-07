import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2>Item nao encontrado</h2>
      <p>Confira a URL ou volte para a lista principal.</p>
      <Link href="/catalogo">Voltar</Link>
    </main>
  );
}
