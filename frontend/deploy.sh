#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building and deploying to GitHub Pages..."

# Install dependencies if needed
npm install

# Set environment variables
export NEXT_PUBLIC_API_URL=https://ai-generated-resume.onrender.com
export NODE_ENV=production

# Build the project
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi

# Create .nojekyll file to prevent Jekyll processing
touch dist/.nojekyll

# Copy the custom 404.html to the root of the dist directory
cp public/404.html dist/404.html
cp public/index.html dist/index.html

# Fix asset paths
node fix-paths.js

# Deploy to GitHub Pages
npx gh-pages -d dist

echo "Deployment complete! Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/" 