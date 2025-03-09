const ghpages = require("gh-pages");
const path = require("path");
const fs = require("fs");

// Ensure the out directory exists
const outDir = path.join(__dirname, "out");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Create .nojekyll file
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

// Deploy to GitHub Pages
ghpages.publish(
  "out",
  {
    branch: "gh-pages",
    dotfiles: true,
    message: "Deploy to GitHub Pages [skip ci]",
  },
  (err) => {
    if (err) {
      console.error("Deployment failed:", err);
      process.exit(1);
    } else {
      console.log("Deployment complete!");
      console.log(
        "Your site will be available at: https://arpitmohapatra.github.io/ai-generated-resume/"
      );
    }
  }
);
