import { getPurchasesByUser } from "@/infrastructure/purchase";

import { validateRequest } from "@/lib/auth";

import { PurchaseItem } from "./purchase-item";
import { redirect } from "next/navigation";

export async function PurchasesList() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  const purchases = await getPurchasesByUser({ userId: user.id });

  return (
    <>
      {purchases.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          id={purchase.id}
          repoName={purchase.repo.name}
          link={purchase.repo.link}
          createdAt={purchase.createdAt}
        />
      ))}
    </>
  );
}
