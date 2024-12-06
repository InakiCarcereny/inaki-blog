import { POSTS } from '../lib/Posts';
import { Article } from './Article';

export function Articles({ query }: { query: string }) {
  const filteredPosts = POSTS.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="grid grid-cols-2 gap-6 mt-20 max-w-[1000px] w-full mx-auto">
      {filteredPosts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          tags={post.tags}
          href={post.href}
          state={post.new}
          resume={post.resume}
        />
      ))}
    </section>
  );
}
