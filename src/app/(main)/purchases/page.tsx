import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";
import { PurchasesList } from "./purchases-list";

export default async function PurchasesPage() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  return (
    <div className="container relative md:max-w-lg space-y-6 py-2 md:py-20">
      <header className="text-center">
        <h1 className="text-xl font-medium md:text-3xl">Purchases</h1>
        <p className="text-sm text-muted-foreground">
          View and manage your purchases
        </p>
      </header>
      <PurchasesList />
    </div>
  );
}
