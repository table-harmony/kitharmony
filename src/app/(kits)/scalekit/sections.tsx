import { getKitByNameUseCase } from "@/infrastructure/kits";

import Link from "next/link";

import { PurchaseButton } from "../_components/purchase-button";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Title } from "@/components/title";
import { Section } from "@/components/section";
import { ThemeImage } from "@/components/image-wrapper";
import { CheckIcon } from "lucide-react";
import { Suspense } from "react";

async function Header() {
  const kit = await getKitByNameUseCase({ name: "scalekit" });

  if (!kit) return;

  return (
    <PageHeader>
      <PageHeaderHeading className="text-primary">
        {kit.name.toUpperCase()}
      </PageHeaderHeading>
      <PageHeaderDescription>{kit.description}</PageHeaderDescription>
    </PageHeader>
  );
}

export async function MainSection() {
  return (
    <Section id="main" className="flex flex-col items-center space-y-10">
      <Suspense>
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
      <Suspense>
        <PurchaseButton kitName="scalekit" />
      </Suspense>
      <ThemeImage
        src="/scalekit/landing/hero-light.png"
        dark="/scalekit/landing/hero-dark.png"
        alt="Hero image"
        className="max-w-6xl px-6 pt-8 sm:max-w-4xl md:max-w-screen-xl lg:px-8"
      />
    </Section>
  );
}

export function FeaturesSection() {
  return (
    <Section id="features" className="flex flex-col items-center">
      <Title
        title="features"
        subtitle="polished, end-to-end features needed in every saas"
        className="text-center"
      />
      <div className="mt-8 grid grid-cols-1 gap-20 md:mt-24 md:gap-40">
        <div className="flex flex-col items-center justify-center md:flex-row-reverse">
          <Title
            title="Authentication"
            subtitle="Support for oauth and credentials."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            src="/scalekit/landing/authentication-light.png"
            dark="/scalekit/landing/authentication-dark.png"
            alt="First feature"
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <Title
            title="Emails"
            subtitle="Uses React Email and Resend."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            src="/scalekit/landing/emails-light.png"
            dark="/scalekit/landing/emails-dark.png"
            alt="Second feature"
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row-reverse">
          <Title
            title="Documentation"
            subtitle="well-documented using Fumadocs."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            src="/scalekit/landing/documentation-light.png"
            dark="/scalekit/landing/documentation-dark.png"
            alt="Third feature"
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
      </div>
    </Section>
  );
}

export function PurchaseSection() {
  return (
    <Section className="flex flex-col items-center justify-center space-y-10">
      <Title
        title="Purchase"
        subtitle="pay once. unlimited use."
        className="text-center"
      />
      <Suspense>
        <PurchaseButton kitName="scalekit" />
      </Suspense>
    </Section>
  );
}
