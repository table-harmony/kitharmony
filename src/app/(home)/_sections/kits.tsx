import { getKitsUseCase } from "@/infrastructure/kits";

import { Suspense } from "react";

import { Title } from "@/components/title";
import { Section } from "@/components/section";
import { KitCard } from "@/components/kit-card";
import { Skeleton } from "@/components/ui/skeleton";

export function KitsSection() {
  return (
    <Section id="kits" className="flex flex-col items-center">
      <Title
        title="Starter kits"
        subtitle="modern, polished stacks"
        className="text-center"
      />
      <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-3 md:py-16">
        <Suspense fallback={<KitsSkeleton />}>
          <Kits />
        </Suspense>
      </div>
    </Section>
  );
}

function KitsSkeleton() {
  return (
    <>
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-[300px] w-full" />
    </>
  );
}

async function Kits() {
  const kits = await getKitsUseCase();

  return (
    <>
      {kits.length !== 0 &&
        kits.map((kit) => <KitCard key={kit.id} {...kit} />)}
    </>
  );
}
