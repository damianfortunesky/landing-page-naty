import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-rose-200/15 bg-surface-elevated/95 shadow-card transition duration-500 ease-premium hover:-translate-y-1 hover:border-rose-300/35 hover:shadow-glow ${className ?? ""}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition duration-700 ease-premium group-hover:scale-[1.04] group-hover:brightness-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080d] via-[#08080d]/20 to-transparent transition duration-500 group-hover:via-[#08080d]/8" />
      </div>

      <div className="space-y-3 p-5 md:p-6">
        <p className="text-[11px] uppercase tracking-[0.24em] text-text-secondary">{product.category}</p>
        <h3 className="font-display text-2xl leading-tight text-text-primary md:text-[1.65rem]">{product.name}</h3>
        <p className="text-xl font-semibold tracking-[0.02em] text-rose-100">{product.price}</p>
      </div>
    </article>
  );
}
