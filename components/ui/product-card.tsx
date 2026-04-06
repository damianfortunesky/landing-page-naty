import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="surface-card group premium-hover overflow-hidden">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 ease-premium group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="badge-premium">{product.category}</p>
          {product.featured ? (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">Destacado</span>
          ) : null}
        </div>
        <h3 className="font-display text-2xl text-text-primary">{product.name}</h3>
        {product.shortDescription ? (
          <p className="text-sm leading-relaxed text-text-secondary">{product.shortDescription}</p>
        ) : null}
        <p className="text-xl font-semibold text-rose-100">{product.price}</p>
      </div>
    </article>
  );
}
