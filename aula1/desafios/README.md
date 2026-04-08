# Desafios de Next 16 + React 19

Esta pasta organiza uma trilha local com 50 desafios progressivos para praticar o App Router atual do projeto.

## Visao geral da trilha

- 50 exercicios em portugues.
- Progressao de JSX basico ate um mini catalogo completo.
- Starter minimo em `arquivos-iniciais/`.
- Solucao isolada em `respostas/`.
- Foco em repeticao, variacao de padrao e leitura de codigo simples.

## Como usar os desafios

1. Escolha um desafio na ordem sugerida.
2. Leia o arquivo `desafio.md`.
3. Copie o conteudo de `arquivos-iniciais/` para o `app/` do projeto, e tambem para `componentes/` quando existir.
4. Resolva o exercicio sem abrir `respostas/`.
5. Compare sua solucao com a pasta `respostas/`.

## Ordem sugerida
### 1. Fundamentos de rota e JSX

- 01 Lista simples
- 02 Lista com preco
- 03 Lista com categoria
- 04 Pagina de detalhe estatica
- 05 Links entre paginas
- 06 Componente reutilizavel de card
- 07 Renderizacao condicional simples
- 08 Estado vazio
- 09 Destaque do item mais caro
- 10 Lista com map e key correto

### 2. Dados locais e rotas dinamicas

- 11 Array em data
- 12 Rota dinamica por id
- 13 Converter id string para numero
- 14 Item nao encontrado
- 15 Voltar para lista
- 16 Detalhe de produto
- 17 Detalhe de perfume
- 18 Detalhe de post
- 19 Rota dinamica com categoria e id
- 20 Usar notFound() corretamente

### 3. Query string e filtros simples

- 21 Ler searchParams na page
- 22 Filtrar lista por nome
- 23 Filtrar por categoria
- 24 Ordenar por preco
- 25 Paginacao fake por query
- 26 Busca com componente client
- 27 useSearchParams com Suspense
- 28 Combinar busca e filtro
- 29 Manter filtros ao navegar
- 30 Resetar filtros

### 4. Organizacao de projeto e reaproveitamento

- 31 Criar tipo compartilhado
- 32 Separar dados e helpers
- 33 Funcao para buscar item por id
- 34 Componente de lista generica
- 35 Componente de detalhe generico
- 36 Aplicar CSS Module simples
- 37 Criar badge de dificuldade
- 38 Criar layout visual de cards
- 39 Reutilizar estrutura generica
- 40 Montar mini template de catalogo

### 5. Consolidacao em mini features

- 41 Catalogo de livros
- 42 Catalogo de filmes
- 43 Catalogo de cursos
- 44 Catalogo com destaque
- 45 Catalogo com filtros e detalhe
- 46 Catalogo com rota invalida tratada
- 47 Catalogo com query inicial
- 48 Catalogo com componente client e server juntos
- 49 Refatoracao de desafio anterior
- 50 Mini catalogo completo
## Topicos cobertos

- rotas estaticas com `page.tsx`
- listas com `map` e `key`
- rotas dinamicas com `params: Promise<{ id: string }>`
- leitura de `searchParams` na page server
- filtros e ordenacao com query string
- `useSearchParams` em componente client com `Suspense`
- `Link` do `next/link`
- `notFound()` e `not-found.tsx`
- separacao entre dados, tipos, helpers e componentes
- CSS Modules simples

## Compatibilidade com Next 16

- Todo o material assume Next 16.2.2 com App Router.
- Nas rotas dinamicas, as solucoes usam `params` como Promise e fazem `await params`.
- Quando ha query string, as solucoes leem `searchParams` como Promise na pagina server.
- Quando o desafio pede leitura client-side, `useSearchParams` aparece somente em componentes client.
- Nos casos de rota invalida, a trilha prioriza `notFound()`.

## Documentacao local recomendada

Antes de resolver os desafios de rotas dinamicas, query string ou Suspense, compare sua implementacao com a documentacao local do projeto em:

- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/not-found.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/not-found.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-search-params.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md`
