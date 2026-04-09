'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const page = () => {
  const search = useSearchParams();
  const title = search.get("title");
  const gender = search.get("gender");
  return (

    <div>
      Filme: {title} - Genero: {gender}
    </div>
  )
}

export default page