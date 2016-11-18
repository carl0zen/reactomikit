import { spawn } from 'child_process'
import path from 'path'

const NEXTJS_PATH = '/node_modules/next/dist/bin/next'

let nextjs

export const runNextJS = (port) => {
  process.stdout.write('Starting server...')
  nextjs = spawn(path.join(process.cwd(), NEXTJS_PATH), [`-p ${port}`], { cwd: path.join(__dirname, '..')})
  
  nextjs.stdout.on('data', function(data) {
    if(/Ready on/.test(data.toString('utf8'))) {
      console.log(`[Ready]\nUIKit listening on port ${port}.`)
    } else {
      console.log(data.toString('utf8'))
    }
  })
  
  nextjs.stderr.on('data', function(data) {
    console.log('NextJS error:', data.toString('utf8'))
  })
  
  nextjs.stdout.on('end', function(data) {
    console.log('Ending NextJS...')
    process.exit(0)
  })
  
  nextjs.on('exit', function(code) {
    if (code !== 0) {
      console.log('NextJS failed with code: ' + code)
      process.exit(code)
    }
  })
}