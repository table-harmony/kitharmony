import { Suspense } from "react";
import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { Skeleton } from "@/components/ui/skeleton";
import { PurchasesList } from "./purchases-list";

export default async function PurchasesPage() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  return (
    <div className="container relative space-y-6 py-2 md:max-w-lg md:py-20">
      <header className="text-center">
        <h1 className="text-xl font-medium md:text-3xl">Purchases</h1>
        <p className="text-sm text-muted-foreground">
          View and manage your purchases
        </p>
      </header>
      <Suspense fallback={<Skeleton className="h-[150px] md:max-w-lg" />}>
        <PurchasesList />
      </Suspense>
    </div>
  );
}
