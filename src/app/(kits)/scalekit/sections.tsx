import Link from "next/link";
import Image, { ImageProps } from "next/image";

import { PurchaseButton } from "../_components/purchase-button";

import { Title } from "@/components/title";
import { CheckIcon } from "lucide-react";

export async function MainSection() {
  return (
    <div className="container flex flex-col items-center space-y-10 pb-24 pt-12 md:py-20 lg:px-20">
      <h1 className="text-balance text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
        SCALEKIT
      </h1>
      <p className="max-w-2xl text-balance text-center text-sm text-muted-foreground sm:text-xl">
        production-ready saas starter kit for nextjs (app router) and prisma
      </p>
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
      <PurchaseButton repoName="scalekit" />
      <ImageWrapper
        src="/scalekit/hero-light.png"
        alt="Hero Image"
        className="flex max-w-6xl items-center justify-center px-6 pt-8 dark:hidden sm:max-w-4xl md:max-w-screen-xl lg:px-8"
      />
      <ImageWrapper
        src="/scalekit/hero-dark.png"
        alt="Hero Image"
        className="hidden max-w-6xl items-center justify-center px-6 pt-8 dark:flex sm:max-w-4xl md:max-w-screen-xl lg:px-8"
      />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 pb-16 pt-4 md:pt-16 lg:px-20">
      <Title
        title="features"
        subtitle="polished, end-to-end features needed in every saas"
        className="text-center"
      />
      <div className="mt-8 grid grid-cols-1 gap-14 md:mt-24 md:gap-40">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row-reverse">
          <Title
            title="Authentication"
            subtitle="Support for, oauth, and credentials."
            className="mt-4 flex w-full flex-col space-y-2 px-4 md:max-w-sm md:px-0 md:pt-0"
          />
          <ImageWrapper
            src="/scalekit/authentication-light.png"
            alt="Light Authentication feature"
            className="w-full px-6 dark:hidden sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
          <ImageWrapper
            src="/scalekit/authentication-dark.png"
            alt="Dark Authentication Image"
            className="hidden w-full px-6 dark:block sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <Title
            title="Emails"
            subtitle="Uses React Email and Resend."
            className="mt-4 flex w-full flex-col space-y-2 px-4 md:max-w-sm md:px-0 md:pt-0"
          />
          <ImageWrapper
            src="/scalekit/emails-light.png"
            alt="Light Emails feature"
            className="w-full px-6 dark:hidden sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
          <ImageWrapper
            src="/scalekit/emails-dark.png"
            alt="Dark Emails feature"
            className="hidden w-full px-6 dark:block sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row-reverse">
          <Title
            title="Documentation"
            subtitle="well-documented using Fumadocs."
            className="mt-4 flex w-full flex-col space-y-2 px-4 md:max-w-sm md:px-0 md:pt-0"
          />
          <ImageWrapper
            src="/scalekit/documentation-light.png"
            alt="Documentation feature"
            className="w-full px-6 dark:hidden sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
          <ImageWrapper
            src="/scalekit/documentation-dark.png"
            alt="Dark Documentation feature"
            className="hidden w-full px-6 dark:block sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
      </div>
    </div>
  );
}

export function PurchaseSection() {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center space-y-10 px-4 pt-0 md:pb-16 md:pt-16 lg:px-20">
      <Title
        title="Purchase"
        subtitle="pay once. unlimited use."
        className="text-center"
      />
      <PurchaseButton repoName="scalekit" />
    </div>
  );
}

function ImageWrapper({ src, alt, className }: ImageProps) {
  return (
    <div className={className}>
      <div className="-m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 dark:bg-neutral-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <Image
          src={src}
          alt={alt}
          width="1222"
          height="636"
          className="rounded-md bg-white shadow-2xl ring-1 ring-neutral-900/10"
        />
      </div>
    </div>
  );
}
