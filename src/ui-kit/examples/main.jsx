import React from 'react';
import { Viewport } from '../layout';
import { Headline, Powered, Footnote, Code } from '../typography';
import { Center } from '../helpers';
import { Link } from '../base';
import Logo from 'components/logo';

const MainExample = () => (
  <Viewport>
    <Logo />
    <Headline>
      Themable, Native, Atomic, Reusable, Universal and easily extensible UI-Toolkit
    </Headline>
    <Powered>
      powered by React and <Link target="_blank" href="https://github.com/styled-components/styled-components">styled-components</Link>
    </Powered>
    <Footnote>
      built with 💚 by <Link target="_blank" href="https://github.com/carlosepp">perezpriego</Link>
    </Footnote>
    <Center>
      <Code>npm install react-ui-kit --save</Code>
    </Center>
  </Viewport>
);

export default MainExample;
