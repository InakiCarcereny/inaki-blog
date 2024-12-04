import { POSTS } from '../lib/Posts';
import { Article } from './Article';

export function Articles() {
  return (
    <section className="grid grid-cols-2 gap-6 mt-20 max-w-[1000px] w-full mx-auto">
      {POSTS.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          tags={post.tags}
          description={post.description}
          href={post.href}
        />
      ))}
    </section>
  );
}
