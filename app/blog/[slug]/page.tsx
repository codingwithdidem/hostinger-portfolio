import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/app/components/Mdx";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { Balancer } from "react-wrap-balancer";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="z-10 mx-auto max-w-3xl flex flex-col w-full px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">
        <Balancer>{post.title}</Balancer>
      </h1>
      <Mdx code={post.body.code} />
    </article>
  );
}
