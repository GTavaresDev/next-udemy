export type Perfume = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};

export const perfumes: Perfume[] = [
  {
    id: 1,
    nome: "Aurora Citrus",
    categoria: "citrico",
    preco: 189,
    descricao: "Perfume leve para o dia.",
  },
  {
    id: 2,
    nome: "Noite Ambar",
    categoria: "amadeirado",
    preco: 259,
    descricao: "Aroma intenso para a noite.",
  },
  {
    id: 3,
    nome: "Jardim Branco",
    categoria: "floral",
    preco: 219,
    descricao: "Mistura floral com toque fresco.",
  },
];