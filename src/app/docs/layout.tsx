import { siteConfig } from "@/config/site";

import { pageTree } from "@/lib/source";

import { DocsLayout } from "fumadocs-ui/layout";
import { RootProvider } from "fumadocs-ui/provider";

export default async function RootDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <DocsLayout
        tree={pageTree}
        nav={{ title: siteConfig.name.toUpperCase() }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
