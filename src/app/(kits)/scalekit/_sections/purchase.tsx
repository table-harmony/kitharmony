import { Suspense } from "react";

import { KitButton } from "@/components/kit-button";
import { Skeleton } from "@/components/ui/skeleton";
import { Title } from "@/components/title";

export function PurchaseSection() {
  return (
    <section className="container flex flex-col items-center space-y-5 py-16">
      <Title
        title="purchase"
        subtitle="Pay once. Unlimited use."
        className="text-center"
      />
      <Suspense fallback={<Skeleton className="h-[50px] w-[300px]" />}>
        <KitButton kitName="scalekit" />
      </Suspense>
    </section>
  );
}
