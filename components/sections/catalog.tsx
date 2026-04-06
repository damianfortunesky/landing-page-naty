import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionTitle } from "@/components/ui/section-title";

export function CatalogSection() {
  return (
    <section id="catalogo" className="layout-wrap section-space">
      <div className="space-y-8 md:space-y-10">
        <SectionTitle
          eyebrow="Selección destacada"
          title="Catálogo de productos"
          subtitle="Un grid responsive con enfoque visual premium para destacar cada producto de la colección."
        />
        <div className="grid gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
