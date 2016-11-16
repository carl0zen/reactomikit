export const themer = (props, path, def = '') => accessObject(props.theme || {}, path) || def

export const copyComponentsDir = (dir) => new Promise((resolve, reject) => {
  exec(`rm -rf ${COMPONENTS_DIR} && cp -R ${dir} ${COMPONENTS_DIR}`, (err, stdout, stderr) => {
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

export const accessObject = (obj, path) => {
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')
  path.split('.').map((key) => {
    obj = obj !== false && obj[key] ? obj[key] : false
  })
  
  return obj
}