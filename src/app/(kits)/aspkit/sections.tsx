import { getKitByNameUseCase } from "@/infrastructure/kits";

import { PurchaseButton } from "../_components/purchase-button";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Title } from "@/components/title";
import { Section } from "@/components/section";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageWrapper } from "@/components/image-wrapper";
import Image from "next/image";

async function Header() {
  const kit = await getKitByNameUseCase({ name: "aspkit" });

  if (!kit) return;

  return (
    <PageHeader>
      <PageHeaderHeading>{kit.name.toUpperCase()}</PageHeaderHeading>
      <PageHeaderDescription>{kit.description}</PageHeaderDescription>
      <PageActions>
        <PurchaseButton kitName={kit.name} />
      </PageActions>
    </PageHeader>
  );
}

function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Skeleton className="h-[50px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-[50px] w-[300px]" />
    </div>
  );
}

export function MainSection() {
  return (
    <Section id="main" className="flex flex-col items-center space-y-10">
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
    </Section>
  );
}

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
