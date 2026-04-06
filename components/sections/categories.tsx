const categories = ["Vestidos", "Tops", "Conjuntos", "Abrigos", "Accesorios"];

export function CategoriesSection() {
  return (
    <section id="coleccion" className="layout-wrap section-space">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
        {categories.map((category, index) => (
          <article
            key={category}
            className="group surface-card premium-hover relative overflow-hidden p-6 text-center md:p-7"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-400/10 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
            <p className="relative text-xs uppercase tracking-[0.28em] text-text-secondary md:text-sm">Colección</p>
            <h3 className="relative mt-3 font-display text-2xl text-rose-100">{category}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
