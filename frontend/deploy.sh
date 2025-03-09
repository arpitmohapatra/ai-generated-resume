#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building and deploying to GitHub Pages..."

# Set environment to production
export NODE_ENV=production

# Install dependencies if needed
npm install

# Clean build directories
echo "Cleaning build directories..."
rm -rf .next out

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi

# Run the custom deployment script
echo "Deploying to GitHub Pages..."
node deploy-gh-pages.js

echo "Deployment complete! Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/" 