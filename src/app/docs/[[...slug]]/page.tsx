import { notFound } from "next/navigation";

import { createMetadata } from "@/lib/metadata";
import { getPage, getPages } from "@/lib/source";

import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { RollButton } from "fumadocs-ui/components/roll-button";

import { ExternalLinkIcon } from "lucide-react";

export default function Page({ params }: { params: { slug?: string[] } }) {
  //TODO: restirct access from users who havent bought the kit

  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  const path = `https://github.com/table-harmony/kitharmony/blob/master/content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      tableOfContent={{
        enabled: page.data.toc,
        footer: (
          <a
            href={path}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Edit on Github <ExternalLinkIcon className="size-3" />
          </a>
        ),
      }}
    >
      <RollButton />
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        {page.data.title}
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        {page.data.description}
      </p>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (!page) notFound();

  const description =
    page.data.description ?? "The library for building documentation sites";

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
    },
  });
}
