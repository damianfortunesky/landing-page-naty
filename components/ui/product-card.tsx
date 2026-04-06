import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-glow transition hover:border-blush-500/70">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-blush-300">{product.category}</p>
        <h3 className="text-lg font-medium text-zinc-100">{product.name}</h3>
        <p className="text-xl font-semibold text-blush-100">{product.price}</p>
      </div>
    </article>
  );
}
