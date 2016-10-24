import React from 'react';
import { Padder, Inline } from '../helpers';
import { Panel, ScrollView } from '../layout';
import { Title, Code, H2, P } from '../typography';

const LayoutExample = () => (
  <Panel>
    <Title>Layout</Title>
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
    </Padder>
  </Panel>
);

export default LayoutExample;
