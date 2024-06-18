import { getPurchaseUseCase } from "@/infrastructure/purchases";
import { getKitByNameUseCase } from "@/infrastructure/kits";

import Link from "next/link";

import { validateRequest } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { SignedIn } from "@/components/auth/signed-in";
import { SignedOut } from "@/components/auth/signed-out";
import { ArrowRightIcon, BookIcon, CreditCardIcon } from "lucide-react";

async function PurchaseButton({ kitName }: { kitName: string }) {
  const { user } = await validateRequest();

  if (!user) return;

  const kit = await getKitByNameUseCase({ name: kitName });

  if (!kit) return;

  const purchase = await getPurchaseUseCase({
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

  return (
    <Button className="w-72" asChild>
      <Link href={`/api/purchase?kit=${kit.name}`}>
        <CreditCardIcon className="mr-2 h-4 w-4" /> Purchase
      </Link>
    </Button>
  );
}

export function KitButton({ kitName }: { kitName: string }) {
  return (
    <>
      <SignedIn>
        <PurchaseButton kitName={kitName} />
      </SignedIn>
      <SignedOut>
        <Button asChild className="w-72">
          <Link href="/login">
            Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </SignedOut>
    </>
  );
}
