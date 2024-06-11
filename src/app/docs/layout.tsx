import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "@/utils/source";
import { RootProvider } from "fumadocs-ui/provider";

export default async function RootDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <DocsLayout tree={pageTree} nav={{ title: "Kitharmony" }}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
