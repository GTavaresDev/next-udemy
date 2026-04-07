import type { Curso } from "./types";
import { cursos } from "./data";

export function getItemById(id: number) {
  return cursos.find((curso) => curso.id === id);
}

export function filterItemsByName(itens: Curso[], termo: string) {
  const valor = termo.trim().toLowerCase();

  if (!valor) {
    return itens;
  }

  return itens.filter((item) => item.nome.toLowerCase().includes(valor));
}

export function filterItemsByCategory(itens: Curso[], categoria: string) {
  if (!categoria) {
    return itens;
  }

  return itens.filter((item) => item.categoria === categoria);
}

export function sortItemsByPrice(itens: Curso[], ordem: "asc" | "desc") {
  return [...itens].sort((a, b) => {
    return ordem === "desc" ? b.preco - a.preco : a.preco - b.preco;
  });
}
