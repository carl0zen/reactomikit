export const themer = (props, path, def = '') => accessObject(props.theme || {}, path) || def

export const accessObject = (obj, path) => {
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')
  path.split('.').map((key) => {
    obj = obj !== false && obj[key] ? obj[key] : false
  })
  
  return obj
}