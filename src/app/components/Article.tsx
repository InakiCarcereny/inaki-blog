import { Tag } from './Tag';

import { POSTS_BY_TAG } from '../lib/Posts';

interface ArticleProps {
  title: string;
  date: string;
  tags: Array<(typeof POSTS_BY_TAG)[keyof typeof POSTS_BY_TAG]>;
  description: string;
  href: string;
}

export function Article({
  title,
  date,
  tags,
  description,
  href,
}: ArticleProps) {
  return (
    <article className="w-full rounded-xl border border-white/10 py-4 px-4 h-[265px] flex flex-col justify-between hover:bg-white/10 duration-200">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[#a1a1a1] font-semibold text-sm">{date}</span>
            <Tag />
          </div>
          <h2 className="text-white font-bold text-2xl">{title}</h2>
        </header>

        <p className="text-white text-sm leading-6">{description}</p>
      </div>

      <footer>
        <ul className="flex items-center gap-4">
          {tags.map((tag) => (
            <li
              className={`flex items-center gap-2 px-2 py-1 rounded-full ${tag.bg}`}
            >
              <span className={`${tag.text}`}>{tag.icon}</span>
              <span className={`text-sm ${tag.text}`}>{tag.label}</span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
