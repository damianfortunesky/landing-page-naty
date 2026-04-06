import { CatalogSection } from "@/components/sections/catalog";
import { CollectionBanner } from "@/components/sections/collection-banner";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <CatalogSection />
      <CollectionBanner />
      <Footer />
    </main>
  );
}
