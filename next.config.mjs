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
        hostname: "w7.pngwing.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
      },
    ],
  },
};

export default withMDX(config);
