import Link from "next/link";

import { siteConfig } from "@/config/site";
import { validateRequest } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";

import { FolderIcon } from "lucide-react";

export async function SiteHeader({ links }: { links?: React.ReactNode }) {
  const { user } = await validateRequest();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-2">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <FolderIcon className="h-6 w-6" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        {links}
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
