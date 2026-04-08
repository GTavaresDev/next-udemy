import Link from "next/link";
import { posts } from "./data/posts";

export default function Page() {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href="/posts/${item.id}">{item.nome}</Link>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
