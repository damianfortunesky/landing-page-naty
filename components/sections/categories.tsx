const categories = ["Vestidos", "Tops", "Conjuntos", "Abrigos", "Accesorios"];

export function CategoriesSection() {
  return (
    <section id="coleccion" className="layout-wrap section-space">
      <div className="grid gap-4 md:grid-cols-5">
        {categories.map((category, index) => (
          <article
            key={category}
            className="surface-card premium-hover relative overflow-hidden p-6 text-center md:p-8"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-400/10 via-transparent to-transparent" />
            <p className="relative text-sm uppercase tracking-[0.28em] text-text-secondary">Colección</p>
            <h3 className="relative mt-4 font-display text-2xl text-rose-100">{category}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
