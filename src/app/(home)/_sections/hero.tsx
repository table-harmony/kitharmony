import { siteConfig } from "@/config/site";
import { validateRequest } from "@/lib/auth";

import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import {
  ArrowRightIcon,
  BookIcon,
  CreditCardIcon,
  FoldersIcon,
  ShoppingCartIcon,
} from "lucide-react";

export async function HeroSection() {
  const { user } = await validateRequest();

  return (
    <Section className="space-y-5">
      <PageHeader className="space-y-5">
        <PageHeaderHeading className="max-w-[980px] text-balance text-4xl font-bold md:text-6xl lg:text-7xl">
          Modern, fully built and polished stacks
        </PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageActions>
          {user ? (
            <Button className="w-72" asChild>
              <Link href="/purchases">
                <ShoppingCartIcon className="mr-2 h-4 w-4" /> View purchases
              </Link>
            </Button>
          ) : (
            <Button asChild className="w-72">
              <Link href="/login">
                Get started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </PageActions>
      </PageHeader>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 md:mt-24 md:grid-cols-3">
        <div className="flex flex-col space-y-2 p-4 md:p-6">
          <div className="flex items-center">
            <FoldersIcon className="mr-2 h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Resources</span>
          </div>
          <p>
            The starter kits will enable you to setup your own SaaS product.
          </p>
        </div>
        <div className="flex flex-col space-y-2 p-4 md:p-6">
          <div className="flex items-center">
            <CreditCardIcon className="mr-2 h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Purchases</span>
          </div>
          <p>Access to starter kit repository code and documentation.</p>
        </div>
        <div className="flex flex-col space-y-2 p-4 md:p-6">
          <div className="flex items-center">
            <BookIcon className="mr-2 h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Documentation</span>
          </div>
          <p>
            Including a complete walkthrough on how to set the starter kits up
            and maintain them.
          </p>
        </div>
      </div>
    </Section>
  );
}
