import React from 'react'
import { App } from './_ui/layout'
import { CollapsableCode } from './_ui/typography'

const categories = [] // {{categories}}

export default (props) => {
  const res = (
    <App>
      <h1>Component UI Kit aka "Kitchen Sink"</h1>
      
      {
        categories.map((category) => (
          <section key={category.name}>
            <h2>{category.name}</h2>
            {
              category.components && category.components.map((component) => {
                const { importPath, importName } = component
                const module = require(importPath)[importName]
                
                return (
                  <section key={component.name}>
                    <h3>{component.name}</h3>
                    <p>{component.description}</p>
                    <CollapsableCode>{component.code}</CollapsableCode>
                    {React.createElement(module)}
                  </section>
                )
              })
            }
            <hr />
          </section>
        ))
      }
    </App>
  )
  
  return res
}