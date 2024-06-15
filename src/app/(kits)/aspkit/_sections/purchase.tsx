import { Suspense } from "react";

import { PurchaseButton } from "../../_components/purchase-button";
import { Title } from "@/components/title";
import { Section } from "@/components/section";
import { Skeleton } from "@/components/ui/skeleton";

export function PurchaseSection() {
  return (
    <Section className="flex flex-col items-center justify-center space-y-10">
      <Title
        title="Purchase"
        subtitle="pay once. unlimited use."
        className="text-center"
      />
      <Suspense fallback={<Skeleton className="h-[50px] w-[300px]" />}>
        <PurchaseButton kitName="scalekit" />
      </Suspense>
    </Section>
  );
}
