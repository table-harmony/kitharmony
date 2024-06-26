import { getKitByNameUseCase } from "@/infrastructure/kits";

import { Suspense } from "react";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSection() {
  return (
    <section className="container space-y-5 px-4 py-16 lg:px-20">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
    </section>
  );
}

async function Header() {
  const kit = await getKitByNameUseCase({ name: "nativekit" });

  if (!kit) return;

  return (
    <PageHeader>
      <PageHeaderHeading>{kit.name.toUpperCase()}</PageHeaderHeading>
      <PageHeaderDescription>{kit.description}</PageHeaderDescription>
      <PageActions>In progress...</PageActions>
    </PageHeader>
  );
}

function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Skeleton className="h-[50px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-[50px] w-[300px]" />
    </div>
  );
}
