/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ai-generated-resume/" : "",
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
  // Configure webpack to handle paths correctly
  webpack: (config) => {
    // This is needed for GitHub Pages
    config.output.publicPath =
      process.env.NODE_ENV === "production" ? "/ai-generated-resume/" : "/";
    return config;
  },
};

module.exports = nextConfig;
