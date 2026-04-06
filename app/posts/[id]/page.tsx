import React from "react";
import Link from "next/link";
import { posts } from "../data/posts";

type Props = {
  params: Promise<{ id: number }>;
};

const PostPage = async ({ params }: Props) => {
  const { id } = await params;
  const postId = Number(id);
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/posts">Voltar para a lista de posts</Link>
    </div>
  );
};

export default PostPage;
