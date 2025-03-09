#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building and deploying to GitHub Pages..."

# Install dependencies if needed
npm install

# Set environment variables
export NEXT_PUBLIC_API_URL=https://ai-generated-resume.onrender.com

# Build the project
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi

# Create .nojekyll file to prevent Jekyll processing
touch dist/.nojekyll

# Deploy to GitHub Pages
npx gh-pages -d dist

echo "Deployment complete! Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/" 