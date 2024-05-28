import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout tree={pageTree}>{children}</DocsLayout>
    </RootProvider>
  );
}
