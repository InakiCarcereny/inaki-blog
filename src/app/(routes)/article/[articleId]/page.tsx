import { POSTS } from '@/app/lib/Posts';

export default function Page({ params }: { params: { articleId: string } }) {
  const { articleId } = params;

  console.log(articleId);

  const filteredPosts = POSTS.filter((post) => post.href === articleId);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
