import Link from "next/link";

import { siteConfig } from "@/config/site";

import { SignedIn } from "@/components/signed";
import { CreditCardIcon, FolderIcon, GithubIcon } from "lucide-react";

export function MainNav() {
  return (
    <div className="mr-4 hidden gap-8 md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <FolderIcon className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <SignedIn>
        <Link href="/purchases" className="flex items-center text-xs">
          <CreditCardIcon className="mr-2 h-4 w-4" /> Purchases
        </Link>
      </SignedIn>
      <Link href="/#kits" className="flex items-center text-xs">
        <GithubIcon className="mr-2 h-4 w-4" /> Starter kits
      </Link>
    </div>
  );
}
