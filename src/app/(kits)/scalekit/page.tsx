import { FeaturesSection } from "./_sections/features";
import { HeroSection } from "./_sections/hero";
import { PurchaseSection } from "./_sections/purchase";

export default function ScaleKitPage() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <FeaturesSection />
      <PurchaseSection />
    </div>
  );
}
