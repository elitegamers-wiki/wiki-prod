import sharp from 'sharp'
import { readdir, stat, mkdir } from 'fs/promises'
import { join, extname, relative } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PUBLIC_DIR = join(__dirname, '../docs/public')
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1080
const QUALITY = 60

async function getFiles(dir) {
  const files = []
  const items = await readdir(dir, { withFileTypes: true })

  for (const item of items) {
    const fullPath = join(dir, item.name)
    if (item.isDirectory()) {
      files.push(...await getFiles(fullPath))
    } else {
      const ext = extname(item.name).toLowerCase()
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  return files
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase()
  const relPath = relative(PUBLIC_DIR, filePath)

  try {
    const statBefore = await stat(filePath)
    const sizeBefore = statBefore.size

    // Skip small images (< 100KB)
    if (sizeBefore < 100 * 1024) {
      return null
    }

    const image = sharp(filePath)
    const metadata = await image.metadata()

    let pipeline = image

    // Resize if larger than max dimensions
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
    }

    // Compress based on format
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 })
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true })
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: QUALITY })
    }

    const buffer = await pipeline.toBuffer()

    // Only save if smaller
    if (buffer.length < sizeBefore) {
      await sharp(buffer).toFile(filePath)
      const saved = sizeBefore - buffer.length
      const percent = ((saved / sizeBefore) * 100).toFixed(1)
      console.log(`${relPath}: ${(sizeBefore/1024).toFixed(0)}KB -> ${(buffer.length/1024).toFixed(0)}KB (-${percent}%)`)
      return saved
    } else {
      console.log(`${relPath}: skipped (already optimized)`)
      return 0
    }
  } catch (err) {
    console.error(`Error processing ${relPath}: ${err.message}`)
    return 0
  }
}

async function main() {
  console.log('Optimizing images in docs/public...\n')
  console.log(`Max dimensions: ${MAX_WIDTH}x${MAX_HEIGHT}`)
  console.log(`Quality: ${QUALITY}%\n`)

  const files = await getFiles(PUBLIC_DIR)
  console.log(`Found ${files.length} images\n`)

  let totalSaved = 0
  for (const file of files) {
    const saved = await optimizeImage(file)
    if (saved) totalSaved += saved
  }

  console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`)
}

main().catch(console.error)
