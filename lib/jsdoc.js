import Promise from 'bluebird'
import path from 'path'

const readFileAsync = Promise.promisify(require('fs').readFile)
const readdirAsync = Promise.promisify(require('fs').readdir)
const statAsync = Promise.promisify(require('fs').stat)

const jsDocRegExp = /[^\S\r\n]*\/(?:\*{2})([\W\w]+?)\*\/([\W\w]+?)?(?=\s+\/\*{1,2}|$)/g
const jsVarsRegExp = /\@(\w+)\s+([^\@]+)/g
const starsRegExp = /^\s?\*\s?/gm
const newLineRegExp = /\n/g

const UIKIT_IDENTIFIER = 'uikit'

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
export const buildUiKitAST= (dir, extensions) => new Promise((resolve, reject) => {
  let ast = {
    categories: []
  }
  
  let categories = {}
  
  /*
   ast = {
     categories: [
       {
         name: String,
         description: String,
         components: [
           {
             name: String,
             filePath: String,
             importName: String,
             description: String,
             code: String,
           }
         ]
       }
     ]
   }
   */
  
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

/**
 * Returns an array with all the files inside the given directory (recursive)
 *
 * @param dir
 * @param extensions
 * @return {Promise}
 */
export const listDirRecursive = (dir, extensions = []) => new Promise((resolve, reject) => {
  let results = []
  
  if(!Array.isArray(extensions)) throw new Error(`'extensions' should be an array.`)
  
  readdirAsync(dir)
    .then((list) => {
      list.map((file, index) => {
        const filePath = path.join(dir, file)
  
        statAsync(filePath)
          .then((stat) => {
            if(stat && stat.isDirectory()) {
              listDirRecursive(filePath, extensions)
                .then((result) => {
                  results = results.concat(result)
                  
                  if(index === list.length - 1) resolve(results)
                })
                .catch((err) => reject(err))
            } else {
              const ext = file.split('.')
              
              if(!extensions || ext.length === 1 || extensions.indexOf(ext[ext.length - 1]) > -1) results.push(filePath)
              if(index === list.length - 1) resolve(results)
            }
          })
          .catch((err) => reject(err))
      })
    })
    .catch((err) => reject(err))
})

/**
 * Parses the JsDocs of a file
 *
 * @param fileName
 * @returns {Promise}
 */
export const parseFile = (fileName) => new Promise((resolve, reject) => {
  readFileAsync(fileName)
    .then((data) => resolve(parse(data)))
    .catch((err) => reject(err))
})

/**
 * Parses the given contents and builds an AST of shape
 *
 * [
 *   {
 *     variables: [
 *       {
 *         name: String,
 *         value: String
 *       },
 *       ...
 *     ],
 *     code: String
 *   },
 *   ...
 * ]
 *
 *
 * @param contents
 * @returns {Object}
 */
export const parse = (contents) => {
  let docMatch
  let ast = []
  
  while(docMatch = jsDocRegExp.exec(contents)) {
    const jsDoc = docMatch[1]
    const code = docMatch[2].replace(/^\n+|\n+$/gm,'');
    let varsMatch
    
    ast.push({
      variables: [],
      code,
    })
    
    while(varsMatch = jsVarsRegExp.exec(jsDoc)) {
      const name = varsMatch[1]
      const value = varsMatch[2].replace(starsRegExp, '').replace(newLineRegExp, ' ').trim()
      
      ast[ast.length - 1].variables.push({
        name,
        value,
      })
    }
  }
  
  return ast
}
