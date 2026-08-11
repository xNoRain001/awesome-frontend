import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import pkg from 'fs-extra'

const { readFileSync, writeFileSync } = pkg
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const filePath = join(__dirname, '../dist/index.html')
const html = readFileSync(filePath, 'utf-8')
const s = '<div id="app" class="isolate"></div>'
const index = html.indexOf(s) + s.length
const ads = [
  '<script src="https://pl30089665.effectivecpmnetwork.com/63/66/9f/63669f53e7f3d2ff7eed63576f076946.js"></script>'
]
writeFileSync(
  filePath,
  `${html.slice(0, index)}\n${ads.join('\n')}${html.slice(index)}`
)
