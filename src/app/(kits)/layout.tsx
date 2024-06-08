import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SignedIn, SignedOut } from "@/components/signed";
import { CircleHelpIcon, CreditCardIcon, GithubIcon } from "lucide-react";

function Links() {
  return (
    <div className="mr-4 hidden gap-8 md:flex">
      <SignedOut>
        <Link href="/#kits" className="flex items-center text-xs">
          <GithubIcon className="mr-2 h-4 w-4" /> Starter kits
        </Link>
        <Link href="/#faq" className="flex items-center text-xs">
          <CircleHelpIcon className="mr-2 h-4 w-4" /> FAQ
        </Link>
      </SignedOut>
      <SignedIn>
        <Link href="/purchases" className="flex items-center text-xs">
          <CreditCardIcon className="mr-2 h-4 w-4" /> Purchases
        </Link>
      </SignedIn>
    </div>
  );
}

export default function KitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader links={<Links />} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
