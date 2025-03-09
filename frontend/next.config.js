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
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
