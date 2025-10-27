import { use } from "react";
import Postsingle from "./Postsingle";
export default function Posts({ postspromise }) {
  const posts = use(postspromise);
  console.log(posts.length);
  return (
    <div>
      <h3>all posts are here- {posts.length}</h3>
      {posts.map((post) => (
        <Postsingle key={post.id} post={post}></Postsingle>
      ))}
    </div>
  );
}
