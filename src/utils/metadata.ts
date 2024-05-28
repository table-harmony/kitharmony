import { env } from "@/env";

import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: env.NEXT_PUBLIC_APP_URL,
      images: "/banner.png",
      siteName: "Kitharmony",
      ...override.openGraph,
    },
  };
}

export const baseUrl =
  env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(env.NEXT_PUBLIC_APP_URL);
