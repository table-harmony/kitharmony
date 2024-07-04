import { getPages } from "@/lib/source";

import { createSearchAPI } from "fumadocs-core/search/server";

//TODO: restrict access to pages from a kit user is not currently on.
export const { GET } = createSearchAPI("advanced", {
  indexes: getPages().map((page) => ({
    title: page.data.title,
    structuredData: page.data.exports.structuredData,
    id: page.url,
    url: page.url,
  })),
});
