import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 bg-white px-16 py-32 dark:bg-black">
        <h1 className="text-3xl font-semibold">Aulas</h1>
        <nav className="flex flex-col gap-3">
          <Link
            className="rounded-md border border-zinc-200 px-4 py-3 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            href="/sobre"
          >
            Sobre
          </Link>
          <Link
            className="rounded-md border border-zinc-200 px-4 py-3 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            href="/posts"
          >
            Posts
          </Link>

          <Link
            className="rounded-md border border-zinc-200 px-4 py-3 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            href="/exemplo?parametro=abc"
          >
            Exemplo
          </Link>
        </nav>
      </main>
    </div>
  );
}
