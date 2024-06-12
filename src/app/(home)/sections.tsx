import { getRepos } from "@/infrastructure/repo";

import Link from "next/link";
import { Suspense } from "react";

import { siteConfig } from "@/config/site";
import { validateRequest } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RepoCard } from "@/components/repo-card";
import { Title } from "@/components/title";
import { ArrowRightIcon, CreditCardIcon } from "lucide-react";

export async function MainSection() {
  const { user } = await validateRequest();

  return (
    <section>
      <div className="container flex flex-col items-center space-y-10 pb-24 pt-12 md:py-20 lg:px-20">
        <h1 className="text-balance text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {siteConfig.description}
        </h1>
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
      </div>
    </section>
  );
}

export function StaterKitsSection() {
  return (
    <section id="kits">
      <div className="container flex flex-col items-center pb-24 pt-12 md:py-20 lg:px-20">
        <Title
          title="Starter kits"
          subtitle="modern, polished stacks"
          className="text-center"
        />
        <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-3 md:py-16">
          <Suspense fallback={<p>Loading...</p>}>
            <Kits />
          </Suspense>
        </div>
      </div>
    </section>
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

export function FaqSection() {
  return (
    <section id="faq">
      <div className="container flex flex-col items-center pb-24 pt-12 md:py-20 lg:px-20">
        <Title
          title="FAQ"
          subtitle="Frequently Asked Questions"
          className="text-center"
        />
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who should buy AspKit ?</AccordionTrigger>
            <AccordionContent>
              Aspkit is for those interested in using standard technologies at
              ASP.NET
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
