const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Colección", href: "#coleccion" },
  { label: "Productos", href: "#catalogo" },
  { label: "Contacto", href: "#contacto" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-stroke/80 bg-surface-base/75 backdrop-blur">
      <nav className="layout-wrap flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-xl tracking-[0.18em] text-rose-100 md:text-2xl">
          NATY
        </a>
        <ul className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-text-secondary md:gap-6 md:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 transition duration-300 hover:bg-surface-soft/75 hover:text-rose-100"
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
