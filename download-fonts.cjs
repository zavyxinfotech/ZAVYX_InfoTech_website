const fs = require('fs');
const path = require('path');
const https = require('https');

// Custom typography pairing: Outfit (Display, 700/800) + Inter (Body, 400/500/600)
const cssUrl = 'https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Inter:wght@400;505;600&display=swap';

// Helper to make HTTPS requests
function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Helper to download binary files
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function run() {
  const fontsDir = path.resolve(__dirname, 'public/fonts');
  if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
  }

  // Modern browser user-agent to get WOFF2 formats
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  
  console.log('Fetching Google Fonts stylesheet...');
  const rawCss = await fetch(cssUrl, { 'User-Agent': userAgent });

  // Parse @font-face blocks
  const fontFaceBlocks = [];
  const regex = /@font-face\s*{([^}]+)}/g;
  let match;
  while ((match = regex.exec(rawCss)) !== null) {
    fontFaceBlocks.push(match[1]);
  }

  console.log(`Found ${fontFaceBlocks.length} font blocks in stylesheet.`);

  let fontFaceCSS = '';

  for (const block of fontFaceBlocks) {
    // Only target latin subset blocks
    if (!block.includes('unicode-range') || block.includes('U+0000-00FF') || block.includes('U+0131')) {
      const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/);
      const styleMatch = block.match(/font-style:\s*([^;]+)/);
      const weightMatch = block.match(/font-weight:\s*([^;]+)/);
      const urlMatch = block.match(/url\((https:[^)]+)\)/);

      if (familyMatch && weightMatch && urlMatch) {
        const family = familyMatch[1].replace(/\s+/g, '');
        const style = styleMatch ? styleMatch[1].trim() : 'normal';
        const weight = weightMatch[1].trim();
        const url = urlMatch[1];

        // Format names: outfit-700.woff2, inter-400.woff2, etc.
        const filename = `${family.toLowerCase()}-${weight}-${style}.woff2`;
        const destPath = path.join(fontsDir, filename);

        console.log(`Downloading ${family} (${weight}) -> ${filename}...`);
        await downloadFile(url, destPath);

        // Generate @font-face with font-display: swap pointing to local files
        fontFaceCSS += `
@font-face {
  font-family: '${familyMatch[1]}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${filename}') format('woff2');
}
`;
      }
    }
  }

  const cssPath = path.resolve(__dirname, 'src/fonts.css');
  fs.writeFileSync(cssPath, fontFaceCSS);
  console.log(`Successfully generated self-hosted CSS in ${cssPath}`);
}

run().catch(console.error);
