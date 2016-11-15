import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../lib/Theme'
import { Button } from '../lib/Base'

const xButton = (props) => (
  <div>{props.children}</div>
)

export default (props) => (
  // <ThemeProvider theme={theme}>
    <Button>hola</Button>
  // </ThemeProvider>
)
