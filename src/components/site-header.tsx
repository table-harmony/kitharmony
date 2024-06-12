import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";
import { MobileNav } from "@/components/mobile-nav";

import { siteConfig } from "@/config/site";

import { FolderIcon } from "lucide-react";
import { validateRequest } from "@/lib/auth";

export async function SiteHeader({ links }: { links?: React.ReactNode }) {
  const { user } = await validateRequest();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-2">
        <div className="mr-4 hidden gap-8 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FolderIcon className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          {links}
        </div>
        <MobileNav />
        {user ? (
          <UserDropdown />
        ) : (
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
