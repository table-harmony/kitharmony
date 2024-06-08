import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "@/utils/source";

export default async function RootDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DocsLayout tree={pageTree} nav={{ title: "Kitharmony" }}>
        {children}
      </DocsLayout>
    </>
  );
}
