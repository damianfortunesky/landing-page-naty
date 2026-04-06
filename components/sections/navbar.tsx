const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Colección", href: "#coleccion" },
  { label: "Productos", href: "#catalogo" },
  { label: "Contacto", href: "#contacto" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-stroke/80 bg-surface-base/75 backdrop-blur">
      <nav className="layout-wrap flex min-h-16 flex-wrap items-center justify-between gap-3 py-3 md:flex-nowrap md:gap-4 md:py-0">
        <a href="#inicio" className="font-display text-lg tracking-[0.16em] text-rose-100 transition hover:text-rose-200 md:text-2xl">
          NATY
        </a>
        <ul className="flex w-full items-center justify-between gap-1 text-[11px] uppercase tracking-[0.16em] text-text-secondary sm:w-auto sm:gap-2 md:gap-4 md:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-2.5 py-1.5 transition duration-300 ease-premium hover:bg-surface-soft/75 hover:text-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base md:px-3 md:py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
