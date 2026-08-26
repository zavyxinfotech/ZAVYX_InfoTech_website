const fs = require('fs');
const path = require('path');

function isCaseCorrect(targetPath) {
  try {
    let currentPath = path.resolve(targetPath);
    // Walk up the path segments to verify casing
    while (true) {
      const parent = path.dirname(currentPath);
      if (parent === currentPath) break; // Reached root
      const base = path.basename(currentPath);
      if (!fs.existsSync(parent)) return false;
      const entries = fs.readdirSync(parent);
      if (!entries.includes(base)) {
        return false; // Case mismatch
      }
      currentPath = parent;
    }
    return true;
  } catch (err) {
    return false;
  }
}

// Recursively get files in a directory
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}

const srcDir = path.resolve(__dirname, 'src');
if (!fs.existsSync(srcDir)) {
  console.error("src directory not found!");
  process.exit(1);
}

const files = getFiles(srcDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));
let hasErrors = false;

// Regex to capture import paths
// Supports:
// import ... from 'path'
// import 'path'
const importRegexes = [
  /import\s+(?:[^\n'"]+\s+from\s+)?['"]([^'"]+)['"]/g,
  /export\s+(?:[^\n'"]+\s+from\s+)?['"]([^'"]+)['"]/g,
  /import\(['"]([^'"]+)['"]\)/g
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relativeFile = path.relative(__dirname, file);

  importRegexes.forEach(regex => {
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(content)) !== null) {
      const importPath = match[1];

      // We only care about relative imports
      if (importPath.startsWith('.') || importPath.startsWith('/')) {
        let resolvedPath;
        if (importPath.startsWith('/')) {
          resolvedPath = path.resolve(srcDir, importPath.slice(1));
        } else {
          resolvedPath = path.resolve(path.dirname(file), importPath);
        }

        // Try standard extensions if not specified
        const extensions = ['', '.jsx', '.js', '.json', '/index.js', '/index.jsx'];
        let matchedFile = null;
        for (const ext of extensions) {
          const testPath = resolvedPath + ext;
          if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
            matchedFile = testPath;
            break;
          }
        }

        if (!matchedFile) {
          console.error(`❌ Mismatch/Missing file in ${relativeFile}: Cannot resolve import '${importPath}'`);
          hasErrors = true;
        } else {
          if (!isCaseCorrect(matchedFile)) {
            console.error(`❌ Case sensitivity mismatch in ${relativeFile}:`);
            console.error(`   Imported: '${importPath}'`);
            console.error(`   Real path: '${path.relative(__dirname, matchedFile).replace(/\\/g, '/')}'`);
            hasErrors = true;
          }
        }
      }
    }
  });
});

if (!hasErrors) {
  console.log("✅ All Relative Imports resolved successfully with correct file casing!");
} else {
  console.log("❌ Case-sensitivity errors found.");
}
