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
    content = content.replace(
      /"\/ai-generated-resume\/_next\//g,
      '"/ai-generated-resume/_next/'
    );

    // Fix base path references
    content = content.replace(/href="\//g, 'href="/ai-generated-resume/');
    content = content.replace(
      /href="\/ai-generated-resume\/ai-generated-resume\//g,
      'href="/ai-generated-resume/'
    );

    // Fix script paths
    content = content.replace(/src="\//g, 'src="/ai-generated-resume/');
    content = content.replace(
      /src="\/ai-generated-resume\/ai-generated-resume\//g,
      'src="/ai-generated-resume/'
    );

    // Fix JSON data paths
    content = content.replace(/"\/"/g, '"/ai-generated-resume/"');
    content = content.replace(
      /"\/ai-generated-resume\/ai-generated-resume\//g,
      '"/ai-generated-resume/'
    );

    // Write the fixed content back
    fs.writeFileSync(file, content);
    console.log(`Fixed paths in ${file}`);
  });
}

// Create a simple 404.html file that redirects to the main page
function create404Page() {
  const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    window.location.href = "/ai-generated-resume/";
  </script>
  <meta http-equiv="refresh" content="0;URL='/ai-generated-resume/'" />
</head>
<body>
  <h1>Page Not Found</h1>
  <p>Redirecting to <a href="/ai-generated-resume/">home page</a>...</p>
</body>
</html>
  `;

  fs.writeFileSync(path.join(distDir, "404.html"), content);
  console.log("Created custom 404.html");
}

// Main function
function main() {
  console.log("Fixing asset paths for GitHub Pages...");
  const htmlFiles = findHtmlFiles(distDir);
  fixPaths(htmlFiles);
  create404Page();
  console.log("Done!");
}

main();
