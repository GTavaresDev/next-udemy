/** ## O que montar
* - Uma pagina com uma lista de alunos.
* - Um link em cada aluno para uma rota dinamica com `id`.
* - O envio de `nomeAluno` e `nota` pela URL.
**/
'use client'
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Alunos = {
  id: number,
  name: string,
  score: number
}

const alunos : Alunos[] = [
  {id: 1, name:"Gabriel", score:10},
  {id: 2, name:"Ester", score:10}
]

const AlunosPage = () => {
  return (
    <div>
      <h1>Lista de Alunos</h1>
        <ul>
          {alunos.map((aluno) => (
            <li key={aluno.id}>
              <Link href={`/desafios/alunos/${aluno.id}?nome=${aluno.name}&nota=${aluno.score}`}>Nome: {aluno.name}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default AlunosPage