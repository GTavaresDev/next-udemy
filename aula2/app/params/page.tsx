'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function ParamsContent() {
  const searchParams = useSearchParams()
  const valor = searchParams.get('parametro')

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Titulo: {valor}
          </h1>
        </div>
        <div>
          <Link href="/">Voltar a pagina inicial</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  )
}

export default function ParamsPage() {
  return (
    <Suspense fallback={<div>Carregando parametros...</div>}>
      <ParamsContent />
    </Suspense>
  )
}
