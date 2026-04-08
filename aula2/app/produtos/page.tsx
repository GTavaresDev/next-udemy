'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

/*Vou criar aqui a tela de produtos que vai passar para o detalhe do produto pela a url o id do produto e como parametro
* o valo
*/

type Products = {
  id: number,
  valor: number,
  name: string
}

const products : Products[] = [
  {id: 1, valor: 22, name:"Carregador"}
]


const ProdutosPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Produtos da empresa:
          </h1>   
          <div>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                    {product.name}
                    {product.valor}
                </li>
              ))}
            </ul>
          </div>     
        </div>
        <div>
          <Link href="/">Voltar a pagina inicial</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        </div>
      </main>
    </div>
  )
}

export default ProdutosPage