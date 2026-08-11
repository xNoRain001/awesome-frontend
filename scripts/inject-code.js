import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import pkg from 'fs-extra'

const { readFileSync, writeJSONSync } = pkg
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const filePath = join(__dirname, '../src/store/list.ts')
const codePathPrefix = join(__dirname, '../public/code')
const s = readFileSync(filePath, 'utf-8')
const matched = s.match(/const list = (\[[\s\S]*\])/)
const list = eval(matched[1])

for (let i = 0, l = list.length; i < l; i++) {
  const { id } = list[i]
  const res = { js: '' }
  const code = readFileSync(
    join(__dirname, `../src/views/preview/${id}.vue`),
    'utf-8'
  )
  const [_, html, js, css] = code.match(
    /(<template>[\s\S]*<\/template>)[\s\S]*(<script lang="ts" setup>[\s\S]*<\/script>)[\s\S]*(<style (?:lang="scss" )?scoped>[\s\S]*<\/style>)/
  )

  res.html = html
  res.css = css

  if (js !== '<script lang="ts" setup></script>') {
    res.js = js
  }

  writeJSONSync(join(codePathPrefix, `${id}.json`), res)
}
