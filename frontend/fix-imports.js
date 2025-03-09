const fs = require("fs");
const path = require("path");

// Function to recursively find TypeScript files
function findTsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findTsFiles(filePath, fileList);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to fix import paths in TypeScript files
function fixImports(tsFile) {
  console.log(`Fixing imports in ${tsFile}`);

  let content = fs.readFileSync(tsFile, "utf8");

  // Fix import paths
  content = content.replace(/@\/components\/ui\//g, "../components/ui/");
  content = content.replace(/@\/components\//g, "../components/");
  content = content.replace(/@\/contexts\//g, "../contexts/");
  content = content.replace(/@\/config/g, "../config");
  content = content.replace(/@\/lib\//g, "../lib/");

  fs.writeFileSync(tsFile, content);
}

// Main function
function main() {
  const srcDir = path.join(__dirname, "src");

  if (!fs.existsSync(srcDir)) {
    console.error('The "src" directory does not exist.');
    process.exit(1);
  }

  const tsFiles = findTsFiles(srcDir);

  if (tsFiles.length === 0) {
    console.warn('No TypeScript files found in the "src" directory.');
    return;
  }

  tsFiles.forEach(fixImports);

  console.log(`Fixed imports in ${tsFiles.length} TypeScript files.`);
}

main();
