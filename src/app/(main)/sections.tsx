import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function MainSection() {
  return (
    <section>
      <div className="container lg:px-20 pt-12 pb-24 md:py-20 space-y-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-center">
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
