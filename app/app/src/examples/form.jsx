import React from 'react';
import { Panel } from '../layout';
import { Title, H2 } from '../typography';
import { Input, Textarea } from '../form';
import { Padder, Inline } from '../helpers';
import Code from '../components/code';

const FormExample = () => (
  <Panel>
    <Title>Form</Title>
    <Padder>
      <H2>Inputs</H2>
      <Inline>
        <Input placeholder="type..." />
        <Input error placeholder="type..." />
        <Input disabled placeholder="type..." />
      </Inline>
      <Inline>
        <Code>{ '<Input placeholder="type..." />' }</Code>
        <Code>{ '<Input error placeholder="type..." />' }</Code>
        <Code>{ '<Input disabled placeholder="type..." />' }</Code>
      </Inline>
      <H2>TextArea</H2>
      <Inline>
        <Textarea placeholder="Type your text" />
        <Textarea error placeholder="Type your text" />
        <Textarea disabled placeholder="Type your text" />
      </Inline>
      <Inline>
        <Code>{ '<Textarea placeholder="Type your text" />' }</Code>
        <Code>{ '<Textarea error placeholder="Type your text" />' }</Code>
        <Code>{ '<Textarea disabled placeholder="Type your text" />' }</Code>
      </Inline>
    </Padder>
  </Panel>
);

export default FormExample;
