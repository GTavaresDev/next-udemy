/**## O que montar
- Uma pagina com uma lista de filmes.
- Um link em cada filme para uma rota dinamica com `id`.
- O envio de `nomeFilme` e `genero` pela URL.
 */
'use client'
import React from 'react'
import Link from 'next/link'

type Movies = {
  id: number,
  title: string,
  gender: string
}

const movies : Movies[] = [
  {id: 1, title:"Vingadores", gender:"Ação"},
  {id: 2, title:"Carros", gender:"Animação"}
]

const FilmesPage = () => {
  return (
    <div>
      <h1>Catalogo de Filmes: </h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/desafios/filmes/${movie.id}?title=${movie.title}&gender=${movie.gender}`}>Filme: {movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilmesPage