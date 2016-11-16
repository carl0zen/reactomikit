import Promise from 'bluebird'

const readFileAsync = Promise.promisify(require('fs').readFile)

const jsDocRegExp = /[^\S\r\n]*\/(?:\*{2})([\W\w]+?)\*\/([\W\w]+?)?(?=\s+\/\*{1,2}|$)/g
const jsVarsRegExp = /\@(\w+)\s+([^\@]+)/g
const starsRegExp = /^\s?\*\s?/gm
const newLineRegExp = /\n/g

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
