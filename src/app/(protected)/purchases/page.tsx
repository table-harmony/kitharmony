import { Suspense } from "react";
import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { PurchasesList } from "./purchases-list";
import { Section } from "@/components/section";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default async function PurchasesPage() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  return (
    <Section className="space-y-10">
      <PageHeader>
        <PageHeaderHeading className="uppercase">purchases</PageHeaderHeading>
      </PageHeader>
      <Suspense fallback={<PurchasesSkeleton />}>
        <PurchasesList />
      </Suspense>
    </Section>
  );
}

function PurchasesSkeleton() {
  return (
    <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-2 md:py-16">
      <Skeleton className="h-[300px]" />
      <Skeleton className="h-[300px]" />
    </div>
  );
}
