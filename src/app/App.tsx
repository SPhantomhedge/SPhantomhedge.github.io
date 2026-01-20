import { Header } from "@/app/components/header";
import { HeroSection } from "@/app/components/hero-section";
import { FeaturesSection } from "@/app/components/features-section";
import { ProductShowcase } from "@/app/components/product-showcase";
import { BenefitsSection } from "@/app/components/benefits-section";
import { CtaSection } from "@/app/components/cta-section";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="platform">
          <ProductShowcase />
        </section>
        <section id="solutions">
          <BenefitsSection />
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
