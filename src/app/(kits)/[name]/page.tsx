import { getRepoByName, getRepos } from "@/infrastructure/repo";
import { getPurchaseByUserAndRepo } from "@/infrastructure/purchase";

import Link from "next/link";
import { notFound } from "next/navigation";

import { validateRequest } from "@/lib/auth";
import { createMetadata } from "@/utils/metadata";

import { Button } from "@/components/ui/button";
import { PurchaseForm } from "./form";

export async function generateStaticParams() {
  const repos = await getRepos();

  return repos.map((repo) => ({
    name: repo.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const repo = await getRepoByName({ name: params.name });

  if (!repo) notFound();

  return createMetadata({
    title: repo.name,
    description: repo.description,
  });
}

export default async function KitPage({
  params,
}: {
  params: { name: string };
}) {
  const repo = await getRepoByName({ name: params.name });

  if (!repo) notFound();

  return (
    <div className="container flex flex-col items-center space-y-10 pb-24 pt-12 md:py-20 lg:px-20">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-balance text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {repo.name.toUpperCase()}
        </h1>
        <p className="max-w-[750px] text-center text-sm text-muted-foreground">
          {repo.description}
        </p>
      </div>
      <Purchase repoId={repo.id} />
    </div>
  );
}

async function Purchase({ repoId }: { repoId: string }) {
  const { user } = await validateRequest();

  if (!user) return;

  const purchase = await getPurchaseByUserAndRepo({
    userId: user.id,
    repoId: repoId,
  });

  if (purchase)
    return (
      <Button asChild>
        <Link href="/purchases">View purchase</Link>
      </Button>
    );

  return <PurchaseForm repoId={repoId} />;
}
