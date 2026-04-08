"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FiltrosClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [busca, setBusca] = useState(searchParams.get("busca") ?? "");

  function aplicar(categoria: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (busca) {
      params.set("busca", busca);
    } else {
      params.delete("busca");
    }

    if (categoria) {
      params.set("categoria", categoria);
    } else {
      params.delete("categoria");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <input
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        placeholder="Buscar item"
      />
      <button type="button" onClick={() => aplicar("frontend")}>
        Frontend
      </button>
      <button type="button" onClick={() => aplicar("")}>
        Limpar categoria
      </button>
    </div>
  );
}
