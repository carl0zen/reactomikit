import React from 'react';

import { Panel } from '../layout';
import { Padder, Inline } from '../helpers';
import { Title, Code, H4, H3, H2, H1, P, Headline, Powered, Footnote } from '../typography';
import { Link } from '../base';

const TypographyExample = () => (
  <Panel>
    <Title dark>Typography</Title>
    <Padder>
      <Inline>
        <H1> Heading h1 </H1>
        <Code>
          { '<H1>Heading h1</H1>' }
        </Code>
      </Inline>
    </Padder>
    <Padder>
      <Inline>
        <H2> Heading h2 </H2>
        <Code>
          { '<H2>Heading h2</H2>' }
        </Code>
      </Inline>
    </Padder>
    <Padder>
      <Inline>
        <H3> Heading h3 </H3>
        <Code>
          { '<H3>Heading h3</H3>' }
        </Code>
      </Inline>
    </Padder>
    <Padder>
      <Inline>
        <H4> Heading h4 </H4>
        <Code>
          { '<H4>Heading h4</H4>' }
        </Code>
      </Inline>
    </Padder>
    <Padder>
      <Inline>
        <H4> Code </H4>
        <Code>
          { 'if this then than' }
        </Code>
      </Inline>
    </Padder>
    <Padder>
      <Inline>
        <Link>Some awesome link </Link>
        <Code>
          { '<Link>Link</Link>' }
        </Code>
      </Inline>
    </Padder>
    <Padder>
      <Inline>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
        <Code>
          {
`<P>
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
</P>
`
          }
        </Code>
      </Inline>
      <Inline>
        <Headline> Headline</Headline>
        <Code>
          { '<Headline> Headline</Headline>' }
        </Code>
      </Inline>
      <Inline>
        <Powered> Powered</Powered>
        <Code>
          { '<Powered> Powered</Powered>' }
        </Code>
      </Inline>
      <Inline>
        <Footnote> Footnote</Footnote>
        <Code>
          { '<Footnote> Footnote</Footnote>' }
        </Code>
      </Inline>
    </Padder>
  </Panel>
);

export default TypographyExample;
