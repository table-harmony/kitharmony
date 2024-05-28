import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CreditCardIcon, GithubIcon } from "lucide-react";
import { SignedIn } from "@/components/signed";

function Links() {
  return (
    <div className="flex gap-8">
      <SignedIn>
        <Link href="/purchases" className="flex items-center text-xs">
          <CreditCardIcon className="mr-2 h-4 w-4" /> Purchases
        </Link>
      </SignedIn>
      <Link href="/kits" className="flex items-center text-xs">
        <GithubIcon className="mr-2 h-4 w-4" /> Starter kits
      </Link>
    </div>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SiteHeader links={<Links />} />
      {children}
      <SiteFooter />
    </>
  );
}
