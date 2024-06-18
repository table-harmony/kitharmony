import { getKitByNameUseCase } from "@/infrastructure/kits";

import { Suspense } from "react";
import Image from "next/image";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { KitButton } from "../../_components/kit-button";
import { ImageWrapper } from "@/components/image-wrapper";

export function HeroSection() {
  return (
    <section className="container space-y-5 px-4 py-16 lg:px-20">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <ImageWrapper className="max-w-6xl px-6 pt-8 sm:max-w-4xl md:max-w-screen-xl lg:px-8">
        <Image
          src="/aspkit/hero.png"
          alt="Hero image"
          width="1222"
          height="636"
        />
      </ImageWrapper>
    </section>
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
