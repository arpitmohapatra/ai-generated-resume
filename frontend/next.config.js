/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "",
  images: {
    unoptimized: true,
  },
  // This is needed for GitHub Pages
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "",
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
