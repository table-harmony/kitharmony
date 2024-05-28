import Link from "next/link";

import { siteConfig } from "@/config/site";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="z-10 border-t border-border py-8 flex flex-col relative">
      <div className="mx-auto container px-4 lg:px-20">
        <section className="flex space-y-2 items-center justify-center flex-col">
          <Link href="/" className="font-medium text-2xl">
            {siteConfig.name}
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" className="rounded-full">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">github</span>
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">linkedin</span>
                <LinkedinIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        <section className="mt-16 flex flex-col-reverse md:flex-row md:justify-between items-center border-t border-border pt-4 md:pt-8 sm:mt-20 lg:mt-24">
          <p className="text-balance text-sm leading-loose text-muted-foreground w-full text-left mt-4 md:mt-0">
            Built by{" "}
            <Link
              href="https://tableharmony.io"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              TableHarmony.
            </Link>{" "}
            The source code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub.
            </Link>
          </p>
          <div className="w-full justify-start flex md:justify-end">
            <ModeToggle />
          </div>
        </section>
      </div>
    </footer>
  );
}
