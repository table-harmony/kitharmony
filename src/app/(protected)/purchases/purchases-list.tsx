import { getUserPurchasesUseCase } from "@/infrastructure/purchases";

import { validateRequest } from "@/lib/auth";

import { PurchaseItem } from "./purchase-item";
import Image from "next/image";
import {
  NoResult,
  NoResultContent,
  NoResultTitle,
} from "@/components/no-result";

export async function PurchasesList() {
  const { user } = await validateRequest();

  if (!user) return;

  const purchases = await getUserPurchasesUseCase({ userId: user.id });

  return (
    <>
      {purchases.length === 0 ? (
        <NoResult>
          <NoResultTitle>No purchases were commited yet...</NoResultTitle>
          <NoResultContent>
            <Image
              alt="Purchase"
              width="300"
              height="300"
              src="/purchase-light.svg"
              className="hidden dark:block"
            />
            <Image
              alt="Purchase"
              width="300"
              height="300"
              src="/purchase-dark.svg"
              className="dark:hidden"
            />
          </NoResultContent>
        </NoResult>
      ) : (
        <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-2 md:py-16">
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
      )}
    </>
  );
}
