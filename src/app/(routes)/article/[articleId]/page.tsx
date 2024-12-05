import { POSTS } from '@/app/lib/Posts';

export default function ArticlePage({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;

  console.log(articleId);

  const filteredPosts = POSTS.filter((post) => post.href === articleId);

  return (
    <section className="max-w-[800px] mx-auto w-full h-full flex flex-col mt-10">
      {filteredPosts.map((post) => (
        <article key={post.id} className="flex flex-col gap-6">
          <header className="flex items-center justify-between w-full">
            <h1 className="text-white text-3xl font-bold">{post.title}</h1>
            <span className="text-[#a1a1a1] font-semibold text-sm">
              {post.date}
            </span>
          </header>

          <p className="text-white leading-6 text-base">{post.description}</p>

          {/* <img src={post.image} alt={post.title} /> */}
        </article>
      ))}
    </section>
  );
}
