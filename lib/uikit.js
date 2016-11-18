import path from 'path'
import { exec } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { listDirRecursive } from './utils'
import { parseFile } from './parser'

const UIKIT_IDENTIFIER = 'uikit'
const TEMPLATE_REGEXP = /\[\s?]\s?\/\/\s?\{\{\s?categories\s?}}/g

/**
 * Generates the pages/index.js that NextJS reads
 *
 * @param indexTemplateFilename
 * @param srcPath
 * @param destPath
 * @param extensions
 * @param identifier
 */
export const buildIndex = (indexTemplateFilename, srcPath, destPath, extensions) => {
  const ast = buildUiKitAST(srcPath, destPath, extensions)
  const indexTplContents = readFileSync(path.join(__dirname, indexTemplateFilename))
  const indexContents = indexTplContents.toString('utf8').replace(TEMPLATE_REGEXP, JSON.stringify(ast.categories, null, 2))
  const indexPath = path.join(__dirname, '..', 'pages', 'index.js')
  
  writeFileSync(indexPath, indexContents)
}

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
 * @param srcPath
 * @param destPath
 * @param extensions
 */
export const buildUiKitAST= (srcPath, destPath, extensions) => {
  let ast = {
    categories: []
  }
  
  let categories = {}
  
  const getVariable = (arr, name) => {
    const val = arr.filter((variable) => variable.name === name)
    return val.length > 0 ? val[val.length - 1].value : undefined
  }
  
  const fileList = listDirRecursive(srcPath, extensions)
  
  fileList.map((filePath, index) => {
    const fileAST = parseFile(filePath)
    
    fileAST.map((jsDocNode) => {
      const jsDocVariables = jsDocNode.variables
      const code = jsDocNode.code || ''
      
      if(getVariable(jsDocVariables, UIKIT_IDENTIFIER)) {
        const name = getVariable(jsDocVariables, UIKIT_IDENTIFIER)
        const importName = getVariable(jsDocVariables, 'import')
        const importPath = '.' + path.sep + path.join(destPath.split(path.sep).pop(), filePath.replace(srcPath, ''))
        const description = getVariable(jsDocVariables, 'description')
        const category = getVariable(jsDocVariables, 'category') || 'default'
        
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
  })
  
  Object.keys(categories).map((name) => {
    ast.categories.push({
      name,
      components: categories[name]
    })
  })
  
  return ast
}

export const buildUIDir = (srcPath, destPath) => {
  exec(`rm -rf ${destPath}`)
  exec(`cp -R ${srcPath} ${destPath}`, (err, stdout, stderr) => {
    if(err) throw new Error(err)
  })
}
