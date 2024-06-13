import db from "@/db";

import { redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { PurchaseItem } from "./purchase-item";

export async function PurchasesList() {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  const purchases = await db.purchase.findMany({
    where: { userId: user.id },
    include: { kit: true },
  });

  return (
    <>
      {purchases.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          id={purchase.id}
          kitName={purchase.kit.name}
          link={purchase.kit.link}
          createdAt={purchase.createdAt}
        />
      ))}
    </>
  );
}
