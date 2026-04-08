import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "desafios");

const challengeMeta = [
  ["01", "lista-simples", "Lista simples", "muito facil", "simple-list"],
  ["02", "lista-com-preco", "Lista com preco", "muito facil", "list-price"],
  ["03", "lista-com-categoria", "Lista com categoria", "muito facil", "list-category"],
  ["04", "pagina-de-detalhe-estatica", "Pagina de detalhe estatica", "muito facil", "static-detail"],
  ["05", "links-entre-paginas", "Links entre paginas", "facil", "links"],
  ["06", "componente-reutilizavel-de-card", "Componente reutilizavel de card", "facil", "reusable-card"],
  ["07", "renderizacao-condicional-simples", "Renderizacao condicional simples", "facil", "conditional"],
  ["08", "estado-vazio", "Estado vazio", "muito facil", "empty-state"],
  ["09", "destaque-do-item-mais-caro", "Destaque do item mais caro", "facil", "highlight-expensive"],
  ["10", "lista-com-map-e-key-correto", "Lista com map e key correto", "facil", "map-key"],
  ["11", "array-em-data", "Array em data", "facil", "data-array"],
  ["12", "rota-dinamica-por-id", "Rota dinamica por id", "facil", "dynamic-id"],
  ["13", "converter-id-string-para-numero", "Converter id string para numero", "facil", "convert-id"],
  ["14", "item-nao-encontrado", "Item nao encontrado", "facil", "item-not-found"],
  ["15", "voltar-para-lista", "Voltar para lista", "facil", "back-link"],
  ["16", "detalhe-de-produto", "Detalhe de produto", "facil", "detail-product"],
  ["17", "detalhe-de-perfume", "Detalhe de perfume", "facil", "detail-perfume"],
  ["18", "detalhe-de-post", "Detalhe de post", "medio", "detail-post"],
  ["19", "rota-dinamica-com-categoria-e-id", "Rota dinamica com categoria e id", "medio", "dynamic-category-id"],
  ["20", "usar-not-found-corretamente", "Usar notFound() corretamente", "medio", "not-found"],
  ["21", "ler-searchparams-na-page", "Ler searchParams na page", "facil", "search-read"],
  ["22", "filtrar-lista-por-nome", "Filtrar lista por nome", "facil", "filter-name"],
  ["23", "filtrar-por-categoria", "Filtrar por categoria", "facil", "filter-category"],
  ["24", "ordenar-por-preco", "Ordenar por preco", "facil", "sort-price"],
  ["25", "paginacao-fake-por-query", "Paginacao fake por query", "medio", "pagination-query"],
  ["26", "busca-com-componente-client", "Busca com componente client", "medio", "client-search"],
  ["27", "usesearchparams-com-suspense", "useSearchParams com Suspense", "medio", "searchparams-suspense"],
  ["28", "combinar-busca-e-filtro", "Combinar busca e filtro", "medio", "search-filter"],
  ["29", "manter-filtros-ao-navegar", "Manter filtros ao navegar", "medio", "preserve-filters"],
  ["30", "resetar-filtros", "Resetar filtros", "medio", "reset-filters"],
  ["31", "criar-tipo-compartilhado", "Criar tipo compartilhado", "facil", "shared-type"],
  ["32", "separar-dados-e-helpers", "Separar dados e helpers", "facil", "separate-helpers"],
  ["33", "funcao-para-buscar-item-por-id", "Funcao para buscar item por id", "facil", "get-item-by-id"],
  ["34", "componente-de-lista-generica", "Componente de lista generica", "medio", "generic-list"],
  ["35", "componente-de-detalhe-generico", "Componente de detalhe generico", "medio", "generic-detail"],
  ["36", "aplicar-css-module-simples", "Aplicar CSS Module simples", "medio", "css-module"],
  ["37", "criar-badge-de-dificuldade", "Criar badge de dificuldade", "medio", "difficulty-badge"],
  ["38", "criar-layout-visual-de-cards", "Criar layout visual de cards", "medio", "card-layout"],
  ["39", "reutilizar-estrutura-generica", "Reutilizar estrutura generica", "medio", "reuse-generic"],
  ["40", "montar-mini-template-de-catalogo", "Montar mini template de catalogo", "medio", "catalog-template"],
  ["41", "catalogo-de-livros", "Catalogo de livros", "medio", "catalog-books"],
  ["42", "catalogo-de-filmes", "Catalogo de filmes", "medio", "catalog-movies"],
  ["43", "catalogo-de-cursos", "Catalogo de cursos", "medio", "catalog-courses"],
  ["44", "catalogo-com-destaque", "Catalogo com destaque", "medio", "catalog-highlight"],
  ["45", "catalogo-com-filtros-e-detalhe", "Catalogo com filtros e detalhe", "medio", "catalog-filter-detail"],
  ["46", "catalogo-com-rota-invalida-tratada", "Catalogo com rota invalida tratada", "medio", "catalog-invalid-route"],
  ["47", "catalogo-com-query-inicial", "Catalogo com query inicial", "medio", "catalog-initial-query"],
  ["48", "catalogo-com-componente-client-e-server-juntos", "Catalogo com componente client e server juntos", "medio", "catalog-client-server"],
  ["49", "refatoracao-de-desafio-anterior", "Refatoracao de desafio anterior", "medio", "catalog-refactor"],
  ["50", "mini-catalogo-completo", "Mini catalogo completo", "medio", "catalog-complete"],
];

const blockInfo = [
  {
    title: "1. Fundamentos de rota e JSX",
    ids: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
  },
  {
    title: "2. Dados locais e rotas dinamicas",
    ids: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
  },
  {
    title: "3. Query string e filtros simples",
    ids: ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  },
  {
    title: "4. Organizacao de projeto e reaproveitamento",
    ids: ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
  },
  {
    title: "5. Consolidacao em mini features",
    ids: ["41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],
  },
];

const metas = challengeMeta.map(([id, slug, title, level, kind]) => ({
  id,
  slug,
  title,
  level,
  kind,
}));

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trimStart(), "utf8");
}

function tsType(name = "Item") {
  return `export type ${name} = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};`;
}

function productData(exportName = "produtos", typeName = "Produto") {
  return `${tsType(typeName)}

export const ${exportName}: ${typeName}[] = [
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
];`;
}

function perfumeData() {
  return `${tsType("Perfume")}

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
];`;
}

function postData() {
  return `export type Post = {
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
];`;
}

function bookData() {
  return `${tsType("Livro")}

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
];`;
}

function movieData() {
  return `${tsType("Filme")}

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
];`;
}

function courseData() {
  return `${tsType("Curso")}

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
];`;
}

function genericTypes(typeName = "Produto") {
  return `export type ${typeName} = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  destaque?: boolean;
  dificuldade?: "muito facil" | "facil" | "medio";
};`;
}

function cssModule() {
  return `.page {
  width: min(960px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.5rem 0 3rem;
}

.heading {
  margin: 0;
  font-size: 2rem;
}

.subheading {
  margin: 0.35rem 0 0;
  opacity: 0.75;
}

.grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.card {
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  padding: 1rem;
  background: #fff;
}

.cardDestaque {
  border-color: #111;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
}

.meta {
  margin: 0.35rem 0 0;
  opacity: 0.7;
}

.description {
  margin: 0.7rem 0 0;
  line-height: 1.5;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.95rem;
}

.badge {
  border: 1px solid #b7b7b7;
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
}

.link {
  color: inherit;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.input,
.select {
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 0.55rem 0.75rem;
  font: inherit;
}
`;
}

function mdTemplate(meta, expectedFiles, objective, context, requirements, bonus, done, mistakes) {
  return `# ${meta.id} - ${meta.title}

## Nivel

${meta.level}

## Objetivo

${objective}

## Contexto

${context}

## Arquivos esperados

${expectedFiles.map((file) => `- ${file}`).join("\n")}

## Requisitos

${requirements.map((item) => `- ${item}`).join("\n")}

## Bonus opcional

${bonus.map((item) => `- ${item}`).join("\n")}

## Criterios de conclusao

${done.map((item) => `- ${item}`).join("\n")}

## Erros comuns

${mistakes.map((item) => `- ${item}`).join("\n")}
`;
}

function readme() {
  const intro = `# Desafios de Next 16 + React 19

Esta pasta organiza uma trilha local com 50 desafios progressivos para praticar o App Router atual do projeto.

## Visao geral da trilha

- 50 exercicios em portugues.
- Progressao de JSX basico ate um mini catalogo completo.
- Starter minimo em \`arquivos-iniciais/\`.
- Solucao isolada em \`respostas/\`.
- Foco em repeticao, variacao de padrao e leitura de codigo simples.

## Como usar os desafios

1. Escolha um desafio na ordem sugerida.
2. Leia o arquivo \`desafio.md\`.
3. Copie o conteudo de \`arquivos-iniciais/\` para o \`app/\` do projeto, e tambem para \`componentes/\` quando existir.
4. Resolva o exercicio sem abrir \`respostas/\`.
5. Compare sua solucao com a pasta \`respostas/\`.

## Ordem sugerida
`;

  const blocks = blockInfo
    .map((block) => {
      const items = metas
        .filter((meta) => block.ids.includes(meta.id))
        .map((meta) => `- ${meta.id} ${meta.title}`)
        .join("\n");

      return `### ${block.title}\n\n${items}`;
    })
    .join("\n\n");

  const outro = `
## Topicos cobertos

- rotas estaticas com \`page.tsx\`
- listas com \`map\` e \`key\`
- rotas dinamicas com \`params: Promise<{ id: string }>\`
- leitura de \`searchParams\` na page server
- filtros e ordenacao com query string
- \`useSearchParams\` em componente client com \`Suspense\`
- \`Link\` do \`next/link\`
- \`notFound()\` e \`not-found.tsx\`
- separacao entre dados, tipos, helpers e componentes
- CSS Modules simples

## Compatibilidade com Next 16

- Todo o material assume Next 16.2.2 com App Router.
- Nas rotas dinamicas, as solucoes usam \`params\` como Promise e fazem \`await params\`.
- Quando ha query string, as solucoes leem \`searchParams\` como Promise na pagina server.
- Quando o desafio pede leitura client-side, \`useSearchParams\` aparece somente em componentes client.
- Nos casos de rota invalida, a trilha prioriza \`notFound()\`.

## Documentacao local recomendada

Antes de resolver os desafios de rotas dinamicas, query string ou Suspense, compare sua implementacao com a documentacao local do projeto em:

- \`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md\`
- \`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/not-found.md\`
- \`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/not-found.md\`
- \`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-search-params.md\`
- \`node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md\`
`;

  return `${intro}${blocks}${outro}`;
}

function simpleListPage(withPrice = false, withCategory = false, highlight = false, conditional = false, empty = false, keyFix = false) {
  const extraFields = [];

  if (withPrice || highlight) {
    extraFields.push("preco: number;");
  }

  if (withCategory) {
    extraFields.push("categoria: string;");
  }

  if (conditional) {
    extraFields.push("emEstoque: boolean;");
  }

  const expensiveLine = highlight
    ? `  const produtoMaisCaro = produtos.reduce((maior, atual) => {
    return atual.preco > maior.preco ? atual : maior;
  }, produtos[0]);

`
    : "";

  const listBody = conditional
    ? `{produtos.map((produto) => (
        <li key={produto.id}>
          <strong>{produto.nome}</strong>{" "}
          {produto.emEstoque ? <span>disponivel</span> : <span>sem estoque</span>}
        </li>
      ))}`
    : empty
      ? `{produtos.length === 0 ? (
        <p>Nenhum item cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      )}`
      : `{produtos.map((produto) => (
        <li key={${keyFix ? "produto.id" : "produto.id"}}>
          ${withPrice || highlight ? `<strong>{produto.nome}</strong> - R$ {produto.preco}` : "{produto.nome}"}
          ${withCategory ? `<span> - {produto.categoria}</span>` : ""}
        </li>
      ))}`;

  return `type Produto = {
  id: number;
  nome: string;
${extraFields.map((field) => `  ${field}`).join("\n")}
};

const produtos: Produto[] = [
  ${
    conditional
      ? `{ id: 1, nome: "Notebook Delta", emEstoque: true },
  { id: 2, nome: "Mouse Pro", emEstoque: false },
  { id: 3, nome: "Teclado Studio", emEstoque: true }`
      : empty
        ? ``
        : withCategory && withPrice
          ? `{ id: 1, nome: "Notebook Delta", categoria: "tecnologia", preco: 4999 },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios", preco: 199 },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios", preco: 349 }`
          : withPrice || highlight
            ? `{ id: 1, nome: "Notebook Delta", preco: 4999 },
  { id: 2, nome: "Mouse Pro", preco: 199 },
  { id: 3, nome: "Teclado Studio", preco: 349 }`
            : withCategory
              ? `{ id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios" }`
              : `{ id: 1, nome: "Notebook Delta" },
  { id: 2, nome: "Mouse Pro" },
  { id: 3, nome: "Teclado Studio" }`
  }
];

export default function Page() {
${expensiveLine}${highlight ? `  return (
    <main>
      <h1>Lista com destaque</h1>
      <p>Item mais caro: {produtoMaisCaro.nome}</p>
      <ul>
        ${listBody}
      </ul>
    </main>
  );` : `  return (
    <main>
      <h1>${empty ? "Estado vazio" : "Lista de produtos"}</h1>
      ${empty ? listBody : `<ul>
        ${listBody}
      </ul>`}
    </main>
  );`}
}
`;
}

function listWithLinks(staticDetail = false) {
  if (!staticDetail) {
    return `import Link from "next/link";

const produtos = [
  { id: 1, nome: "Notebook Delta" },
  { id: 2, nome: "Mouse Pro" },
  { id: 3, nome: "Teclado Studio" },
];

export default function Page() {
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link href="/detalhe-estatico">${"${produto.nome}"}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
`;
  }

  return `import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Notebook Delta</h1>
      <p>Um produto estatico apenas para praticar JSX.</p>
      <Link href="/lista-com-links">Voltar para a lista</Link>
    </main>
  );
}
`;
}

function reusableCardComponent() {
  return `type CardProdutoProps = {
  nome: string;
  preco: number;
};

export default function CardProduto({ nome, preco }: CardProdutoProps) {
  return (
    <article>
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
    </article>
  );
}
`;
}

function reusableCardPage() {
  return `import CardProduto from "../../componentes/CardProduto";

const produtos = [
  { id: 1, nome: "Notebook Delta", preco: 4999 },
  { id: 2, nome: "Mouse Pro", preco: 199 },
  { id: 3, nome: "Teclado Studio", preco: 349 },
];

export default function Page() {
  return (
    <main>
      <h1>Cards de produtos</h1>
      <section>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} nome={produto.nome} preco={produto.preco} />
        ))}
      </section>
    </main>
  );
}
`;
}

function listPageFromData(route, exportName = "produtos", typeName = "Produto", withMeta = "preco") {
  const label =
    withMeta === "descricao"
      ? `<p>{item.descricao}</p>`
      : withMeta === "categoria"
        ? `<p>{item.categoria}</p>`
        : `<p>R$ {item.preco}</p>`;

  return `import Link from "next/link";
import { ${exportName} } from "./data/${exportName}";

export default function Page() {
  return (
    <main>
      <h1>${typeName}s</h1>
      <ul>
        {${exportName}.map((item) => (
          <li key={item.id}>
            <Link href="/${route}/${"${item.id}"}">{item.nome}</Link>
            ${label}
          </li>
        ))}
      </ul>
    </main>
  );
}
`;
}

function dynamicDetailPage(
  route,
  exportName = "produtos",
  itemName = "produto",
  backLabel = "Voltar para a lista",
  useNotFound = false,
  invalidCheck = true,
  showPrice = true,
) {
  return `import Link from "next/link";
${useNotFound ? `import { notFound } from "next/navigation";\n` : ""}import { ${exportName} } from "../data/${exportName}";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const ${itemName}Id = Number(id);

${invalidCheck ? `  if (Number.isNaN(${itemName}Id)) {
${useNotFound ? `    notFound();` : `    return <p>Id invalido.</p>;`}
  }

` : ""}  const ${itemName} = ${exportName}.find((item) => item.id === ${itemName}Id);

  if (!${itemName}) {
${useNotFound ? `    notFound();` : `    return <p>Item nao encontrado.</p>;`}
  }

  return (
    <main>
      <h1>{${itemName}.nome}</h1>
      {${itemName}.categoria ? <p>Categoria: {${itemName}.categoria}</p> : null}
      ${showPrice ? `{${itemName}.preco ? <p>Preco: R$ {${itemName}.preco}</p> : null}` : ""}
      {${itemName}.descricao ? <p>{${itemName}.descricao}</p> : null}
      <Link href="/${route}">${backLabel}</Link>
    </main>
  );
}
`;
}

function routeNotFoundPage(routeLabel = "catalogo") {
  return `import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2>Item nao encontrado</h2>
      <p>Confira a URL ou volte para a lista principal.</p>
      <Link href="/${routeLabel}">Voltar</Link>
    </main>
  );
}
`;
}

function searchPage(route, body) {
  return `type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia", preco: 4999 },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios", preco: 199 },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios", preco: 349 },
  { id: 4, nome: "Monitor View", categoria: "tecnologia", preco: 1299 },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
${body}
}
`;
}

function searchReadBody() {
  return `  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";

  return (
    <main>
      <h1>Leitura de searchParams</h1>
      <p>Busca atual: {busca || "nenhuma"}</p>
      <p>Total de itens locais: {produtos.length}</p>
    </main>
  );`;
}

function filterNameBody() {
  return `  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca.toLowerCase() : "";
  const itens = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca),
  );

  return (
    <main>
      <h1>Filtro por nome</h1>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );`;
}

function filterCategoryBody() {
  return `  const query = await searchParams;
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const itens = categoria
    ? produtos.filter((produto) => produto.categoria === categoria)
    : produtos;

  return (
    <main>
      <h1>Filtro por categoria</h1>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.categoria}
          </li>
        ))}
      </ul>
    </main>
  );`;
}

function sortPriceBody() {
  return `  const query = await searchParams;
  const ordem = query.ordem === "desc" ? "desc" : "asc";
  const itens = [...produtos].sort((a, b) => {
    return ordem === "asc" ? a.preco - b.preco : b.preco - a.preco;
  });

  return (
    <main>
      <h1>Ordenacao por preco</h1>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </main>
  );`;
}

function paginationBody() {
  return `  const query = await searchParams;
  const pagina = Number(typeof query.pagina === "string" ? query.pagina : "1");
  const paginaAtual = Number.isNaN(pagina) || pagina < 1 ? 1 : pagina;
  const porPagina = 2;
  const inicio = (paginaAtual - 1) * porPagina;
  const itens = produtos.slice(inicio, inicio + porPagina);

  return (
    <main>
      <h1>Paginacao fake</h1>
      <p>Pagina atual: {paginaAtual}</p>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );`;
}

function clientSearchComponent() {
  return `"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function BuscaProdutos() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [valor, setValor] = useState(searchParams.get("busca") ?? "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (valor) {
      params.set("busca", valor);
    } else {
      params.delete("busca");
    }

    router.push(\`\${pathname}?\${params.toString()}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={valor}
        onChange={(event) => setValor(event.target.value)}
        placeholder="Digite um nome"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
`;
}

function clientSearchPage() {
  return `import BuscaProdutos from "../../componentes/BuscaProdutos";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta" },
  { id: 2, nome: "Mouse Pro" },
  { id: 3, nome: "Teclado Studio" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca.toLowerCase() : "";
  const itens = produtos.filter((produto) => produto.nome.toLowerCase().includes(busca));

  return (
    <main>
      <h1>Busca com client component</h1>
      <BuscaProdutos />
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );
}
`;
}

function suspenseSearchComponent() {
  return `"use client";

import { useSearchParams } from "next/navigation";

export default function ResumoBusca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca");

  return <p>Busca client atual: {busca || "nenhuma"}</p>;
}
`;
}

function suspenseSearchPage() {
  return `import { Suspense } from "react";
import ResumoBusca from "../../componentes/ResumoBusca";

function FallbackBusca() {
  return <p>Carregando busca...</p>;
}

export default function Page() {
  return (
    <main>
      <h1>useSearchParams com Suspense</h1>
      <Suspense fallback={<FallbackBusca />}>
        <ResumoBusca />
      </Suspense>
    </main>
  );
}
`;
}

function genericCardComponent(useStyles = false, includeBadge = false) {
  return `import Link from "next/link";
${useStyles ? `import styles from "../app/catalogo/styles.module.css";\n` : ""}type CardCatalogoProps = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  ${useStyles ? `destaque?: boolean;` : ""}
  ${includeBadge ? `dificuldade?: "muito facil" | "facil" | "medio";` : ""}
};

export default function CardCatalogo({
  id,
  nome,
  categoria,
  preco,
  descricao,
  ${useStyles ? `destaque = false,` : ""}
  ${includeBadge ? `dificuldade,` : ""}
}: CardCatalogoProps) {
  return (
    <article${useStyles ? ` className={\`\${styles.card} \${destaque ? styles.cardDestaque : ""}\`}` : ""}>
      <h2>{nome}</h2>
      <p>${useStyles ? `{categoria}` : `{categoria}`}</p>
      <p>${useStyles ? `{descricao}` : `{descricao}`}</p>
      <div${useStyles ? ` className={styles.row}` : ""}>
        <span>R$ {preco}</span>
        ${includeBadge ? `{dificuldade ? <span${useStyles ? ` className={styles.badge}` : ""}>{dificuldade}</span> : null}` : ""}
        <Link${useStyles ? ` className={styles.link}` : ""} href={\`/catalogo/\${id}\`}>
          Ver detalhe
        </Link>
      </div>
    </article>
  );
}
`;
}

function genericListPage(dataImport = "produtos", importPath = "./data", useComponent = false, useStyles = false, title = "Catalogo") {
  return `import { ${dataImport} } from "${importPath}/${dataImport}";
${useComponent ? `import CardCatalogo from "../../componentes/CardCatalogo";\n` : ""}${useStyles ? `import styles from "./styles.module.css";\n` : ""}export default function Page() {
  return (
    <main${useStyles ? ` className={styles.page}` : ""}>
      <h1${useStyles ? ` className={styles.heading}` : ""}>${title}</h1>
      ${useStyles ? `<p className={styles.subheading}>Base para lista e detalhe.</p>` : ""}
      <section${useStyles ? ` className={styles.grid}` : ""}>
        {${dataImport}.map((item) =>
${useComponent ? `          <CardCatalogo key={item.id} {...item} />` : `          <article key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.categoria}</p>
            <p>R$ {item.preco}</p>
          </article>`}
        )}
      </section>
    </main>
  );
}
`;
}

function genericDetailComponent(useStyles = false) {
  return `import Link from "next/link";
${useStyles ? `import styles from "../app/catalogo/styles.module.css";\n` : ""}type DetalheCatalogoProps = {
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
};

export default function DetalheCatalogo({
  nome,
  categoria,
  preco,
  descricao,
}: DetalheCatalogoProps) {
  return (
    <article${useStyles ? ` className={styles.card}` : ""}>
      <h1>{nome}</h1>
      <p>${useStyles ? `{categoria}` : `{categoria}`}</p>
      <p>{descricao}</p>
      <p>R$ {preco}</p>
      <Link${useStyles ? ` className={styles.link}` : ""} href="/catalogo">
        Voltar para a lista
      </Link>
    </article>
  );
}
`;
}

function genericDetailPage(useComponent = false, useNotFound = false) {
  return `import ${useNotFound ? `{ notFound } from "next/navigation";\n` : ""}${useComponent ? `DetalheCatalogo from "../../../componentes/DetalheCatalogo";\n` : ""}import { produtos } from "../data/produtos";
${useComponent ? "" : 'import Link from "next/link";\n'}type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const itemId = Number(id);

${useNotFound ? `  if (Number.isNaN(itemId)) {
    notFound();
  }

` : ""}  const item = produtos.find((produto) => produto.id === itemId);

  if (!item) {
${useNotFound ? `    notFound();` : `    return <p>Item nao encontrado.</p>;`}
  }

  return (
    <main>
${useComponent ? `      <DetalheCatalogo {...item} />` : `      <h1>{item.nome}</h1>
      <p>{item.categoria}</p>
      <p>{item.descricao}</p>
      <p>R$ {item.preco}</p>
      <Link href="/catalogo">Voltar para a lista</Link>`}
    </main>
  );
}
`;
}

function filterHelpersFile(typeName = "Produto") {
  return `import type { ${typeName} } from "./types";

export function filterItemsByName(itens: ${typeName}[], termo: string) {
  const valor = termo.trim().toLowerCase();

  if (!valor) {
    return itens;
  }

  return itens.filter((item) => item.nome.toLowerCase().includes(valor));
}

export function filterItemsByCategory(itens: ${typeName}[], categoria: string) {
  if (!categoria) {
    return itens;
  }

  return itens.filter((item) => item.categoria === categoria);
}

export function sortItemsByPrice(itens: ${typeName}[], ordem: "asc" | "desc") {
  return [...itens].sort((a, b) => {
    return ordem === "desc" ? b.preco - a.preco : a.preco - b.preco;
  });
}
`;
}

function fullCatalogListPage(dataImport, title) {
  return `import Link from "next/link";
import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import { ${dataImport} } from "./data";
import styles from "./styles.module.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const ordem = query.ordem === "desc" ? "desc" : "asc";

  const filtrados = sortItemsByPrice(
    filterItemsByCategory(filterItemsByName(${dataImport}, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>${title}</h1>
      <p className={styles.subheading}>Pratique lista, query string e detalhe.</p>

      <div className={styles.filters}>
        <Link className={styles.link} href="?busca=next">
          Buscar next
        </Link>
        <Link className={styles.link} href="?categoria=frontend">
          Filtrar frontend
        </Link>
        <Link className={styles.link} href="?ordem=desc">
          Ordem desc
        </Link>
      </div>

      <section className={styles.grid}>
        {filtrados.map((item) => (
          <article
            key={item.id}
            className={\`\${styles.card} \${item.destaque ? styles.cardDestaque : ""}\`}
          >
            <h2>{item.nome}</h2>
            <p className={styles.meta}>{item.categoria}</p>
            <p className={styles.description}>{item.descricao}</p>
            <div className={styles.row}>
              <span>R$ {item.preco}</span>
              <Link className={styles.link} href={\`/catalogo/\${item.id}\`}>
                Ver detalhe
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
`;
}

function fullCatalogDetailPage(dataImport, route = "catalogo") {
  return `import Link from "next/link";
import { notFound } from "next/navigation";
import { ${dataImport} } from "../data";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const itemId = Number(id);

  if (Number.isNaN(itemId)) {
    notFound();
  }

  const item = ${dataImport}.find((entry) => entry.id === itemId);

  if (!item) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <article className={styles.card}>
        <h1 className={styles.heading}>{item.nome}</h1>
        <p className={styles.meta}>{item.categoria}</p>
        <p className={styles.description}>{item.descricao}</p>
        <div className={styles.row}>
          <span>R$ {item.preco}</span>
          <Link className={styles.link} href="/${route}">
            Voltar para lista
          </Link>
        </div>
      </article>
    </main>
  );
}
`;
}

function filterControlsClient() {
  return `"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FiltrosClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [busca, setBusca] = useState(searchParams.get("busca") ?? "");

  function aplicar(categoria: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (busca) {
      params.set("busca", busca);
    } else {
      params.delete("busca");
    }

    if (categoria) {
      params.set("categoria", categoria);
    } else {
      params.delete("categoria");
    }

    router.push(\`\${pathname}?\${params.toString()}\`);
  }

  return (
    <div>
      <input
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        placeholder="Buscar item"
      />
      <button type="button" onClick={() => aplicar("frontend")}>
        Frontend
      </button>
      <button type="button" onClick={() => aplicar("")}>
        Limpar categoria
      </button>
    </div>
  );
}
`;
}

function searchPreservePage() {
  return `import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
];

function buildQueryString(busca: string, categoria: string) {
  const params = new URLSearchParams();

  if (busca) {
    params.set("busca", busca);
  }

  if (categoria) {
    params.set("categoria", categoria);
  }

  return params.toString();
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const queryString = buildQueryString(busca, categoria);

  return (
    <main>
      <h1>Manter filtros ao navegar</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link href={\`/catalogo/${"${produto.id}"}\${queryString ? \`?\${queryString}\` : ""}\`}>
              {produto.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
`;
}

function resetFiltersPage() {
  return `import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca.toLowerCase() : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";

  const filtrados = produtos.filter((produto) => {
    const bateBusca = busca ? produto.nome.toLowerCase().includes(busca) : true;
    const bateCategoria = categoria ? produto.categoria === categoria : true;
    return bateBusca && bateCategoria;
  });

  return (
    <main>
      <h1>Resetar filtros</h1>
      <Link href="/catalogo">Limpar todos os filtros</Link>
      <ul>
        {filtrados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </main>
  );
}
`;
}

function dynamicCategoryPage() {
  return `import Link from "next/link";
import { notFound } from "next/navigation";

const produtos = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia" },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios" },
];

type PageProps = {
  params: Promise<{ categoria: string; id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { categoria, id } = await params;
  const produtoId = Number(id);

  if (Number.isNaN(produtoId)) {
    notFound();
  }

  const produto = produtos.find(
    (item) => item.id === produtoId && item.categoria === categoria,
  );

  if (!produto) {
    notFound();
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>Categoria: {produto.categoria}</p>
      <Link href="/catalogo-por-categoria">Voltar</Link>
    </main>
  );
}
`;
}

function starterPlaceholder(route, note) {
  return `export default function Page() {
  return (
    <main>
      <h1>${route}</h1>
      <p>${note}</p>
    </main>
  );
}
`;
}

function filesFor(meta) {
  const folderName = `${meta.id}-${meta.slug}`;
  const base = {
    starter: {},
    answer: {},
    notes: null,
  };

  switch (meta.kind) {
    case "simple-list":
      base.starter[`app/lista-simples/page.tsx`] = starterPlaceholder("Lista simples", "Crie uma lista com tres itens.");
      base.answer[`app/lista-simples/page.tsx`] = simpleListPage();
      break;
    case "list-price":
      base.starter[`app/lista-com-preco/page.tsx`] = starterPlaceholder("Lista com preco", "Mostre nome e preco.");
      base.answer[`app/lista-com-preco/page.tsx`] = simpleListPage(true);
      break;
    case "list-category":
      base.starter[`app/lista-com-categoria/page.tsx`] = starterPlaceholder("Lista com categoria", "Mostre nome e categoria.");
      base.answer[`app/lista-com-categoria/page.tsx`] = simpleListPage(false, true);
      break;
    case "static-detail":
      base.starter[`app/detalhe-estatico/page.tsx`] = starterPlaceholder("Detalhe estatico", "Monte uma pagina de detalhe fixa.");
      base.answer[`app/detalhe-estatico/page.tsx`] = listWithLinks(true);
      break;
    case "links":
      base.starter[`app/lista-com-links/page.tsx`] = starterPlaceholder("Lista com links", "Adicione Link para uma pagina estatica.");
      base.starter[`app/detalhe-estatico/page.tsx`] = starterPlaceholder("Detalhe estatico", "Receba o link vindo da lista.");
      base.answer[`app/lista-com-links/page.tsx`] = listWithLinks();
      base.answer[`app/detalhe-estatico/page.tsx`] = listWithLinks(true);
      break;
    case "reusable-card":
      base.starter[`app/cards-produto/page.tsx`] = starterPlaceholder("Cards", "Extraia um card reutilizavel.");
      base.starter[`componentes/CardProduto.tsx`] = reusableCardComponent();
      base.answer[`app/cards-produto/page.tsx`] = reusableCardPage();
      base.answer[`componentes/CardProduto.tsx`] = reusableCardComponent();
      break;
    case "conditional":
      base.starter[`app/renderizacao-condicional/page.tsx`] = starterPlaceholder("Condicional", "Renderize disponibilidade.");
      base.answer[`app/renderizacao-condicional/page.tsx`] = simpleListPage(false, false, false, true);
      break;
    case "empty-state":
      base.starter[`app/estado-vazio/page.tsx`] = starterPlaceholder("Estado vazio", "Mostre mensagem quando a lista estiver vazia.");
      base.answer[`app/estado-vazio/page.tsx`] = simpleListPage(false, false, false, false, true);
      break;
    case "highlight-expensive":
      base.starter[`app/lista-com-destaque/page.tsx`] = starterPlaceholder("Destaque", "Descubra o item mais caro.");
      base.answer[`app/lista-com-destaque/page.tsx`] = simpleListPage(false, false, true);
      break;
    case "map-key":
      base.starter[`app/lista-com-key/page.tsx`] = starterPlaceholder("Map e key", "Use map com key correta.");
      base.answer[`app/lista-com-key/page.tsx`] = simpleListPage(false, false, false, false, false, true);
      break;
    case "data-array":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Catalogo", "Leia dados de um arquivo data.");
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = listPageFromData("catalogo");
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "dynamic-id":
    case "convert-id":
    case "item-not-found":
    case "back-link":
    case "detail-product":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Catalogo", "Monte a lista com links por id.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Leia params e mostre o item.");
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = listPageFromData("catalogo");
      base.answer[`app/catalogo/[id]/page.tsx`] = dynamicDetailPage(
        "catalogo",
        "produtos",
        "produto",
        "Voltar para a lista",
        false,
        meta.kind !== "dynamic-id" ? true : false,
      );
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "detail-perfume":
      base.starter[`app/perfumes/page.tsx`] = starterPlaceholder("Perfumes", "Monte a lista de perfumes.");
      base.starter[`app/perfumes/[id]/page.tsx`] = starterPlaceholder("Perfume", "Mostre o perfume pelo id.");
      base.starter[`app/perfumes/data/perfumes.ts`] = perfumeData();
      base.answer[`app/perfumes/page.tsx`] = listPageFromData("perfumes", "perfumes", "Perfume");
      base.answer[`app/perfumes/[id]/page.tsx`] = dynamicDetailPage("perfumes", "perfumes", "perfume");
      base.answer[`app/perfumes/data/perfumes.ts`] = perfumeData();
      break;
    case "detail-post":
      base.starter[`app/posts/page.tsx`] = starterPlaceholder("Posts", "Liste posts locais.");
      base.starter[`app/posts/[id]/page.tsx`] = starterPlaceholder("Post", "Crie a pagina de detalhe.");
      base.starter[`app/posts/data/posts.ts`] = postData();
      base.answer[`app/posts/page.tsx`] = listPageFromData("posts", "posts", "Post", "descricao");
      base.answer[`app/posts/[id]/page.tsx`] = dynamicDetailPage(
        "posts",
        "posts",
        "post",
        "Voltar para a lista",
        false,
        true,
        false,
      );
      base.answer[`app/posts/data/posts.ts`] = postData();
      break;
    case "dynamic-category-id":
      base.starter[`app/catalogo-por-categoria/[categoria]/[id]/page.tsx`] = starterPlaceholder("Categoria e id", "Use dois params.");
      base.answer[`app/catalogo-por-categoria/[categoria]/[id]/page.tsx`] = dynamicCategoryPage();
      break;
    case "not-found":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Catalogo", "Liste os produtos.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Use notFound() quando necessario.");
      base.starter[`app/catalogo/not-found.tsx`] = routeNotFoundPage("catalogo");
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = listPageFromData("catalogo");
      base.answer[`app/catalogo/[id]/page.tsx`] = dynamicDetailPage("catalogo", "produtos", "produto", "Voltar para a lista", true);
      base.answer[`app/catalogo/not-found.tsx`] = routeNotFoundPage("catalogo");
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "search-read":
      base.starter[`app/filtros-basicos/page.tsx`] = starterPlaceholder("searchParams", "Leia a query busca.");
      base.answer[`app/filtros-basicos/page.tsx`] = searchPage("filtros-basicos", searchReadBody());
      break;
    case "filter-name":
      base.starter[`app/filtro-por-nome/page.tsx`] = starterPlaceholder("Filtro", "Filtre pelo nome recebido na query.");
      base.answer[`app/filtro-por-nome/page.tsx`] = searchPage("filtro-por-nome", filterNameBody());
      break;
    case "filter-category":
      base.starter[`app/filtro-por-categoria/page.tsx`] = starterPlaceholder("Filtro", "Filtre pela categoria recebida na query.");
      base.answer[`app/filtro-por-categoria/page.tsx`] = searchPage("filtro-por-categoria", filterCategoryBody());
      break;
    case "sort-price":
      base.starter[`app/ordenacao-por-preco/page.tsx`] = starterPlaceholder("Ordenacao", "Ordene por preco.");
      base.answer[`app/ordenacao-por-preco/page.tsx`] = searchPage("ordenacao-por-preco", sortPriceBody());
      break;
    case "pagination-query":
      base.starter[`app/paginacao-fake/page.tsx`] = starterPlaceholder("Paginacao", "Use ?pagina=1 para controlar a lista.");
      base.answer[`app/paginacao-fake/page.tsx`] = searchPage("paginacao-fake", paginationBody());
      break;
    case "client-search":
      base.starter[`app/busca-client/page.tsx`] = starterPlaceholder("Busca client", "Monte uma busca com componente client.");
      base.starter[`componentes/BuscaProdutos.tsx`] = clientSearchComponent();
      base.answer[`app/busca-client/page.tsx`] = clientSearchPage();
      base.answer[`componentes/BuscaProdutos.tsx`] = clientSearchComponent();
      break;
    case "searchparams-suspense":
      base.starter[`app/resumo-busca/page.tsx`] = starterPlaceholder("Suspense", "Envolva o componente client em Suspense.");
      base.starter[`componentes/ResumoBusca.tsx`] = suspenseSearchComponent();
      base.answer[`app/resumo-busca/page.tsx`] = suspenseSearchPage();
      base.answer[`componentes/ResumoBusca.tsx`] = suspenseSearchComponent();
      break;
    case "search-filter":
      base.starter[`app/filtros-combinados/page.tsx`] = starterPlaceholder("Busca e filtro", "Combine busca e categoria.");
      base.answer[`app/filtros-combinados/page.tsx`] = searchPage("filtros-combinados", `  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca.toLowerCase() : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";

  const itens = produtos.filter((produto) => {
    const bateBusca = busca ? produto.nome.toLowerCase().includes(busca) : true;
    const bateCategoria = categoria ? produto.categoria === categoria : true;
    return bateBusca && bateCategoria;
  });

  return (
    <main>
      <h1>Busca + filtro</h1>
      <ul>
        {itens.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.categoria}
          </li>
        ))}
      </ul>
    </main>
  );`);
      break;
    case "preserve-filters":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Manter filtros", "Passe a query atual para o detalhe.");
      base.answer[`app/catalogo/page.tsx`] = searchPreservePage();
      break;
    case "reset-filters":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Reset", "Adicione um link para limpar filtros.");
      base.answer[`app/catalogo/page.tsx`] = resetFiltersPage();
      break;
    case "shared-type":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Tipo compartilhado", "Extraia o tipo para um arquivo.");
      base.starter[`app/catalogo/types.ts`] = genericTypes();
      base.starter[`app/catalogo/data.ts`] = productData("produtos", "Produto");
      base.answer[`app/catalogo/page.tsx`] = `import { produtos } from "./data";

export default function Page() {
  return (
    <main>
      <h1>Catalogo tipado</h1>
      <section>
        {produtos.map((item) => (
          <article key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.categoria}</p>
            <p>R$ {item.preco}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
`;
      base.answer[`app/catalogo/types.ts`] = genericTypes();
      base.answer[`app/catalogo/data.ts`] = `import type { Produto } from "./types";

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
];`;
      break;
    case "separate-helpers":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Separar helpers", "Crie um helper simples.");
      base.starter[`app/catalogo/types.ts`] = genericTypes();
      base.starter[`app/catalogo/data.ts`] = `import type { Produto } from "./types";

export const produtos: Produto[] = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia", preco: 4999, descricao: "Modelo para estudar e trabalhar." },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios", preco: 199, descricao: "Mouse leve para uso diario." },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios", preco: 349, descricao: "Teclado compacto com layout padrao." },
];`;
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile();
      base.answer[`app/catalogo/page.tsx`] = `import { produtos } from "./data";
import { filterItemsByName } from "./helpers";

const itens = filterItemsByName(produtos, "mouse");

export default function Page() {
  return (
    <main>
      <h1>Separando dados e helpers</h1>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </main>
  );
}
`;
      base.answer[`app/catalogo/types.ts`] = genericTypes();
      base.answer[`app/catalogo/data.ts`] = base.starter[`app/catalogo/data.ts`];
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile();
      break;
    case "get-item-by-id":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("getItemById", "Use um helper para buscar pelo id.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Leia o helper.");
      base.starter[`app/catalogo/types.ts`] = genericTypes();
      base.starter[`app/catalogo/data.ts`] = `import type { Produto } from "./types";

export const produtos: Produto[] = [
  { id: 1, nome: "Notebook Delta", categoria: "tecnologia", preco: 4999, descricao: "Modelo para estudar e trabalhar." },
  { id: 2, nome: "Mouse Pro", categoria: "acessorios", preco: 199, descricao: "Mouse leve para uso diario." },
  { id: 3, nome: "Teclado Studio", categoria: "acessorios", preco: 349, descricao: "Teclado compacto com layout padrao." },
];`;
      base.starter[`app/catalogo/helpers.ts`] = `import { produtos } from "./data";

export function getItemById(id: number) {
  return produtos.find((produto) => produto.id === id);
}
`;
      base.answer[`app/catalogo/page.tsx`] = `import Link from "next/link";
import { produtos } from "./data";

export default function Page() {
  return (
    <main>
      <h1>Catalogo com getItemById</h1>
      <ul>
        {produtos.map((item) => (
          <li key={item.id}>
            <Link href={\`/catalogo/\${item.id}\`}>{item.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
`;
      base.answer[`app/catalogo/[id]/page.tsx`] = `import Link from "next/link";
import { getItemById } from "../helpers";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const produto = getItemById(Number(id));

  if (!produto) {
    return <p>Item nao encontrado.</p>;
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <Link href="/catalogo">Voltar</Link>
    </main>
  );
}
`;
      base.answer[`app/catalogo/types.ts`] = base.starter[`app/catalogo/types.ts`];
      base.answer[`app/catalogo/data.ts`] = base.starter[`app/catalogo/data.ts`];
      base.answer[`app/catalogo/helpers.ts`] = base.starter[`app/catalogo/helpers.ts`];
      break;
    case "generic-list":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Lista generica", "Extraia o card da lista.");
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = genericListPage("produtos", "./data", true);
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "generic-detail":
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe generico", "Extraia o artigo de detalhe.");
      base.starter[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/[id]/page.tsx`] = genericDetailPage(true);
      base.answer[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "css-module":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("CSS Module", "Aplique classes simples.");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = genericListPage("produtos", "./data", false, true);
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "difficulty-badge":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Badge", "Mostre a dificuldade em um badge.");
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = genericListPage("produtos", "./data", true, true);
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "card-layout":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Layout de cards", "Use grid e destaque visual.");
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = genericListPage("produtos", "./data", true, true, "Catalogo com cards");
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "reuse-generic":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Estrutura generica", "Monte lista e detalhe reaproveitando o mesmo estilo.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Reaproveite o estilo no detalhe.");
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.starter[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`app/catalogo/page.tsx`] = genericListPage("produtos", "./data", true, true, "Estrutura generica");
      base.answer[`app/catalogo/[id]/page.tsx`] = genericDetailPage(true);
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.answer[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      break;
    case "catalog-template":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Mini template", "Una lista, detalhe e estilo.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Reaproveite a estrutura.");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.starter[`app/catalogo/data/produtos.ts`] = productData();
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.starter[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.answer[`app/catalogo/page.tsx`] = genericListPage("produtos", "./data", true, true, "Mini template de catalogo");
      base.answer[`app/catalogo/[id]/page.tsx`] = genericDetailPage(true);
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/data/produtos.ts`] = productData();
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.answer[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      break;
    case "catalog-books":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Livros", "Crie um catalogo de livros.");
      base.starter[`app/catalogo/data.ts`] = bookData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Livro");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Livro");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("livros", "Catalogo de livros");
      base.answer[`app/catalogo/data.ts`] = bookData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Livro");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Livro");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-movies":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Filmes", "Crie um catalogo de filmes.");
      base.starter[`app/catalogo/data.ts`] = movieData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Filme");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Filme");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("filmes", "Catalogo de filmes");
      base.answer[`app/catalogo/data.ts`] = movieData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Filme");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Filme");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-courses":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Cursos", "Crie um catalogo de cursos.");
      base.starter[`app/catalogo/data.ts`] = courseData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("cursos", "Catalogo de cursos");
      base.answer[`app/catalogo/data.ts`] = courseData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-highlight":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Destaque", "Mostre item em destaque.");
      base.starter[`app/catalogo/data.ts`] = courseData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("cursos", "Catalogo com destaque");
      base.answer[`app/catalogo/data.ts`] = courseData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-filter-detail":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Filtros + detalhe", "Monte lista filtrada e detalhe.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Leia o id da URL.");
      base.starter[`app/catalogo/data.ts`] = bookData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Livro");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Livro");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("livros", "Catalogo com filtros");
      base.answer[`app/catalogo/[id]/page.tsx`] = fullCatalogDetailPage("livros");
      base.answer[`app/catalogo/data.ts`] = bookData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Livro");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Livro");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.notes = `# Observacoes

- Este desafio combina pela primeira vez lista filtrada e detalhe dinamico.
- Compare a solucao com \`app/generica/page.tsx\` e \`app/generica/[id]/page.tsx\`.`;
      break;
    case "catalog-invalid-route":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Rota invalida", "Use notFound() no detalhe.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Trate ids invalidos.");
      base.starter[`app/catalogo/not-found.tsx`] = routeNotFoundPage("catalogo");
      base.starter[`app/catalogo/data.ts`] = movieData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Filme");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Filme");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("filmes", "Catalogo com rota invalida tratada");
      base.answer[`app/catalogo/[id]/page.tsx`] = fullCatalogDetailPage("filmes");
      base.answer[`app/catalogo/not-found.tsx`] = routeNotFoundPage("catalogo");
      base.answer[`app/catalogo/data.ts`] = movieData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Filme");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Filme");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-initial-query":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Query inicial", "Leia busca e categoria vindas da URL.");
      base.starter[`app/catalogo/data.ts`] = courseData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = fullCatalogListPage("cursos", "Catalogo com query inicial");
      base.answer[`app/catalogo/data.ts`] = courseData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-client-server":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Client + server", "Misture filtros client e lista server.");
      base.starter[`componentes/FiltrosClient.tsx`] = filterControlsClient();
      base.starter[`app/catalogo/data.ts`] = courseData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = `import { Suspense } from "react";
import FiltrosClient from "../../componentes/FiltrosClient";
import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import { cursos } from "./data";
import styles from "./styles.module.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function FallbackFiltros() {
  return <p>Carregando filtros...</p>;
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const ordem = query.ordem === "desc" ? "desc" : "asc";

  const itens = sortItemsByPrice(
    filterItemsByCategory(filterItemsByName(cursos, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo com client e server juntos</h1>
      <Suspense fallback={<FallbackFiltros />}>
        <FiltrosClient />
      </Suspense>
      <section className={styles.grid}>
        {itens.map((item) => (
          <article key={item.id} className={styles.card}>
            <h2>{item.nome}</h2>
            <p className={styles.meta}>{item.categoria}</p>
            <p className={styles.description}>{item.descricao}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
`;
      base.answer[`componentes/FiltrosClient.tsx`] = filterControlsClient();
      base.answer[`app/catalogo/data.ts`] = courseData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Curso");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.notes = `# Observacoes

- A pagina continua server component.
- O componente client atualiza a URL e a pagina refaz o filtro no servidor.
- O uso de \`Suspense\` aqui ajuda a manter o padrao recomendado para leitura client-side de query.`;
      break;
    case "catalog-refactor":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Refatoracao", "Extraia card, helpers e estilos.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Reaproveite a mesma base.");
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.starter[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.starter[`app/catalogo/data.ts`] = bookData();
      base.starter[`app/catalogo/helpers.ts`] = filterHelpersFile("Livro");
      base.starter[`app/catalogo/types.ts`] = genericTypes("Livro");
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = `import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import CardCatalogo from "../../componentes/CardCatalogo";
import { livros } from "./data";
import styles from "./styles.module.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const ordem = query.ordem === "desc" ? "desc" : "asc";

  const itens = sortItemsByPrice(
    filterItemsByCategory(filterItemsByName(livros, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Catalogo refatorado</h1>
      <section className={styles.grid}>
        {itens.map((item) => (
          <CardCatalogo key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
`;
      base.answer[`app/catalogo/[id]/page.tsx`] = `import { notFound } from "next/navigation";
import DetalheCatalogo from "../../../componentes/DetalheCatalogo";
import { livros } from "../data";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const livroId = Number(id);

  if (Number.isNaN(livroId)) {
    notFound();
  }

  const livro = livros.find((item) => item.id === livroId);

  if (!livro) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <DetalheCatalogo {...livro} />
    </main>
  );
}
`;
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.answer[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.answer[`app/catalogo/data.ts`] = bookData();
      base.answer[`app/catalogo/helpers.ts`] = filterHelpersFile("Livro");
      base.answer[`app/catalogo/types.ts`] = genericTypes("Livro");
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      break;
    case "catalog-complete":
      base.starter[`app/catalogo/page.tsx`] = starterPlaceholder("Mini catalogo completo", "Junte lista, filtros, detalhe e estilos.");
      base.starter[`app/catalogo/[id]/page.tsx`] = starterPlaceholder("Detalhe", "Use params como Promise e notFound().");
      base.starter[`app/catalogo/not-found.tsx`] = routeNotFoundPage("catalogo");
      base.starter[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.starter[`componentes/FiltrosClient.tsx`] = filterControlsClient();
      base.starter[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.starter[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.starter[`app/catalogo/data.ts`] = courseData();
      base.starter[`app/catalogo/helpers.ts`] = `import type { Curso } from "./types";
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
`;
      base.starter[`app/catalogo/styles.module.css`] = cssModule();
      base.answer[`app/catalogo/page.tsx`] = `import { Suspense } from "react";
import CardCatalogo from "../../componentes/CardCatalogo";
import FiltrosClient from "../../componentes/FiltrosClient";
import { cursos } from "./data";
import { filterItemsByCategory, filterItemsByName, sortItemsByPrice } from "./helpers";
import styles from "./styles.module.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function FallbackFiltros() {
  return <p>Carregando filtros...</p>;
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const busca = typeof query.busca === "string" ? query.busca : "";
  const categoria = typeof query.categoria === "string" ? query.categoria : "";
  const ordem = query.ordem === "desc" ? "desc" : "asc";

  const itens = sortItemsByPrice(
    filterItemsByCategory(filterItemsByName(cursos, busca), categoria),
    ordem,
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Mini catalogo completo</h1>
      <p className={styles.subheading}>
        Lista, query string, detalhe, tipagem, estilos e organizacao.
      </p>

      <Suspense fallback={<FallbackFiltros />}>
        <FiltrosClient />
      </Suspense>

      <section className={styles.grid}>
        {itens.map((item) => (
          <CardCatalogo key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
`;
      base.answer[`app/catalogo/[id]/page.tsx`] = `import { notFound } from "next/navigation";
import DetalheCatalogo from "../../../componentes/DetalheCatalogo";
import { getItemById } from "../helpers";
import styles from "../styles.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const cursoId = Number(id);

  if (Number.isNaN(cursoId)) {
    notFound();
  }

  const curso = getItemById(cursoId);

  if (!curso) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <DetalheCatalogo {...curso} />
    </main>
  );
}
`;
      base.answer[`app/catalogo/not-found.tsx`] = routeNotFoundPage("catalogo");
      base.answer[`componentes/CardCatalogo.tsx`] = genericCardComponent(true, true);
      base.answer[`componentes/FiltrosClient.tsx`] = filterControlsClient();
      base.answer[`componentes/DetalheCatalogo.tsx`] = genericDetailComponent(true);
      base.answer[`app/catalogo/types.ts`] = genericTypes("Curso");
      base.answer[`app/catalogo/data.ts`] = courseData();
      base.answer[`app/catalogo/helpers.ts`] = base.starter[`app/catalogo/helpers.ts`];
      base.answer[`app/catalogo/styles.module.css`] = cssModule();
      base.notes = `# Observacoes

- Esta solucao fecha a trilha com a mesma linha pedagogica de \`app/generica\`.
- \`searchParams\` ficam na page server.
- \`useSearchParams\` fica apenas no componente client.
- \`notFound()\` cobre ids invalidos e itens ausentes.`;
      break;
    default:
      throw new Error(`Tipo nao tratado: ${meta.kind}`);
  }

  return { folderName, ...base };
}

function markdownFor(meta, generated) {
  const expectedFiles = [
    ...Object.keys(generated.starter).map((file) => `arquivos-iniciais/${file}`),
    ...Object.keys(generated.answer).map((file) => `respostas/${file}`),
    ...(generated.notes ? ["respostas/observacoes.md"] : []),
  ];

  return mdTemplate(
    meta,
    expectedFiles,
    `Praticar ${meta.title.toLowerCase()} usando o padrao atual do App Router do projeto.`,
    `Este exercicio faz parte da trilha local de Next 16. Use como referencia os exemplos em app/exemplo, app/loja, app/perfumes, app/posts e app/generica.`,
    [
      "Mantenha os arquivos em TypeScript.",
      "Use page.tsx como ponto de entrada da rota.",
      "Quando o desafio tiver rota dinamica, use params como Promise.",
      "Use Link de next/link sempre que houver navegacao.",
      "Nao adicione dependencias novas.",
    ],
    [
      "Ajustar o visual para ficar mais legivel.",
      "Adicionar um pequeno texto extra explicando a decisao tomada.",
      "Comparar sua solucao com a pasta respostas ao final.",
    ],
    [
      "A estrutura pedida existe na pasta do desafio.",
      "O codigo segue o estilo simples do repositorio.",
      "A solucao respeita o comportamento do Next 16 para params, searchParams ou notFound quando o tema pedir.",
    ],
    [
      "Usar params como objeto sincronico em vez de Promise.",
      "Usar useSearchParams em page server.",
      "Esquecer de converter id de string para numero quando trabalhar com arrays locais.",
      "Criar mais arquivos do que o necessario para um exercicio basico.",
    ],
  );
}

function writeChallenge(meta) {
  const generated = filesFor(meta);
  const challengeRoot = path.join(root, generated.folderName);

  writeFile(path.join(challengeRoot, "desafio.md"), markdownFor(meta, generated));

  Object.entries(generated.starter).forEach(([file, content]) => {
    writeFile(path.join(challengeRoot, "arquivos-iniciais", file), content);
  });

  Object.entries(generated.answer).forEach(([file, content]) => {
    writeFile(path.join(challengeRoot, "respostas", file), content);
  });

  if (generated.notes) {
    writeFile(path.join(challengeRoot, "respostas", "observacoes.md"), generated.notes);
  } else {
    ensureDir(path.join(challengeRoot, "respostas"));
  }

  ensureDir(path.join(challengeRoot, "arquivos-iniciais"));
}

fs.rmSync(root, { recursive: true, force: true });
ensureDir(root);
writeFile(path.join(root, "README.md"), readme());
metas.forEach(writeChallenge);

console.log(`Desafios gerados: ${metas.length}`);
