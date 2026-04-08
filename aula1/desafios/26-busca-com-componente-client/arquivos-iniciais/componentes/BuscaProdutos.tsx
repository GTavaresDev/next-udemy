"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function BuscaProdutos() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [valor, setValor] = useState(searchParams.get("busca") ?? "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (valor) {
      params.set("busca", valor);
    } else {
      params.delete("busca");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={valor}
        onChange={(event) => setValor(event.target.value)}
        placeholder="Digite um nome"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
