import { getPurchaseByUserAndKit } from "@/infrastructure/purchase";

import Link from "next/link";

import { validateRequest } from "@/lib/auth";

import { PurchaseForm } from "./purchase-form";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookIcon } from "lucide-react";
import { getKitByName } from "@/infrastructure/kit";

export async function PurchaseButton({ kitName }: { kitName: string }) {
  const { user } = await validateRequest();

  if (!user)
    return (
      <Button asChild className="w-72">
        <Link href="/login">
          Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    );

  const kit = await getKitByName({ name: kitName });

  if (!kit) return;

  const purchase = await getPurchaseByUserAndKit({
    userId: user.id,
    kitId: kit.id,
  });

  if (purchase)
    return (
      <Button className="w-72" asChild>
        <Link href={`/docs/${kit.name}`}>
          <BookIcon className="mr-2 h-4 w-4" />
          Documentation
        </Link>
      </Button>
    );

  return <PurchaseForm kitId={kit.id} />;
}
