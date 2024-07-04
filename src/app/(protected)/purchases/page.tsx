import { Suspense } from "react";
import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { PurchasesList, PurchasesListSkeleton } from "./list";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";

export default async function PurchasesPage() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  return (
    <div className="container space-y-10 px-4 py-16 lg:px-20">
      <PageHeader>
        <PageHeaderHeading className="uppercase">purchases</PageHeaderHeading>
      </PageHeader>
      <Suspense fallback={<PurchasesListSkeleton />}>
        <PurchasesList />
      </Suspense>
    </div>
  );
}
