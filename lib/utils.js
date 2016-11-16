import Promise from 'bluebird'
import path from 'path'
import { exec } from 'child_process'

const statAsync = Promise.promisify(require('fs').stat)
const readdirAsync = Promise.promisify(require('fs').readdir)

export const copyComponentsDir = (dir, componentsDir) => new Promise((resolve, reject) => {
  exec(`rm -rf ${componentsDir} || cp -R ${dir} ${componentsDir}`, (err, stdout, stderr) => {
    if(err) {
      reject(err)
    } else {
      resolve(true)
    }
  })
})

export const copyFile = (src, dest) => new Promise((resolve, reject) => {
  exec(`cp ${src} ${dest}`, (err, stdout, stderr) => {
    if(err) {
      reject(err)
    } else {
      resolve(true)
    }
  })
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