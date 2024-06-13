import { getRepos } from "@/infrastructure/repo";

import Link from "next/link";
import { Suspense } from "react";

import { siteConfig } from "@/config/site";
import { validateRequest } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { RepoCard } from "@/components/repo-card";
import { Title } from "@/components/title";
import { ArrowRightIcon, CreditCardIcon } from "lucide-react";
import {
  PageActions,
  PageHeader,
  PageHeaderHeading,
} from "@/components/page-header";
import { Section } from "@/components/section";
import { ThemeImage } from "@/components/image-wrapper";

export async function MainSection() {
  const { user } = await validateRequest();

  return (
    <Section>
      <PageHeader>
        <PageHeaderHeading className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
          {siteConfig.description}
        </PageHeaderHeading>
        <PageActions>
          {user ? (
            <Button className="w-72" asChild>
              <Link href="/purchases">
                <CreditCardIcon className="mr-2 h-4 w-4" /> Purchases
              </Link>
            </Button>
          ) : (
            <Button asChild className="w-72">
              <Link href="/login">
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </PageActions>
      </PageHeader>
      <ThemeImage
        src="/banner-light.png"
        alt="Hero image"
        className="max-w-6xl px-6 pt-8 sm:max-w-4xl md:max-w-screen-xl lg:px-8"
        dark="/banner-dark.png"
      />
    </Section>
  );
}

export function StaterKitsSection() {
  return (
    <Section id="kits">
      <Title
        title="Starter kits"
        subtitle="modern, polished stacks"
        className="flex flex-col items-center"
      />
      <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-3 md:py-16">
        <Suspense fallback={<p>Loading...</p>}>
          <Kits />
        </Suspense>
      </div>
    </Section>
  );
}

async function Kits() {
  const repos = await getRepos();

  return (
    <>
      {repos.length !== 0 &&
        repos.map((repo) => <RepoCard key={repo.id} {...repo} />)}
    </>
  );
}
