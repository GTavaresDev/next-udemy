import Link from "next/link";
import { posts } from "../data/posts";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const postId = Number(id);

  if (Number.isNaN(postId)) {
    return <p>Id invalido.</p>;
  }

  const post = posts.find((item) => item.id === postId);

  if (!post) {
    return <p>Item nao encontrado.</p>;
  }

  return (
    <main>
      <h1>{post.nome}</h1>
      {post.categoria ? <p>Categoria: {post.categoria}</p> : null}
      
      {post.descricao ? <p>{post.descricao}</p> : null}
      <Link href="/posts">Voltar para a lista</Link>
    </main>
  );
}
