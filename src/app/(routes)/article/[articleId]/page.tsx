import { ArrowLeft } from '@/app/icons/ArrowLeft';
import { Calendar } from '@/app/icons/Calendar';
import { POSTS } from '@/app/lib/Posts';
import Link from 'next/link';

export default function ArticlePage({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;

  const filteredPosts = POSTS.filter((post) => post.href === articleId);

  return (
    <section className="max-w-[800px] mx-auto w-full h-full flex flex-col mt-10">
      {filteredPosts.map((post) => (
        <article key={post.id} className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-4 text-[#a1a1a1] text-sm hover:underline hover:underline-offset-1 hover:text-white"
          >
            <ArrowLeft />
            Go back
          </Link>

          <header className="flex items-center justify-between w-full">
            <h1 className="text-white text-3xl font-bold">{post.title}</h1>
            <span className="text-[#a1a1a1] font-semibold text-sm flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {post.date}
            </span>
          </header>

          <p
            className="text-white leading-6 text-base"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {post.description}
          </p>

          {/* <img
            src={post.image}
            alt={post.title}
            className="rounded-xl w-auto h-full"
          /> */}
        </article>
      ))}
    </section>
  );
}
