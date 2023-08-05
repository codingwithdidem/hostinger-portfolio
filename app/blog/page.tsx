import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc, format } from "date-fns";
import Link from "next/link";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate))
  );

  return (
    <main className="z-10 mx-auto max-w-3xl flex flex-col w-full px-4 py-10">
      <h1 className="text-2xl font-semibold uppercase">Blogs</h1>
      {/* Blog Posts */}
      <div className="mt-10 flex flex-col space-y-3">
        {posts.map((post: Post) => (
          <Link
            href={post.url}
            key={post.url}
            className="flex flex-col space-y-1"
          >
            <h3 className="text-lg uppercase">{post.title}</h3>
            <span className="text-sm text-gray-500">
              {format(new Date(post.publishDate), "MMMM dd, yyyy")}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
