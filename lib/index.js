#!/usr/bin/env node
import Promise from 'bluebird'
import { spawn, exec } from 'child_process'
import { watch } from 'fs'
import path from 'path'
import { buildUiKitAST } from './jsdoc'

const readFileAsync = Promise.promisify(require('fs').readFile)
const writeFileAsync = Promise.promisify(require('fs').writeFile)
const argv = require('minimist')(process.argv.slice(2))

export const opts = {
  
}

const PORT = 3000
const PATH = path.join(process.cwd(), 'examples', 'ui')
const EXTENSIONS = ['js', 'jsx']
const INDEX_TEMPLATE = 'index.tpl.js'
const COMPONENTS_DIR = './pages/_components'
const NEXTJS_PATH = './node_modules/next/dist/bin/next'
const SPLASH = `
      .__ __   .__  __   
 __ __|__|  | _|__|/  |_ 
|  |  \\  |  |/ /  \\   __\\
|  |  /  |    <|  ||  |  
|____/|__|__|_ \\__||__|  
              \\/
by AlphaSights\n`

const TEMPLATE_REGEXP = /\[\s?]\s?\/\/\s?\{\{\s?categories\s?}}/g
const libPath = process.env['NODE_ENV'] === 'dev' || process.env['NODE_ENV'] === 'development' ? 'lib' : 'dist'

let nextjs

const buildIndex = (dir, extensions) => new Promise((resolve, reject) => {
  buildUiKitAST(dir, extensions)
    .then(({categories}) => readFileAsync(path.join(process.cwd(), libPath, INDEX_TEMPLATE))
      .then((data) => data.toString('utf8').replace(TEMPLATE_REGEXP, JSON.stringify(categories)))
    )
    .then((data) => writeFileAsync(path.join(process.cwd(), 'pages', 'index.js'), data))
    .then(() => resolve(true))
    .catch((err) => reject(err))
})

const copyComponentsDir = (dir) => new Promise((resolve, reject) => {
  exec(`rm -rf ${COMPONENTS_DIR} && cp -R ${dir} ${COMPONENTS_DIR}`, (err, stdout, stderr) => {
    if(err) {
      reject(err)
    } else {
      resolve(true)
    }
  })
})

const copyFile = (src, dest) => new Promise((resolve, reject) => {
  exec(`cp ${src} ${dest}`, (err, stdout, stderr) => {
    if(err) {
      reject(err)
    } else {
      resolve(true)
    }
  })
})

const runNextJS = () => {
  nextjs = spawn(NEXTJS_PATH, [`-p ${PORT}`])
  
  nextjs.stdout.on('data', function(data) {
    if(/Ready on/.test(data.toString('utf8'))) {
      console.log(`[Ready]\nUIKit listening on port ${PORT}.`)
    }
  })
  
  nextjs.stderr.on('data', function(data) {
    console.log('NextJS error: ', data.toString('utf8'))
  })
  
  nextjs.stdout.on('end', function(data) {
    console.log('Ending NextJS...')
  })
  
  nextjs.on('exit', function(code) {
    if (code != 0) {
      console.log('NextJS failed with code: ' + code)
    }
  })
}

buildIndex(PATH, EXTENSIONS)
  .then(() => copyComponentsDir(PATH))
  .then(() => runNextJS())
  .then(() => {
    watch(PATH, {recursive: true}, (eventType, filename) => {
      console.log(`Hot reload: ${filename}`)
    
      buildIndex(PATH, EXTENSIONS)
        .then(() => copyFile(`${PATH}/${filename}`, `${COMPONENTS_DIR}/${filename}`))
    })
    
    return Promise.resolve()
  })
  .catch((err) => console.log(`UIKit Error: `, err))

console.log(SPLASH)
process.stdout.write('Starting NextJS...')
