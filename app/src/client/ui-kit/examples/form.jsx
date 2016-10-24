import React from 'react';
import { Panel } from '../layout';
import { Title, H2, Code } from '../typography';
import { Input, Textarea } from '../form';
import { Padder, Inline } from '../helpers';

const FormExample = () => (
  <Panel>
    <Title dark>Form</Title>
    <Padder>
      <H2>Inputs</H2>
      <Inline>
        <Input placeholder="type..." />
        <Code>{ '<Input placeholder="type..." />' }</Code>
      </Inline>
      <Inline>
        <Input error placeholder="type..." />
        <Code>{ '<Input error placeholder="type..." />' }</Code>
      </Inline>
      <Inline>
        <Input disabled placeholder="type..." />
        <Code>{ '<Input disabled placeholder="type..." />' }</Code>
      </Inline>
      <H2>TextArea</H2>
      <Inline>
        <Textarea placeholder="Type your text" />
        <Textarea error placeholder="Type your text" />
        <Textarea disabled placeholder="Type your text" />
      </Inline>
    </Padder>
  </Panel>
);

export default FormExample;
