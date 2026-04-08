import React from 'react'
import Link from 'next/link'

type Posts = {
  id: number,
  name: string
}

const posts : Posts[] = [
  {id: 1, name:"Flamengo é campeão da libertadores"},
  {id: 2, name:"Flamengo é campeão do brasileirão"}
]

const PostPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Posts do site
          </h1>
          <ul>
            {posts.map((posts) => (
              <li key={posts.id}>
                <Link href={`/posts/${posts.id}`}>{posts.name}</Link>
              </li>
            ))}
          </ul>        
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

export default PostPage 