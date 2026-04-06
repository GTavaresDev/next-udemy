export type GenericItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  difficulty?: "easy" | "medium" | "hard";
};

export const items: GenericItem[] = [
  {
    id: 1,
    title: "Two Sum",
    category: "Array",
    description: "Encontrar dois indices cujo somatorio bate com o alvo.",
    difficulty: "easy",
  },
  {
    id: 2,
    title: "Valid Parentheses",
    category: "Stack",
    description: "Validar sequencia de parenteses usando pilha.",
    difficulty: "easy",
  },
  {
    id: 3,
    title: "Add Two Numbers",
    category: "Linked List",
    description: "Somar dois numeros representados por listas encadeadas.",
    difficulty: "medium",
  },
];
