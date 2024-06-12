import { getRepoByName } from "@/infrastructure/repo";
import { getPurchaseByUserAndRepo } from "@/infrastructure/purchase";

import Link from "next/link";

import { validateRequest } from "@/lib/auth";

import { PurchaseForm } from "./purchase-form";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export async function PurchaseButton({ repoName }: { repoName: string }) {
  const { user } = await validateRequest();

  if (!user) return;

  const repo = await getRepoByName({ name: repoName });

  if (!repo) return;

  const purchase = await getPurchaseByUserAndRepo({
    userId: user.id,
    repoId: repo.id,
  });

  if (purchase)
    return (
      <Button className="w-72" asChild>
        <Link href="/purchases">
          <ShoppingCartIcon className="mr-2 h-4 w-4" />
          View purchase
        </Link>
      </Button>
    );

  return <PurchaseForm repoId={repo.id} />;
}
