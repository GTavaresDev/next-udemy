export type Livro = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};

export const livros: Livro[] = [
  {
    id: 1,
    nome: "Next na pratica",
    categoria: "frontend",
    preco: 89,
    descricao: "Livro para revisar App Router.",
    destaque: true,
    dificuldade: "facil",
  },
  {
    id: 2,
    nome: "React com projetos",
    categoria: "frontend",
    preco: 79,
    descricao: "Exercicios de componentes e props.",
    dificuldade: "medio",
  },
  {
    id: 3,
    nome: "UX para devs",
    categoria: "design",
    preco: 69,
    descricao: "Noções de interface para catalogos.",
    dificuldade: "muito facil",
  },
];