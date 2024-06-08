import { SignedIn, SignedOut } from "@/components/signed";
import { getRepoByName, getRepos } from "@/infrastructure/repo";
import { notFound } from "next/navigation";
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

  return {
    title: repo.name,
    description: repo.description,
  };
}

export default async function RoomPage({
  params,
}: {
  params: { name: string };
}) {
  const repo = await getRepoByName({ name: params.name });

  if (!repo) notFound();

  return (
    <div className="container flex flex-col space-y-12 pb-24 pt-12 md:py-20 lg:px-20">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-balance text-center text-xl font-bold md:text-3xl lg:text-4xl">
          {repo.name.toUpperCase()}
        </h1>
        <p className="max-w-[750px] text-center text-sm text-muted-foreground">
          {repo.description}
        </p>
      </div>
      <SignedIn>
        <PurchaseForm repoName={repo.name} />
      </SignedIn>
      <SignedOut>Login in order to purchase this starter kit</SignedOut>
    </div>
  );
}
