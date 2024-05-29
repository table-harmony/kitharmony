import Link from "next/link";

import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";
import { SignedIn, SignedOut } from "@/components/signed";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-muted/60 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
      <div className="container flex h-14 items-center justify-between gap-2">
        <MobileNav />
        <MainNav />
        <SignedIn>
          <UserDropdown />
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}
