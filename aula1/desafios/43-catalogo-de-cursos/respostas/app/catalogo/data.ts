export type Curso = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};

export const cursos: Curso[] = [
  {
    id: 1,
    nome: "Next 16 do zero",
    categoria: "next",
    preco: 129,
    descricao: "Curso introdutorio do App Router atual.",
    destaque: true,
    dificuldade: "facil",
  },
  {
    id: 2,
    nome: "Rotas dinamicas",
    categoria: "next",
    preco: 99,
    descricao: "Detalhes de params e notFound().",
    dificuldade: "medio",
  },
  {
    id: 3,
    nome: "Filtros no cliente",
    categoria: "react",
    preco: 89,
    descricao: "Busca, query string e componentes client.",
    dificuldade: "medio",
  },
];