export type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Notebook Delta",
    categoria: "tecnologia",
    preco: 4999,
    descricao: "Modelo para estudar e trabalhar.",
    destaque: true,
    dificuldade: "facil",
  },
  {
    id: 2,
    nome: "Mouse Pro",
    categoria: "acessorios",
    preco: 199,
    descricao: "Mouse leve para uso diario.",
    dificuldade: "muito facil",
  },
  {
    id: 3,
    nome: "Teclado Studio",
    categoria: "acessorios",
    preco: 349,
    descricao: "Teclado compacto com layout padrao.",
    dificuldade: "medio",
  },
];