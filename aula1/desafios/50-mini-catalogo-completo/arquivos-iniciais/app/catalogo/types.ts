export type Curso = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};