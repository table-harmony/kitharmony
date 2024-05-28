import db from "@/db";
import { validateRequest } from "@/lib/auth";

import { PurchaseItem } from "./purchase-item";

export async function PurchasesList() {
  const { user } = await validateRequest();

  const purchases = await db.purchase.findMany({
    where: { userId: user?.id },
    include: { repo: true },
  });

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
