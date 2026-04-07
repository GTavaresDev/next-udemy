# 42 - Catalogo de filmes

## Nivel

medio

## Objetivo

Praticar catalogo de filmes usando o padrao atual do App Router do projeto.

## Contexto

Este exercicio faz parte da trilha local de Next 16. Use como referencia os exemplos em app/exemplo, app/loja, app/perfumes, app/posts e app/generica.

## Arquivos esperados

- arquivos-iniciais/app/catalogo/page.tsx
- arquivos-iniciais/app/catalogo/data.ts
- arquivos-iniciais/app/catalogo/helpers.ts
- arquivos-iniciais/app/catalogo/types.ts
- arquivos-iniciais/app/catalogo/styles.module.css
- respostas/app/catalogo/page.tsx
- respostas/app/catalogo/data.ts
- respostas/app/catalogo/helpers.ts
- respostas/app/catalogo/types.ts
- respostas/app/catalogo/styles.module.css

## Requisitos

- Mantenha os arquivos em TypeScript.
- Use page.tsx como ponto de entrada da rota.
- Quando o desafio tiver rota dinamica, use params como Promise.
- Use Link de next/link sempre que houver navegacao.
- Nao adicione dependencias novas.

## Bonus opcional

- Ajustar o visual para ficar mais legivel.
- Adicionar um pequeno texto extra explicando a decisao tomada.
- Comparar sua solucao com a pasta respostas ao final.

## Criterios de conclusao

- A estrutura pedida existe na pasta do desafio.
- O codigo segue o estilo simples do repositorio.
- A solucao respeita o comportamento do Next 16 para params, searchParams ou notFound quando o tema pedir.

## Erros comuns

- Usar params como objeto sincronico em vez de Promise.
- Usar useSearchParams em page server.
- Esquecer de converter id de string para numero quando trabalhar com arrays locais.
- Criar mais arquivos do que o necessario para um exercicio basico.
