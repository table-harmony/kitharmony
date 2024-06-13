import { getRepoByName } from "@/infrastructure/repo";

import { Section } from "@/components/section";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PurchaseButton } from "../_components/purchase-button";
import { Suspense } from "react";

export default async function AspkitPage() {
  return (
    <Section>
      <Suspense>
        <Header />
      </Suspense>
    </Section>
  );
}

async function Header() {
  const repo = await getRepoByName({ name: "aspkit" });

  if (!repo) return;

  return (
    <PageHeader>
      <PageHeaderHeading className="text-primary">
        {repo.name.toUpperCase()}
      </PageHeaderHeading>
      <PageHeaderDescription>{repo.description}</PageHeaderDescription>
      <PageActions>
        <PurchaseButton repoName={repo.name} />
      </PageActions>
    </PageHeader>
  );
}
