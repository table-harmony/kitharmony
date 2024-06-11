import Link from "next/link";

import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CreditCardIcon, GithubIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SignedIn, SignedOut } from "@/components/signed";
import { getRepos } from "@/infrastructure/repo";
import { Suspense } from "react";
import { RepoCard } from "@/components/repo-card";

export function MainSection() {
  return (
    <section>
      <div className="container flex flex-col items-center space-y-10 pb-24 pt-12 md:py-20 lg:px-20">
        <h1 className="text-balance text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {siteConfig.description}
        </h1>
        <SignedIn>
          <Button className="w-72 rounded-full" asChild>
            <Link href="/purchases">
              <CreditCardIcon className="mr-2 h-4 w-4" /> Purchases
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild className="w-72">
            <Link href="/login">
              Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </SignedOut>
      </div>
    </section>
  );
}

export async function StaterKitsSection() {
  const repos = await getRepos();

  return (
    <section id="kits" className="bg-muted/40">
      <div className="container flex flex-col items-center pb-24 pt-12 md:py-20 lg:px-20">
        <Title title="Starter kits" subtitle="modern, polished stacks" />
        <div className="flex w-full flex-col gap-6 py-8 md:grid md:grid-cols-3 md:py-16">
          <Suspense fallback={<p>Loading...</p>}>
            {repos.length !== 0 &&
              repos.map((repo) => <RepoCard key={repo.id} {...repo} />)}
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq">
      <div className="container flex flex-col items-center pb-24 pt-12 md:py-20 lg:px-20">
        <Title title="FAQ" subtitle="Frequently Asked Questions" />
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

interface TitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function Title({ title, subtitle, className }: TitleProps) {
  return (
    <div className={cn("flex flex-col space-y-4 text-center", className)}>
      <p className="text-primary">{title}</p>
      <h2 className="text-2xl font-bold md:text-4xl">{subtitle}</h2>
    </div>
  );
}
