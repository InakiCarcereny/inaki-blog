import { Tag } from './Tag';

import { POSTS_BY_TAG } from '../lib/Posts';
import Link from 'next/link';

interface ArticleProps {
  title: string;
  date: string;
  tags: Array<(typeof POSTS_BY_TAG)[keyof typeof POSTS_BY_TAG]>;
  href: string;
  state: boolean;
  resume: string;
}

export function Article({
  title,
  date,
  tags,
  href,
  state,
  resume,
}: ArticleProps) {
  return (
    <Link
      href={`/article/${href}`}
      className="w-full rounded-xl border border-white/10 py-4 px-4 h-[265px] flex flex-col justify-between duration-200 hover:shadow-lg hover:shadow-white/10"
    >
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[#a1a1a1] font-semibold text-sm">{date}</span>
            {state && <Tag />}
          </div>
          <h2 className="text-white font-bold text-2xl">{title}</h2>
        </header>

        <p className="text-white text-sm leading-6">{resume}</p>
      </div>

      <footer className="border-t border-white/10 -mx-4 px-4 -my-4 h-[50px] flex items-center">
        <ul className="flex items-center gap-4">
          {tags.map((tag) => (
            <li
              key={tag.label}
              className={`flex items-center gap-2 px-2 py-1 rounded-full ${tag.bg}`}
            >
              <span className={`${tag.text}`}>{tag.icon}</span>
              <span className={`text-sm ${tag.text}`}>{tag.label}</span>
            </li>
          ))}
        </ul>
      </footer>
    </Link>
  );
}
