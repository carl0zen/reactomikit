import path from 'path'
import { exec } from 'child_process'
import { statSync, readdirSync } from 'fs'

export const copyFile = (src, dest) => {
  exec(`cp ${src} ${dest}`, (err, stdout, stderr) => {
    if(err) throw new Error(err)
  })
}

/**
 * Returns an array with all the files inside the given directory (recursive)
 *
 * @param dir
 * @param extensions
 * @return {Array}
 */
export const listDirRecursive = (dir, extensions = []) => {
  let results = []

  if (!Array.isArray(extensions)) throw new Error(`listDirRecursive() > 'extensions' should be an array.`)

  const list = readdirSync(dir)
  
  list.map((file) => {
    const filePath = path.join(dir, file)
    const stat = statSync(filePath)
    
    if (stat && stat.isDirectory()) {
      results = results.concat(listDirRecursive(filePath, extensions))
    } else {
      const ext = file.split('.')
  
      if (!extensions || ext.length === 1 || extensions.indexOf(ext[ext.length - 1]) > -1) {
        results.push(filePath)
      }
    }
  })
  
  return results;
}
