import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: "git",
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
