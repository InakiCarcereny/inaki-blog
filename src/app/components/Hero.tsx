'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from '../icons/Search';

export function Hero() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="flex items-center justify-center flex-col gap-6 mt-20 mx-auto max-w-[1428px] w-full">
      <h5 className="text-white font-extrabold text-5xl">
        YOU CAN FIND AN ARTICLE EVERY WEEK.
      </h5>

      <div className="flex items-center justify-between max-w-[800px] w-full rounded-[4px] border border-white/10 py-2 px-4">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
          type="search"
          className="bg-transparent w-full focus:outline-none placeholder:text-[#a1a1a1] text-[#a1a1a1] rounded-[4px] text-sm"
          placeholder="Search..."
        />

        <Search className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
