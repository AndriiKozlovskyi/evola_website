import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

export async function optimizeImage(inputPath: string): Promise<void> {
  const fileName = path.basename(inputPath)
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
    
    console.log(`Optimized: ${fileName} -> ${path.basename(outputPath)}`)
  } catch (error) {
    console.error(`Error optimizing ${fileName}:`, error)
  }
}