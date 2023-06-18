import getAllPosts from "@/libs/getAllPosts";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function DashboardPage() {
  const postsData = await getAllPosts();
  const _posts = await postsData;
  return (
    <div>
      <h1>DashboardPage</h1>
      <Suspense fallback={<h1>Loading Suspense</h1>}>
        {_posts.map((post: any) => {
          return (
            <>
              <p key={post.id}>
                <Link href={`/users/${post.id}`}>{post.title}</Link>
              </p>
              <br />
            </>
          );
        })}
      </Suspense>
    </div>
  );
}
