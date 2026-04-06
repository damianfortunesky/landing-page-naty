import { BrandStorySection } from "@/components/sections/brand-story";
import { CatalogSection } from "@/components/sections/catalog";
import { CategoriesSection } from "@/components/sections/categories";
import { EditorialSection } from "@/components/sections/editorial";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <BrandStorySection />
      <CatalogSection />
      <CategoriesSection />
      <EditorialSection />
      <Footer />
    </main>
  );
}
