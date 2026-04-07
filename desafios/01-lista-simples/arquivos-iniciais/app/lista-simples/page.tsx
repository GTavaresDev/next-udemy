//Crie uma lista com tres itens.
import React from 'react'

//Criei a tipagem do dos objetos que vão no array 
type List = {
  id: number,
  name: string
}

//Array com os objetos que eu quero jogar pro front
const list : List [] = [
  {
    id: 1,
    name: "tenis"
  },
  {
    id: 2,
    name: "meia"
  }
]

//Carregando os dados no front

export const page = () => {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul>  
        {list.map((list) => 
          <li key={list.id}>
            {list.name}
          </li>
        )}
      </ul>
    </main>

  )
}

export default page;