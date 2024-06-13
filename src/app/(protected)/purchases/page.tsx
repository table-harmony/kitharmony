import { Suspense } from "react";
import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { Skeleton } from "@/components/ui/skeleton";
import { PurchasesList } from "./purchases-list";
import { Section } from "@/components/section";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";

export default async function PurchasesPage() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  return (
    <Section className="space-y-10">
      <PageHeader>
        <PageHeaderHeading>Purchases</PageHeaderHeading>
      </PageHeader>
      <Suspense fallback={<Skeleton className="h-[150px]" />}>
        <PurchasesList />
      </Suspense>
    </Section>
  );
}
