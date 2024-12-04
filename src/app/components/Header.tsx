import { Duck } from '../icons/Duck';
import { Separator } from '../icons/Separator';
import { SOCIAL } from '../lib/Social';

export function Header() {
  return (
    <div className="w-full border-b border-white/10">
      <header className="w-full flex items-center justify-between h-[80px] mx-auto max-w-[1428px]">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 hover:scale-105 duration-200"
          >
            <span>
              <Duck className="text-white h-10 w-10" />
            </span>
            <h1 className="text-white font-semibold text-2xl">InakiDev</h1>
          </a>

          <div className="rounded-full border border-white/10 py-1 px-4 text-sm animate-border">
            <h2 className="text-white">Hey, welcome to my blog!</h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-white/10 rounded-[4px] py-1 px-4 hover:bg-white duration-200 hover:text-black text-[#a1a1a1]">
            <a
              href="https://inaki-carcereny-dev.netlify.app/"
              className="w-full h-full text-sm"
            >
              Go to my portfolio
            </a>
          </button>

          <span>
            <Separator className="text-white w-6 h-6" />
          </span>

          <ul className="flex items-center gap-2">
            {SOCIAL.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}
