const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targets = [
  { dir: 'public/images', maxWidth: 1200, quality: 80 },
  { dir: 'public/images/services', maxWidth: 600, quality: 75 },
  { dir: 'src/assets/images', maxWidth: 1200, quality: 80 },
  { dir: 'src/assets/images/team', maxWidth: 250, quality: 75 }
];

async function processDir({ dir, maxWidth, quality }) {
  const dirPath = path.resolve(__dirname, dir);
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(dirPath, file);
      const nameWithoutExt = path.basename(file, ext);
      const outputPath = path.join(dirPath, `${nameWithoutExt}.webp`);

      try {
        const metadata = await sharp(inputPath).metadata();
        let pipeline = sharp(inputPath);
        
        // Resize if width is larger than maxWidth
        if (metadata.width > maxWidth) {
          pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
        }

        await pipeline
          .webp({ quality })
          .toFile(outputPath);

        const origSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        console.log(`Compressed ${dir}/${file} (${(origSize/1024).toFixed(1)} KB) -> ${nameWithoutExt}.webp (${(newSize/1024).toFixed(1)} KB) [Saved ${((1 - newSize/origSize)*100).toFixed(1)}%]`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

async function run() {
  for (const target of targets) {
    await processDir(target);
  }
  console.log("Image compression complete!");
}

run();
