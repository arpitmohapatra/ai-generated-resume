const fs = require("fs");
const path = require("path");

// Directory to search in
const distDir = path.join(__dirname, "dist");

// Function to recursively find HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === ".html") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to fix paths in HTML files
function fixPaths(htmlFiles) {
  htmlFiles.forEach((file) => {
    let content = fs.readFileSync(file, "utf8");

    // Fix asset paths
    content = content.replace(/"\/_next\//g, '"/ai-generated-resume/_next/');

    // Write the fixed content back
    fs.writeFileSync(file, content);
    console.log(`Fixed paths in ${file}`);
  });
}

// Main function
function main() {
  console.log("Fixing asset paths for GitHub Pages...");
  const htmlFiles = findHtmlFiles(distDir);
  fixPaths(htmlFiles);
  console.log("Done!");
}

main();
