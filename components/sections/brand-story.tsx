import { SectionTitle } from "@/components/ui/section-title";

export function BrandStorySection() {
  return (
    <section id="inicio" className="layout-wrap section-space">
      <div className="surface-card relative overflow-hidden p-8 md:p-12">
        <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" />
        <SectionTitle
          eyebrow="Nuestra esencia"
          title="Moda pensada para dominar cada mirada"
          subtitle="Naty Boutique combina siluetas femeninas, paletas profundas y detalles de autor para crear piezas listas para venderse desde el primer scroll."
        />
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-text-secondary md:text-base">
          Nuestra propuesta nace del equilibrio entre actitud editorial y funcionalidad comercial: prendas fáciles de combinar,
          visuales memorables y una dirección de arte diseñada para marcas que buscan una presencia premium.
        </p>
      </div>
    </section>
  );
}
