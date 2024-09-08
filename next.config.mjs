import createMDX from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: "git",
    remarkPlugins: [[remarkInstall, { Tabs: "InstallTabs" }]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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

import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
});

export default pwaConfig(withMDX(nextConfig));
