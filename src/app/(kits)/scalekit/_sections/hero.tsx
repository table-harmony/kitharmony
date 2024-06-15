import { getKitByNameUseCase } from "@/infrastructure/kits";

import Link from "next/link";
import { Suspense } from "react";

import { PurchaseButton } from "../../_components/purchase-button";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Section } from "@/components/section";
import { ThemeImage } from "@/components/image-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckIcon } from "lucide-react";

export function HeroSection() {
  return (
    <Section id="hero" className="flex flex-col items-center space-y-10">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <ul className="space-y-1.5 leading-relaxed">
        <li className="flex items-center">
          <CheckIcon className="mr-2 h-4 w-4 text-primary" />
          Easily accessed
        </li>
        <li className="flex items-center">
          <CheckIcon className="mr-2 h-4 w-4 text-primary" />
          Beautifully designed interface
        </li>
        <li className="flex items-center">
          <CheckIcon className="mr-2 h-4 w-4 text-primary" />
          <p>
            Check it out for yourself{" "}
            <Link
              href="https://scalekit.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              here.
            </Link>
          </p>
        </li>
      </ul>
      <Suspense fallback={<Skeleton className="h-[50px] w-[300px]" />}>
        <PurchaseButton kitName="scalekit" />
      </Suspense>
      <ThemeImage
        className="max-w-6xl px-6 pt-8 sm:max-w-4xl md:max-w-screen-xl lg:px-8"
        src="/scalekit/landing/hero-light.png"
        dark="/scalekit/landing/hero-dark.png"
        alt="Hero image"
      />
    </Section>
  );
}

async function Header() {
  const kit = await getKitByNameUseCase({ name: "scalekit" });

  if (!kit) return;

  return (
    <PageHeader>
      <PageHeaderHeading>{kit.name.toUpperCase()}</PageHeaderHeading>
      <PageHeaderDescription>{kit.description}</PageHeaderDescription>
    </PageHeader>
  );
}

function HeaderSkeleton() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Skeleton className="h-[50px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[550px]" />
    </div>
  );
}
