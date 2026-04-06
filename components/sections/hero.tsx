export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.32em] text-blush-300">Nueva temporada</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Elegancia oscura para mujeres que marcan estilo
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-zinc-300 md:text-lg">
          Descubrí una selección exclusiva de prendas sofisticadas con estética dark &amp; pink. Diseñado para
          enamorar a primera vista.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#catalogo"
            className="rounded-full bg-blush-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-blush-300"
          >
            Ver catálogo
          </a>
          <a
            href="#coleccion"
            className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold transition hover:border-blush-300 hover:text-blush-300"
          >
            Explorar colección
          </a>
        </div>
      </div>
    </section>
  );
}
