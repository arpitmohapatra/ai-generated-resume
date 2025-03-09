#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building and deploying to GitHub Pages..."

# Set environment to production
export NODE_ENV=production

# Clean build directories
echo "Cleaning build directories..."
rm -rf .next out

# Build and deploy
echo "Building and deploying the project..."
npm run build && mkdir -p out && touch out/.nojekyll && npx gh-pages -d out

# Check if deployment was successful
if [ $? -ne 0 ]; then
  echo "Deployment failed. Please fix the errors and try again."
  exit 1
fi

echo "Deployment complete! Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/" 