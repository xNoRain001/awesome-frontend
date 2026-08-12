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
  '<script src="https://pl30794219.effectivecpmnetwork.com/a2/16/07/a21607012a47ce673a770b524b473971.js"></script>'
]
writeFileSync(
  filePath,
  `${html.slice(0, index)}\n${ads.join('\n')}${html.slice(index)}`
)
