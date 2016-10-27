import React from 'react';

import { Topbar } from '../layout';
import { Menu, Link } from '../base';
import Logo from 'components/logo';

const TopbarExample = () => (
  <Topbar>
    <Logo/>
    <Menu>
      <Link>Theme</Link>
      <Link>Helpers</Link>
      <Link>Layout</Link>
      <Link>Typography</Link>
      <Link>Buttons</Link>
      <Link>Buttons</Link>
    </Menu>
  </Topbar>
);

export default TopbarExample;
