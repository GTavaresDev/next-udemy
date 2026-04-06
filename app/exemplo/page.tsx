"use client";

import React, { use } from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ExemploPage = () => {
  const searchParam = useSearchParams();
  const valorParam = searchParam.get("parametro");

  return (
    <div>
      <h1>
        Exibindo resultado para: {valorParam}
      </h1>
    </div>
  )
}

export default ExemploPage;