import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CreditCardIcon } from "lucide-react";

function Links() {
  return (
    <div className="mr-4 hidden gap-8 md:flex">
      <Link href="/purchases" className="flex items-center text-xs">
        <CreditCardIcon className="mr-2 h-4 w-4" /> Purchases
      </Link>
    </div>
  );
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader links={<Links />} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
