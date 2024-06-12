import { FeaturesSection, MainSection, PurchaseSection } from "./sections";

export default function ScaleKitPage() {
  return (
    <div className="relative flex flex-col">
      <MainSection />
      <FeaturesSection />
      <PurchaseSection />
    </div>
  );
}
