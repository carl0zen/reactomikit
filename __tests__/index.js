import { expect } from 'chai'
import { parse, parseFile, listDirRecursive, buildUiKitAST } from '../lib/jsDocs'
import path from 'path'

describe('JsDoc Parser', function() {
  it('should parse jsDocs from a file', () => {
    const fileName = path.join(process.cwd(), 'examples', 'ui', 'core.js')
    const expected = [
      {
        "variables": [
          {
            "name": "uikit",
            "value": "Button"
          },
          {
            "name": "import",
            "value": "Button"
          },
          {
            "name": "description",
            "value": "This is a normal button, part of the core components."
          },
          {
            "name": "category",
            "value": "core"
          }
        ],
        "code": "export const Button = (props) => (\n  <button value={props.value} />\n)"
      },
      {
        "variables": [
          {
            "name": "uikit",
            "value": "Input"
          },
          {
            "name": "import",
            "value": "Input"
          },
          {
            "name": "description",
            "value": "This is a text input, part of the core components."
          },
          {
            "name": "category",
            "value": "core"
          }
        ],
        "code": "export const Input = (props) => (\n  <input type=\"text\" placeholder=\"My input\"/>\n)"
      },
      {
        "variables": [
          {
            "name": "description",
            "value": "This should not be included in the uikit"
          }
        ],
        "code": "export const helper = () => {\n  \n}"
      }
    ]
  
  
    return new Promise((resolve, reject) => {
      parseFile(fileName).then((ast) => {
        resolve(Promise.all([
          expect(ast).to.eql(expected)
        ]))
      }).catch((err) => reject(err))
    })
  })
  
  it('should get all files on a directory', () => {
    return new Promise((resolve, reject) => {
      listDirRecursive(path.join(process.cwd(), 'examples', 'ui'), ['js', 'jsx']).then((list) => {
        resolve(Promise.all([
          expect(list).to.eql([
            process.cwd() + '/examples/ui/core.js',
            process.cwd() + '/examples/ui/form.js',
            process.cwd() + '/examples/ui/nested/composer.js',
          ])
        ]))
      }).catch((err) => reject(err))
    })
  })
  
  it('should build the ui kit ast given a diectory', () => {
    const expected = {
      "categories": [
        {
          "name": "core",
          "components": [
            {
              "name": "Button",
              "importName": "Button",
              "importPath": "/Users/sdelrio/src/_tinker/reactomikit/examples/ui/core.js",
              "description": "This is a normal button, part of the core components.",
              "code": "export const Button = (props) => (\n  <button value={props.value} />\n)"
            },
            {
              "name": "Input",
              "importName": "Input",
              "importPath": "/Users/sdelrio/src/_tinker/reactomikit/examples/ui/core.js",
              "description": "This is a text input, part of the core components.",
              "code": "export const Input = (props) => (\n  <input type=\"text\" placeholder=\"My input\"/>\n)"
            }
          ]
        },
        {
          "name": "form",
          "components": [
            {
              "name": "Form",
              "importName": "default",
              "importPath": "/Users/sdelrio/src/_tinker/reactomikit/examples/ui/form.js",
              "description": "This is a regular form.",
              "code": "export default (props) => (\n  <form>\n    {props.children}\n  </form>\n)"
            }
          ]
        },
        {
          "name": "nested",
          "components": [
            {
              "name": "Composer",
              "importName": "default",
              "importPath": "/Users/sdelrio/src/_tinker/reactomikit/examples/ui/nested/composer.js",
              "description": "This is a more complex component.",
              "code": "export default (props) => (\n  <Form>\n    <Input />\n    <Input />\n    <Button value=\"Submit\" />\n  </Form>\n)"
            }
          ]
        }
      ]
    }
  
  
    return new Promise((resolve, reject) => {
      buildUiKitAST(path.join(process.cwd(), 'examples', 'ui'), ['js', 'jsx']).then((ast) => {
        resolve(Promise.all([
          expect(ast).to.eql(expected)
        ]))
      }).catch((err) => reject(err))
    })
  })
})