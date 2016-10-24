import React from 'react';
import { Padder, Inline } from '../helpers';
import { Panel } from '../layout';
import { Title, Code } from '../typography';
import { Button } from '../base';

const ContentExample = () => (
  <Panel>
    <Title>Buttons</Title>
    <Padder>
      <Inline>
        <Inline>
          <Code>{ '<Button>Normal Button</Button>' }</Code>
          <Button>Normal Button</Button>
        </Inline>
        <Inline>
          <Code>{'<Button primary>Primary Button</Button>'}</Code>
          <Button primary>Primary Button</Button>
        </Inline>
      </Inline>
      <Inline>
        <Inline>
          <Code>{'<Button disabled>Disabled Button</Button>'}</Code>
          <Button disabled primary>Disabled Button</Button>
        </Inline>
        <Inline>
          <Code>{'<Button disabled primary>Disabled Button</Button>'}</Code>
          <Button disabled>Disabled Button</Button>
        </Inline>
      </Inline>
    </Padder>
  </Panel>
);

export default ContentExample;
