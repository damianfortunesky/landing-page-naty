import Image from "next/image";

export function EditorialSection() {
  return (
    <section className="layout-wrap pb-22">
      <div className="surface-card grid overflow-hidden md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[380px]">
          <Image
            src="/products/dress-noir.svg"
            alt="Campaña editorial de moda"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/10 to-transparent" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-300">Editorial campaign</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Vestir con intención es nuestra firma.</h2>
          <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
            Una narrativa visual minimalista para campañas de temporada, lanzamientos cápsula y contenido de alto impacto
            en ecommerce y social media.
          </p>
          <a href="#catalogo" className="btn-secondary mt-8 w-fit">
            Descubrir productos
          </a>
        </div>
      </div>
    </section>
  );
}
