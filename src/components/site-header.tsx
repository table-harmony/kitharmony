import Link from "next/link";

import { validateRequest } from "@/lib/auth";

import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";

export async function SiteHeader() {
  const { user } = await validateRequest();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-muted/60 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
      <div className="container flex h-14 items-center md:justify-between gap-2">
        <MainNav />
        {!user ? (
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        ) : (
          <UserDropdown />
        )}
      </div>
    </header>
  );
}
