import { optimizeImage } from '../utils/imageOptimizer'
import { promises as fs } from 'fs'
import path from 'path'

async function optimizeImages() {
  const assetsDir = path.join(process.cwd(), 'assets')
  
  try {
    const files = await fs.readdir(assetsDir)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    
    await Promise.all(
      imageFiles.map(file => optimizeImage(path.join(assetsDir, file)))
    )
  } catch (error) {
    console.error('Error processing images:', error)
  }
}

optimizeImages()