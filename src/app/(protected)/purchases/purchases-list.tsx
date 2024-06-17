import { getUserPurchasesUseCase } from "@/infrastructure/purchases";

import { validateRequest } from "@/lib/auth";

import { PurchaseItem } from "./purchase-item";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export async function PurchasesList() {
  const { user } = await validateRequest();

  if (!user) return;

  const purchases = await getUserPurchasesUseCase({ userId: user.id });

  return (
    <>
      {purchases.length === 0 ? (
        <div>No purchases were commited yet...</div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
