import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: lightgreen;
  border: 1px solid black;
`

const StyledInput = styled.input`
  border: 1px solid black;
`

export const Padder = styled.div` 
  padding: 0.5em;
  display: inherit; 
`

export const Inline = styled.div`
  display: inline; 
`
 

/**
 * @uikit Button
 * @import Button
 *
 * @description
 * This is a normal button,
 * part of the core components.
 *
 * @category core
 *
 */
export const Button = (props) => (
  <Padder>
    <StyledButton>{props.value || 'My Button'}</StyledButton>
  </Padder>
)

/**
 * @uikit Input
 * @import Input
 *
 * @description
 * This is a text input,
 * part of the core components.
 *
 * @category core
 *
 */
export const Input = (props) => (
  <Padder>
    <StyledInput type="text" placeholder="My input"/>
  </Padder>
)

/**
 * Some other helper
 * @description
 * This should not be included in the uikit
 */
export const helper = () => {
  
}
