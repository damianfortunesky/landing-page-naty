import Image from "next/image";

export function HeroSection() {
  return (
    <section className="layout-wrap pb-18 pt-10 md:pb-20 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-panel text-left">
          <p className="badge-premium mb-6">Nueva temporada · 2026</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Elegancia contemporánea
            <span className="block text-rose-200">para una marca inolvidable</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm text-text-secondary md:text-lg">
            Una landing inmersiva para presentar identidad, colección y catálogo premium en una sola experiencia fluida.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#catalogo" className="btn-primary">
              Ver catálogo
            </a>
            <a href="#coleccion" className="btn-secondary">
              Ver colección
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <article className="surface-card premium-hover relative col-span-2 h-64 overflow-hidden md:h-72">
            <Image src="/products/dress-velvet.svg" alt="Look editorial velvet" fill className="object-cover" />
          </article>
          <article className="surface-card premium-hover relative h-44 overflow-hidden md:h-52">
            <Image src="/products/blazer-rose.svg" alt="Blazer rosa elegante" fill className="object-cover" />
          </article>
          <article className="surface-card premium-hover relative h-44 overflow-hidden md:h-52">
            <Image src="/products/set-eclipse.svg" alt="Conjunto eclipse premium" fill className="object-cover" />
          </article>
        </div>
      </div>
    </section>
  );
}
