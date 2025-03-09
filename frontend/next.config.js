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
  // Copy files from public to dist directory
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add a rule to copy files from public to dist directory
      config.module.rules.push({
        test: /\.(html)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "/",
            publicPath: "/_next/",
          },
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
