import { Suspense } from "react";
import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { Skeleton } from "@/components/ui/skeleton";
import { PurchasesList } from "./purchases-list";

export default async function PurchasesPage() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  return (
    <div className="container flex flex-col space-y-12 pb-24 pt-12 md:py-20 lg:px-20">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-balance text-center text-xl font-bold md:text-3xl lg:text-4xl">
          Purchases
        </h1>
        <p className="max-w-[750px] text-center text-sm text-muted-foreground">
          View and manage your purchases
        </p>
      </div>
      <Suspense fallback={<Skeleton className="h-[150px]" />}>
        <PurchasesList />
      </Suspense>
    </div>
  );
}
