import { getKitsUseCase } from "@/infrastructure/kits";

import Link from "next/link";
import { Suspense } from "react";

import { siteConfig } from "@/config/site";
import { validateRequest } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/title";
import { ArrowRightIcon, CreditCardIcon } from "lucide-react";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Section } from "@/components/section";
import { ThemeImage } from "@/components/image-wrapper";
import { KitCard } from "@/components/kit-card";

export async function MainSection() {
  const { user } = await validateRequest();

  return (
    <Section>
      <PageHeader>
        <PageHeaderHeading className="w-[980px] text-balance text-4xl font-bold md:text-6xl lg:text-7xl">
          modern, fully built and polished stacks
        </PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
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
        dark="/banner-dark.png"
        alt="Hero image"
        className="max-w-6xl px-6 pt-8 sm:max-w-4xl md:max-w-screen-xl lg:px-8"
      />
    </Section>
  );
}

export function StaterKitsSection() {
  return (
    <Section id="kits">
      <Title title="Starter kits" subtitle="modern, polished stacks" />
      <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-3 md:py-16">
        <Suspense>
          <Kits />
        </Suspense>
      </div>
    </Section>
  );
}

async function Kits() {
  const kits = await getKitsUseCase();

  return (
    <>
      {kits.length !== 0 &&
        kits.map((kit) => <KitCard key={kit.id} {...kit} />)}
    </>
  );
}
