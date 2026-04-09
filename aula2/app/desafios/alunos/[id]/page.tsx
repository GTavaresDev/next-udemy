'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const page = () => {
  const search = useSearchParams();
  const name = search.get("nome");
  const score = search.get("nota")
  return (
    <div>
      <ul>
        Nome do Aluno: {name} - Nota: {score}
      </ul>
    </div>
  )
}

export default page