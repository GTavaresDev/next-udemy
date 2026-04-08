export type Post = {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
};

export const posts: Post[] = [
  {
    id: 1,
    nome: "Aprendendo rotas",
    categoria: "next",
    descricao: "Introducao a paginas no App Router.",
  },
  {
    id: 2,
    nome: "Detalhes dinamicos",
    categoria: "next",
    descricao: "Como usar params como Promise.",
  },
  {
    id: 3,
    nome: "Filtros por query",
    categoria: "react",
    descricao: "Leitura de searchParams na pagina.",
  },
];