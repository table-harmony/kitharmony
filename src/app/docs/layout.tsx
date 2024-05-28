import { SiteHeader } from "@/components/site-header";
import { pageTree } from "@/utils/source";
import { DocsLayout } from "fumadocs-ui/layout";

export default function RootDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <DocsLayout tree={pageTree} nav={{ title: "Kitharmony" }}>
        {children}
      </DocsLayout>
    </>
  );
}
