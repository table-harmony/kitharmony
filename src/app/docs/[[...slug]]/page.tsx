import { getRepoByName } from "@/infrastructure/repo";
import { getPurchaseByUserAndRepo } from "@/infrastructure/purchase";

import { notFound, redirect } from "next/navigation";

import { validateRequest } from "@/lib/auth";

import { createMetadata } from "@/utils/metadata";
import { getPage, getPages } from "@/utils/source";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { ExternalLinkIcon } from "lucide-react";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  await getPurchaseFromParams(params);

  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  const path = `content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      tableOfContent={{
        enabled: page.data.toc,
        footer: (
          <a
            href={`https://github.com/table-harmony/kitharmony/blob/master/${path}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Edit on Github <ExternalLinkIcon className="size-3" />
          </a>
        ),
      }}
    >
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

async function getPurchaseFromParams(params: { slug?: string[] }) {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  const kit = params.slug?.at(0);

  const repo = await getRepoByName({ name: kit ?? "" });

  if (!repo) redirect("/");

  const purchase = await getPurchaseByUserAndRepo({
    userId: user.id,
    repoId: repo.id,
  });

  if (!purchase) redirect("/");
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