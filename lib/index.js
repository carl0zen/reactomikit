#!/usr/bin/env node
import path from 'path'
import { watch } from 'fs'
import { copyFile } from './utils'
import { buildIndex, buildUIDir } from './uikit'
import { runNextJS } from './nextjs'

const argv = require('minimist')(process.argv.slice(2))

const INDEX_TEMPLATE_FILENAME = 'index.tpl.js'
const SRC_BASE_PATH = argv.a || argv.path ? process.cwd() : path.join(__dirname, '..')
const SRC_DIR = '/ui'
const DEST_DIR = '/pages/_ui'
const SPLASH = `
      .__ __   .__  __
 __ __|__|  | _|__|/  |_
|  |  \\  |  |/ /  \\   __\\
|  |  /  |    <|  ||  |
|____/|__|__|_ \\__||__|
              \\/
 by AlphaSights\n`

const PORT = argv.p || argv.port || 3010
const SRC_PATH = path.join(SRC_BASE_PATH, SRC_DIR)
const DEST_PATH = path.join(__dirname, '..', DEST_DIR)
const EXTENSIONS = (argv.e || argv.extensions || 'js,jsx').split(',').map(e => e.trim())

const main = () => {
  console.log(SPLASH)
  
  buildIndex(INDEX_TEMPLATE_FILENAME, SRC_PATH, DEST_PATH, EXTENSIONS)
  buildUIDir(SRC_PATH, path.join(__dirname, '..', DEST_DIR))
  runNextJS(PORT)
  
  watch(SRC_PATH, {recursive: true}, (eventType, filename) => {
    console.log('Regenerating...', filename)
    buildIndex(INDEX_TEMPLATE_FILENAME, SRC_PATH, DEST_PATH, EXTENSIONS)
    copyFile(path.join(SRC_PATH, filename), path.join(DEST_PATH, filename))
  })
}

main()
