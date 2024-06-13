import { getKitByNameUseCase } from "@/infrastructure/kits";

import { Section } from "@/components/section";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PurchaseButton } from "../_components/purchase-button";
import { Suspense } from "react";

export default async function AspkitPage() {
  return (
    <Section>
      <Suspense>
        <Header />
      </Suspense>
    </Section>
  );
}

async function Header() {
  const kit = await getKitByNameUseCase({ name: "aspkit" });

  if (!kit) return;

  return (
    <PageHeader>
      <PageHeaderHeading className="text-primary">
        {kit.name.toUpperCase()}
      </PageHeaderHeading>
      <PageHeaderDescription>{kit.description}</PageHeaderDescription>
      <PageActions>
        <PurchaseButton kitName={kit.name} />
      </PageActions>
    </PageHeader>
  );
}
