import type { Produto } from "./types";

export function filterItemsByName(itens: Produto[], termo: string) {
  const valor = termo.trim().toLowerCase();

  if (!valor) {
    return itens;
  }

  return itens.filter((item) => item.nome.toLowerCase().includes(valor));
}

export function filterItemsByCategory(itens: Produto[], categoria: string) {
  if (!categoria) {
    return itens;
  }

  return itens.filter((item) => item.categoria === categoria);
}

export function sortItemsByPrice(itens: Produto[], ordem: "asc" | "desc") {
  return [...itens].sort((a, b) => {
    return ordem === "desc" ? b.preco - a.preco : a.preco - b.preco;
  });
}
