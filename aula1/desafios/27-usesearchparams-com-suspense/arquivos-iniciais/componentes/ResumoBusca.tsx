"use client";

import { useSearchParams } from "next/navigation";

export default function ResumoBusca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca");

  return <p>Busca client atual: {busca || "nenhuma"}</p>;
}
