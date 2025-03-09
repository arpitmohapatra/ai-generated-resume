/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set both basePath and assetPrefix to the same value without trailing slash
  basePath: process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "",
  images: {
    unoptimized: true,
  },
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
  // Use dist directory for output
  distDir: "dist",
};

module.exports = nextConfig;
