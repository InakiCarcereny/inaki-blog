import { Articles } from './components/Articles';
import { Hero } from './components/Hero';

export default function Home({ searchParams }: { searchParams: any }) {
  const query = searchParams.query || '';

  return (
    <>
      <Hero />

      <Articles query={query} />
    </>
  );
}
