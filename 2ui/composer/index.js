import React from 'react'
import Form from '../form'
import { Button, Input, Inline } from '../core'

/**
 * @uikit Composer
 * @import default
 *
 * @description
 * This is a more complex component.
 *
 * @category complex
 *
 */
export default (props) => (
  <Form>
    <Inline>
      <Input />
      <Input />
      <Button value="Submit" />
    </Inline>
  </Form>
)
