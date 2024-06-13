import { getUserPurchasesUseCase } from "@/infrastructure/purchases";

import { validateRequest } from "@/lib/auth";

import { PurchaseItem } from "./purchase-item";
import { Card, CardContent } from "@/components/ui/card";

export async function PurchasesList() {
  const { user } = await validateRequest();

  if (!user) return;

  const purchases = await getUserPurchasesUseCase({ userId: user.id });

  return (
    <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-3 md:py-16">
      {purchases.length === 0 && (
        <Card>
          <CardContent>No results...</CardContent>
        </Card>
      )}

      {purchases.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          id={purchase.id}
          kitName={purchase.kit.name}
          link={purchase.kit.link}
          createdAt={purchase.createdAt}
        />
      ))}
    </div>
  );
}
