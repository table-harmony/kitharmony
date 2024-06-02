import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function MainSection() {
  return (
    <section>
      <div className="container flex flex-col items-center space-y-10 pb-24 pt-12 md:py-20 lg:px-20">
        <h1 className="text-balance text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {siteConfig.description}
        </h1>
        <Button className="w-72 rounded-full" asChild>
          <Link href="/kits">
            <GithubIcon className="mr-2 h-4 w-4" /> Our Starter kits
          </Link>
        </Button>
      </div>
    </section>
  );
}
