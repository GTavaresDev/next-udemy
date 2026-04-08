import type { Filme } from "./types";

export function filterItemsByName(itens: Filme[], termo: string) {
  const valor = termo.trim().toLowerCase();

  if (!valor) {
    return itens;
  }

  return itens.filter((item) => item.nome.toLowerCase().includes(valor));
}

export function filterItemsByCategory(itens: Filme[], categoria: string) {
  if (!categoria) {
    return itens;
  }

  return itens.filter((item) => item.categoria === categoria);
}

export function sortItemsByPrice(itens: Filme[], ordem: "asc" | "desc") {
  return [...itens].sort((a, b) => {
    return ordem === "desc" ? b.preco - a.preco : a.preco - b.preco;
  });
}
