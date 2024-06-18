import { getUserPurchasesUseCase } from "@/infrastructure/purchases";

import { validateRequest } from "@/lib/auth";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BookIcon, GithubIcon } from "lucide-react";

export async function PurchasesList() {
  const { user } = await validateRequest();

  if (!user) return;

  const purchases = await getUserPurchasesUseCase({ userId: user.id });

  return (
    <>
      {purchases.length === 0 ? (
        <div>No purchases were commited yet...</div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {purchases.map((purchase) => (
            <PurchaseItem
              key={purchase.id}
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

interface PurchaseItemProps {
  kitName: string;
  link: string;
  createdAt: Date;
}

export function PurchaseItem({ kitName, link, createdAt }: PurchaseItemProps) {
  return (
    <div className="flex flex-col space-y-5 rounded-lg border p-4">
      <div className="flex flex-row items-center space-x-4">
        <Button size="icon" variant="secondary" asChild>
          <Link href={link} target="_blank" rel="noreferrer">
            <span className="sr-only">github</span>
            <GithubIcon className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex flex-col overflow-hidden">
          <span className="font-bold uppercase text-primary">{kitName}</span>
          <span className="line-clamp -2 text-sm text-muted-foreground">
            {createdAt.toLocaleDateString()}
          </span>
        </div>
      </div>
      <Button variant="outline" asChild>
        <Link href={"/docs/" + kitName}>
          <BookIcon className="mr-2 h-4 w-4" /> Documentation
        </Link>
      </Button>
    </div>
  );
}

export function PurchasesListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
      <Skeleton className="h-[125px]" />
      <Skeleton className="h-[125px]" />
      <Skeleton className="h-[125px]" />
    </div>
  );
}
