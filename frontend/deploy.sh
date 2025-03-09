#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building and deploying to GitHub Pages..."

# Install dependencies if needed
npm install

# Build the project
npm run build

# Create .nojekyll file to prevent Jekyll processing
touch out/.nojekyll

# Deploy to GitHub Pages
npx gh-pages -d out -t true

echo "Deployment complete! Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/" 