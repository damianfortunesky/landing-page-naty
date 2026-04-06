export function HeroSection() {
  return (
    <section className="layout-wrap pb-18 pt-24 md:pb-22 md:pt-30">
      <div className="hero-panel mx-auto text-center">
        <p className="badge-premium mb-6">Nueva temporada</p>
        <h1 className="font-display text-4xl leading-tight md:text-6xl">
          Elegancia oscura para mujeres
          <span className="block text-rose-200">que marcan estilo</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-text-secondary md:text-lg">
          Descubrí una selección exclusiva de prendas sofisticadas con estética dark &amp; pink. Diseñado para
          enamorar a primera vista.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#catalogo" className="btn-primary">
            Ver catálogo
          </a>
          <a href="#coleccion" className="btn-secondary">
            Explorar colección
          </a>
        </div>
      </div>
    </section>
  );
}
