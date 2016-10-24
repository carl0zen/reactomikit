import React from 'react';

import { Button } from '../../ui-kit/base';
import { H1, H2 } from '../../ui-kit/typography';
import { ScrollView, Topbar } from '../../ui-kit/layout';

const displayName = 'Home';
const defaultProps = {};
const propTypes = {};

const component = () => (
  <ScrollView>
    <Topbar>
      <H2>Heading</H2>
    </Topbar>
    <H1>Hola</H1>
    <Button>Find more about</Button>

  </ScrollView>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;


import React from 'react';

import { Padder, Inline, Center } from '../../ui-kit/helpers';
import { Title, Code, P, Headline, Powered, Footnote, H2 } from '../../ui-kit/typography';
import {
  View,
  Viewport,
  ScrollView,
  Panel,
} from '../../ui-kit/layout';
import {
  Button,
  Link,
} from '../../ui-kit/base';

import logo from '../../ui-kit/assets/logo.svg';

import FormExample from '../../ui-kit/examples/form';
import TopbarExample from '../../ui-kit/examples/topbar';
import TypographyExample from '../../ui-kit/examples/typography';

const UIKit = () => (
  <div>
    <TopbarExample />
    <View>
      <Viewport>
        <img role="presentation" src={logo} />
        <Headline>
          Themable, Native, Atomic, Reusable, Crossplatform and easily extensible UI-Toolkit
        </Headline>
        <Powered>
          powered by React and <Link target="_blank" href="https://github.com/styled-components/styled-components">styled-components</Link>
        </Powered>
        <Footnote>
          built with 💚 by <Link target="_blank" href="https://github.com/carlosepp">perezpriego</Link>
        </Footnote>
        <Center><Code>npm install react-ui-kit --save</Code></Center>
      </Viewport>
      <TypographyExample />
      <FormExample />
      <Panel>
        <Title dark>Content</Title>
        <Padder>
          <H2>ScrollView</H2>
          <Inline>
            <Code>
              {
                '<ScrollView />'
              }
            </Code>
            <Code>
              {
                '<ScrollView horizontal/>'
              }
            </Code>
          </Inline>
          <Inline>
            <ScrollView height="200px" width="50%">
              <P>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially
                 unchanged. It was popularised in the 1960s with the release
                 of Letraset sheets containing
                  Lorem Ipsum passages, and
                  more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
              </P>
              <P>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially
                 unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing
                  Lorem Ipsum passages, and more recently
                   with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
              </P>
            </ScrollView>
            <ScrollView horizontal height="200px" width="50">
              <P>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially
                 unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing
                  Lorem Ipsum passages, and more recently
                   with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
              </P>
              <P>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially
                 unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing
                  Lorem Ipsum passages, and more recently
                   with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
              </P>
            </ScrollView>
          </Inline>
          <H2>Code</H2>
        </Padder>
      </Panel>
      <Panel>
        <Title dark>Buttons</Title>
        <Padder>
          <Inline>
            <Code>{ '<Button>Normal Button</Button>' }</Code>
            <Button>Normal Button</Button>
          </Inline>
          <Inline>
            <Code>{'<Button primary>Primary Button</Button>'}</Code>
            <Button primary>Primary Button</Button>
          </Inline>
          <Inline>
            <Code>{'<Button disabled>Disabled Button</Button>'}</Code>
            <Button disabled primary>Disabled Button</Button>
          </Inline>
          <Inline>
            <Code>{'<Button disabled primary>Disabled Button</Button>'}</Code>
            <Button disabled>Disabled Button</Button>
          </Inline>
        </Padder>
      </Panel>
    </View>
  </div>
);

export default UIKit;
