import React from 'react';
import { Padder, Inline, Relative, Column } from '../helpers';
import {
  Topbar,
  Panel,
  ScrollView,
  View,
  Viewport,
} from '../layout';
import { Title, H2, H3, P } from '../typography';

import Code from '../components/code/index';

const LayoutExample = () => (
  <Panel>
    <Title>Layout</Title>
    <Padder>
      <H2>Topbar</H2>
      <Topbar>
        <Title>Custom Toolbar</Title>
      </Topbar>
      <Inline>
        <Column>
          <H3>JSX</H3>
          <Code innerHTML className="html">
            {
    `<Topbar>
      <Title>Custom Toolbar</Title>
    </Topbar>
    `
            }
          </Code>
          <H3>Styled Component</H3>
          <Code>
            {
`export const Topbar = styled.header\`
  background: \${nav.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: \${nav.height};

  img {
    width: 230px;
  }
\`;`
            }
          </Code>
        </Column>
        <Column>
          <H3>HTML</H3>
          <Code>
            {
`
<div class="atom-top-bar">
  <img src="logo/src" />
  ...
</div>
`
            }
          </Code>
          <H3>SCSS</H3>
          <Code>
            {
    `
    $nav-background: #000;
    $nav-height: 70px;

    .atom-top-bar {
      background: $nav-background;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: $nav-height;

      img {
        width: 230px;
      }
    }
    `
            }
          </Code>
        </Column>
      </Inline>
      <H3>HTML</H3>
      <H2>Panel</H2>
      <Inline>
        <Panel>
          Some panel with white content
        </Panel>
        <Panel dark>
          Some panel with dark content
        </Panel>
      </Inline>
      <H2>View</H2>
      <Relative>
        <ScrollView>
          <View bg="red">
            <Title>Some title</Title>
            <Panel>This is some view content</Panel>
          </View>
        </ScrollView>
      </Relative>
      <H2>Viewport</H2>
      <Viewport />
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
    </Padder>
  </Panel>
);

export default LayoutExample;
