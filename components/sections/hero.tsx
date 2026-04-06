import Image from "next/image";
import { FALLBACK_HERO_IMAGE, resolveImageAsset } from "@/data/assets";

const heroVisuals = [
  {
    src: "/assets/hero/dress-velvet.svg",
    alt: "Look editorial velvet",
    priority: true,
    className: "col-span-2 h-64 md:h-72"
  },
  {
    src: "/assets/hero/blazer-rose.svg",
    alt: "Blazer rosa elegante",
    className: "h-44 md:h-52",
    priority: false
  },
  {
    src: "/assets/hero/set-eclipse.svg",
    alt: "Conjunto eclipse premium",
    className: "h-44 md:h-52",
    priority: false
  }
] as const;

export function HeroSection() {
  return (
    <section className="layout-wrap pb-16 pt-8 md:pb-20 md:pt-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        <div className="hero-panel text-left">
          <p className="badge-premium mb-6">Nueva temporada · 2026</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Elegancia contemporánea
            <span className="block text-rose-200">para una marca inolvidable</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary md:text-lg">
            Una landing inmersiva para presentar identidad, colección y catálogo premium en una sola experiencia fluida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
            <a href="#catalogo" className="btn-primary">
              Ver catálogo
            </a>
            <a href="#coleccion" className="btn-secondary">
              Ver colección
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {heroVisuals.map((visual) => (
            <article key={visual.alt} className={`surface-card premium-hover relative overflow-hidden ${visual.className}`}>
              <Image
                src={resolveImageAsset(visual.src, FALLBACK_HERO_IMAGE)}
                alt={visual.alt}
                fill
                priority={visual.priority}
                className="object-cover"
                sizes={visual.priority ? "(max-width: 768px) 100vw, 48vw" : "(max-width: 768px) 50vw, 24vw"}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
