#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building and deploying to GitHub Pages..."

# Set environment to production
export NODE_ENV=production

# Install dependencies if needed
npm install

# Build the project
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi

# Run the custom deployment script
node deploy-gh-pages.js

echo "Deployment complete! Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/" 