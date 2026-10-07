// Bakes the rendered page into dist/index.html so crawlers and link previews
// see real content without running JavaScript. Runs after both Vite builds.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'dist/index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = fs.readFileSync(indexPath, 'utf8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`)

fs.writeFileSync(indexPath, template.replace(marker, `<div id="root">${render()}</div>`))
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('prerender: wrote dist/index.html')
