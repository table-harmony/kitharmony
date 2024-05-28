import db from "@/db";

import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

import { validateRequest } from "@/lib/auth";

import { getPage, getPages } from "@/utils/source";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { createMetadata } from "@/utils/metadata";

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

  return (
    <DocsPage toc={page.data.exports.toc}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

async function getPurchaseFromParams(params: { slug?: string[] }) {
  const { user } = await validateRequest();

  if (!user) redirect("/");

  const kit = params.slug?.at(0);

  const repo = await db.repo.findUnique({ where: { name: kit } });

  if (!repo) redirect("/");

  const purchase = await db.purchase.findUnique({
    where: {
      userId_repoId: {
        userId: user.id,
        repoId: repo.id,
      },
    },
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
