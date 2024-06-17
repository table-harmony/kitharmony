import { getKitsUseCase } from "@/infrastructure/kits";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

export function KitsSection() {
  return (
    <div className="container space-y-10 px-4 py-16 lg:px-20">
      <div className="flex flex-col items-center">
        <h2 className="max-w-lg text-2xl font-bold uppercase text-primary md:text-4xl">
          Starter kits
        </h2>
        <p className="mb-2 font-semibold">modern polished stacks</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<KitsSkeleton />}>
          <Kits />
        </Suspense>
      </div>
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
    <>
      {kits.map((kit) => (
        <Link
          key={kit.id}
          href={kit.name}
          className="cursor-pointer rounded-lg border p-4 hover:border-black hover:duration-200"
        >
          <div className="flex flex-row items-center space-x-4">
            <Image alt="Kit picture" src={kit.picture} width="50" height="50" />
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold uppercase">{kit.name}</span>
              <span className="line-clamp -2 text-sm text-muted-foreground">
                {kit.description}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
