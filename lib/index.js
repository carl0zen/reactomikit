#!/usr/bin/env node
import Promise from 'bluebird'
import { spawn } from 'child_process'
import { watch } from 'fs'
import path from 'path'
import { parseFile } from './parser'
import { copyComponentsDir, copyFile, listDirRecursive } from './utils'

const readFileAsync = Promise.promisify(require('fs').readFile)
const writeFileAsync = Promise.promisify(require('fs').writeFile)
const argv = require('minimist')(process.argv.slice(2))

const PORT = argv.p || argv.port || 3000
const PATH = path.join(process.cwd(), ...((argv.a || argv.path || './examples/ui').replace(/^\.\/?/g, '').replace(/\/?$/g, '').split('/')))
const EXTENSIONS = (argv.e || argv.extensions || 'js,jsx').split(',').map(e => e.trim())

const UIKIT_IDENTIFIER = 'uikit'
const INDEX_TEMPLATE = 'index.tpl.js'
const COMPONENTS_DIR = './pages/_components'
const NEXTJS_PATH = './node_modules/next/dist/bin/next'
const TEMPLATE_REGEXP = /\[\s?]\s?\/\/\s?\{\{\s?categories\s?}}/g
const ROOT_PATH = process.env['NODE_ENV'] === 'dev' || process.env['NODE_ENV'] === 'development' ? 'lib' : 'dist'
const SPLASH = `
      .__ __   .__  __   
 __ __|__|  | _|__|/  |_ 
|  |  \\  |  |/ /  \\   __\\
|  |  /  |    <|  ||  |  
|____/|__|__|_ \\__||__|  
              \\/
by AlphaSights\n`


let nextjs

/**
 * Generates the pages/index.js that NextJS reads
 *
 * @param dir
 * @param extensions
 */
const buildIndex = (dir, extensions) => new Promise((resolve, reject) => {
  buildUiKitAST(dir, extensions)
    .then(({categories}) => readFileAsync(path.join(process.cwd(), ROOT_PATH, INDEX_TEMPLATE))
      .then((data) => data.toString('utf8').replace(TEMPLATE_REGEXP, JSON.stringify(categories)))
    )
    .then((data) => writeFileAsync(path.join(process.cwd(), 'pages', 'index.js'), data))
    .then(() => resolve(true))
    .catch((err) => reject(err))
})

/**
 * Builds the UIKit AST
 *
 * ast = {
 *   categories: [
 *     {
 *       name: String,
 *       description: String,
 *       components: [
 *         {
 *           name: String,
 *           filePath: String,
 *           importName: String,
 *           description: String,
 *           code: String,
 *         }
 *       ]
 *     }
 *   ]
 * }
 *
 * @param dir
 * @param extensions
 */
const buildUiKitAST= (dir, extensions) => new Promise((resolve, reject) => {
  let ast = {
    categories: []
  }
  
  let categories = {}
  
  const getVariable = (arr, name) => {
    const val = arr.filter((variable) => variable.name === name)
    return val.length > 0 ? val[val.length - 1].value : undefined
  }
  
  listDirRecursive(dir, extensions)
    .then((fileList) => {
      fileList.map((filePath, index) => {
        parseFile(filePath)
          .then((fileAST) => {
            fileAST.map((jsDoc) => {
              const variables = jsDoc.variables
              const code = jsDoc.code || ''
              
              if(getVariable(variables, UIKIT_IDENTIFIER)) {
                const name = getVariable(variables, UIKIT_IDENTIFIER)
                const importName = getVariable(variables, 'import')
                const importPath = './' + path.join('_components', filePath.replace(dir, ''))
                const description = getVariable(variables, 'description')
                const category = getVariable(variables, 'category') || 'default'
                
                if(!importName) throw new Error(`Missing @import on '${name}' component.\nFile: ${importPath}`)
                if(!categories[category]) categories[category] = []
                
                categories[category].push({
                  name,
                  importName,
                  importPath,
                  description,
                  code,
                })
              }
            })
            
            if(index === fileList.length - 1) {
              Object.keys(categories).map((name) => {
                ast.categories.push({
                  name,
                  components: categories[name]
                })
              })
              
              resolve(ast)
            }
          })
          .catch((err) => reject(err))
      })
    })
    .catch((err) => reject(err))
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
  .then(() => copyComponentsDir(PATH, COMPONENTS_DIR))
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
