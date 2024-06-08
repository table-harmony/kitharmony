import Link from "next/link";

import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";
import { SignedIn, SignedOut } from "@/components/signed";
import { MobileNav } from "@/components/mobile-nav";

import { siteConfig } from "@/config/site";

import { FolderIcon } from "lucide-react";

export function SiteHeader({ links }: { links?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-muted/60 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
      <div className="container flex h-14 items-center justify-between gap-2">
        <div className="mr-4 hidden gap-8 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FolderIcon className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          {links}
        </div>
        <MobileNav />
        <SignedIn>
          <UserDropdown />
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}
