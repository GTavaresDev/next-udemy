import { produtos } from "./data";

export function getItemById(id: number) {
  return produtos.find((produto) => produto.id === id);
}
