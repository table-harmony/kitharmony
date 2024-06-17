import { Suspense } from "react";

import { KitButton } from "@/components/kit-button";
import { Skeleton } from "@/components/ui/skeleton";

export function PurchaseSection() {
  return (
    <div className="container flex flex-col items-center space-y-10 py-16">
      <div className="text-center">
        <h2 className="max-w-lg text-2xl font-bold uppercase text-primary md:text-4xl">
          Purchase
        </h2>
        <p className="mb-2 font-semibold">pay once. unlimited use.</p>
      </div>
      <Suspense fallback={<Skeleton className="h-[50px] w-[300px]" />}>
        <KitButton kitName="aspkit" />
      </Suspense>
    </div>
  );
}
