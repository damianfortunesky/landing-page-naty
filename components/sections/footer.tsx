export function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-surface-stroke bg-surface-base/80 px-6 py-12 text-sm text-text-muted backdrop-blur md:px-10"
    >
      <div className="layout-wrap flex flex-col gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-rose-100">NATY BOUTIQUE</p>
          <p className="mt-2 max-w-md text-text-secondary">
            Moda femenina con esencia editorial. Diseñada para campañas visuales, ecommerce y contenido de alto impacto.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-text-secondary">Conecta</p>
          <div className="mt-3 flex items-center justify-center gap-4 md:justify-end">
            <a href="#" className="premium-hover rounded-full border border-surface-stroke px-4 py-2 text-text-secondary">
              Instagram
            </a>
            <a href="#" className="premium-hover rounded-full border border-surface-stroke px-4 py-2 text-text-secondary">
              WhatsApp
            </a>
            <a href="#" className="premium-hover rounded-full border border-surface-stroke px-4 py-2 text-text-secondary">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
