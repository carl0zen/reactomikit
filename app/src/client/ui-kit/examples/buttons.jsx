import React from 'react';
import { Padder, Inline } from '../helpers';
import { Panel } from '../layout';
import { Title, Code, H2 } from '../typography';
import { Button } from '../base';

const ContentExample = () => (
  <Panel>
    <Title>Buttons</Title>
    <Padder>
      <H2>Normal Button</H2>
      <Inline>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        <Button disabled>Disabled Button</Button>
      </Inline>
      <Inline>
        <Code>{ '<Button>Normal Button</Button>' }</Code>
        <Code>{ '<Button primary>Primary Button</Button>' }</Code>
        <Code>{ '<Button disabled>Disabled Button</Button>' }</Code>
      </Inline>
      <H2>Rounded Button</H2>
      <Inline>
        <Inline>
          <Button rounded>B</Button>
          <Code>{ '<Button rounded>B</Button>' }</Code>
        </Inline>
        <Inline>
          <Button rounded primary>A</Button>
          <Code>{ '<Button rounded primary>B</Button>' }</Code>
        </Inline>
        <Inline>
          <Button rounded primary disabled>C</Button>
          <Code>{ '<Button rounded primary disabled>C</Button>' }</Code>
        </Inline>
      </Inline>
    </Padder>
  </Panel>
);

export default ContentExample;
