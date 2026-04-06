import Link from "next/link";
import React from "react";
import { posts } from "./data/posts";

const PostPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>Ver post {post.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
