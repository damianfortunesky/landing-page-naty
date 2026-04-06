import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionTitle } from "@/components/ui/section-title";

export function CatalogSection() {
  return (
    <section id="catalogo" className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selección destacada"
          title="Catálogo visual"
          subtitle="Productos estáticos con foco en presentación premium para acelerar validación comercial."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
