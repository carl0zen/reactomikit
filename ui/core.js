import React from 'react'

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
  <button>{props.value || 'My Button'}</button>
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
  <input type="text" placeholder="My input"/>
)

/**
 * Some other helper
 * @description
 * This should not be included in the uikit
 */
export const helper = () => {
  
}

/**
 * @uikit Paper
 * @import Paper
 *
 * @description
 * some paper component dasdasdasd input asdasdas
 *
 * @category core
 *
 */
export const Paper = (props) => (
  <div style={{border: '1px solid black', padding: '0.5em'}}>hola</div>
)