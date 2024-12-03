import { ReactIcon } from '../icons/React';
import { Zustand } from '../icons/Zustand';

export function Articles() {
  return (
    <section className="grid grid-cols-2 gap-6 mt-20 max-w-[1000px] w-full mx-auto relative">
      <article className="w-full rounded-xl border border-white/10 py-4 px-4 h-[250px] flex flex-col justify-between hover:bg-white/10 duration-200">
        <div className="flex flex-col gap-4">
          <header className="flex flex-col gap-1">
            <span className="text-[#a1a1a1] font-semibold text-sm">
              Dec 3 - 2024
            </span>
            <h2 className="text-white font-bold text-2xl">
              Titulo del articulo
            </h2>
          </header>

          <p className="text-white text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus iure voluptatum blanditiis doloribus laborum cum
            aperiam, magnam quasi ratione, inventore totam quae odit
            voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!
          </p>
        </div>

        <footer className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#3b88e925] px-2 py-1 rounded-full">
            <ReactIcon className="text-[#3b88e9] w-5 h-5" />
            <span className="text-sm text-[#3b88e9]">React</span>
          </div>

          <div className="flex items-center gap-2 bg-yellow-950 px-2 py-1 rounded-full">
            <Zustand className="w-5 h-5" />
            <span className="text-sm text-yellow-500">Zustand</span>
          </div>
        </footer>
      </article>

      <article className="w-full rounded-xl border border-white/10 py-4 px-4 h-[250px] flex flex-col justify-between hover:bg-white/10 duration-200">
        <div className="flex flex-col gap-4">
          <header className="flex flex-col gap-1">
            <span className="text-[#a1a1a1] font-semibold text-sm">
              Dec 3 - 2024
            </span>
            <h2 className="text-white font-bold text-2xl">
              Titulo del articulo
            </h2>
          </header>

          <p className="text-white text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus iure voluptatum blanditiis doloribus laborum cum
            aperiam, magnam quasi ratione, inventore totam quae odit
            voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!
          </p>
        </div>

        <footer className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#3b88e925] px-2 py-1 rounded-full">
            <ReactIcon className="text-[#3b88e9] w-5 h-5" />
            <span className="text-sm text-[#3b88e9]">React</span>
          </div>

          <div className="flex items-center gap-2 bg-yellow-950 px-2 py-1 rounded-full">
            <Zustand className="w-5 h-5" />
            <span className="text-sm text-yellow-500">Zustand</span>
          </div>
        </footer>
      </article>

      <div className="absolute top-4 right-4 rounded-[4px] text-[#3b88e9] bg-[#3b88e925] text-sm px-2 py-1">
        New
      </div>
    </section>
  );
}
