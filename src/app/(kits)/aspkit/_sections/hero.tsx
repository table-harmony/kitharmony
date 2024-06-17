import { getKitByNameUseCase } from "@/infrastructure/kits";

import { Suspense } from "react";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { KitButton } from "@/components/kit-button";

export function HeroSection() {
  return (
    <div className="container space-y-10 px-4 py-16 lg:px-20">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
    </div>
  );
}

async function Header() {
  const kit = await getKitByNameUseCase({ name: "aspkit" });

  if (!kit) return;

  return (
    <PageHeader>
      <PageHeaderHeading>{kit.name.toUpperCase()}</PageHeaderHeading>
      <PageHeaderDescription>{kit.description}</PageHeaderDescription>
      <PageActions>
        <KitButton kitName={kit.name} />
      </PageActions>
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
