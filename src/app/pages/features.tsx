import { FeaturesSection } from "@/app/components/features-section";
import { BenefitsSection } from "@/app/components/benefits-section";
import { CtaSection } from "@/app/components/cta-section";

export function FeaturesPage() {
  return (
    <>
      <div className="pt-20"></div>
      <FeaturesSection />
      <BenefitsSection />
      <CtaSection />
    </>
  );
}
