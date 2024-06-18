import { getKitsUseCase } from "@/infrastructure/kits";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { Title } from "@/components/title";

export function KitsSection() {
  return (
    <div className="container space-y-10 px-4 py-16 lg:px-20">
      <Title
        title="starter kits"
        subtitle="Modern polished stacks"
        className="flex flex-col items-center"
      />
      <Suspense fallback={<KitsSkeleton />}>
        <Kits />
      </Suspense>
    </div>
  );
}

function KitsSkeleton() {
  return (
    <>
      <Skeleton className="h-[100px] w-full" />
      <Skeleton className="h-[100px] w-full" />
      <Skeleton className="h-[100px] w-full" />
    </>
  );
}

async function Kits() {
  const kits = await getKitsUseCase();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {kits.map((kit) => (
        <Link
          key={kit.id}
          href={kit.name}
          className="cursor-pointer rounded-lg border p-4 hover:border-primary hover:duration-200"
        >
          <div className="flex flex-row items-center space-x-4">
            <Image alt="Kit picture" src={kit.picture} width="50" height="50" />
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold uppercase text-primary">
                {kit.name}
              </span>
              <span className="line-clamp -2 text-sm text-muted-foreground">
                {kit.description}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
