import createMDX from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: "git",
    remarkPlugins: [[remarkInstall, { Tabs: "InstallTabs" }]],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-1.webcatalog.io",
      },
    ],
  },
};

export default withMDX(config);
