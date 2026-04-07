export type Filme = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};

export const filmes: Filme[] = [
  {
    id: 1,
    nome: "Viagem em React",
    categoria: "ficcao",
    preco: 24,
    descricao: "Aventura sobre interfaces que mudam no tempo.",
    destaque: true,
  },
  {
    id: 2,
    nome: "Rota Final",
    categoria: "acao",
    preco: 19,
    descricao: "Missao de entregar um deploy sem bugs.",
  },
  {
    id: 3,
    nome: "Suspense no Ar",
    categoria: "drama",
    preco: 21,
    descricao: "Historia sobre espera e renderizacao parcial.",
  },
];