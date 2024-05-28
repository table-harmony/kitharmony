"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

import { FolderIcon } from "lucide-react";

export function MainNav() {
  return (
    <div className="mr-4 flex gap-2">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <FolderIcon className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
