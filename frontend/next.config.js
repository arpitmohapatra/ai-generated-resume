/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ai-generated-resume/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: "out",
};

module.exports = nextConfig;
