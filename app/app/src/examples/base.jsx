import React from 'react';
import { Padder, Inline } from '../helpers';
import { Panel } from '../layout';
import { Title, H2 } from '../typography';
import { Menu, Button, Link, Logo, Label } from '../base';
import Code from '../components/code';

const BaseExample = () => (
  <Panel>
    <Title>Base</Title>
    <Link />
    <Logo />
    <Label />
    <Padder>
      <H2>Menu</H2>
      <Menu>
        <Link>Theme</Link>
        <Link>Helpers</Link>
        <Link>Layout</Link>
        <Link>Typography</Link>
        <Link>Buttons</Link>
        <Link>Buttons</Link>
      </Menu>
      <H2>Classic Buttons</H2>
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
      <H2>Rounded Buttons</H2>
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

export default BaseExample;
