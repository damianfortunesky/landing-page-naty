export function CollectionBanner() {
  return (
    <section id="coleccion" className="layout-wrap pb-22">
      <div className="surface-card relative overflow-hidden rounded-3xl bg-gradient-to-r from-surface-elevated to-surface-soft p-10 text-center md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-rose-500/20 blur-3xl" />
        <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Colección cápsula</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">Midnight Rose</h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Una cápsula creada para redes sociales y campañas de alto impacto: silhouettes elegantes, texturas suaves y
          paleta sofisticada en negro y rosa.
        </p>
      </div>
    </section>
  );
}
