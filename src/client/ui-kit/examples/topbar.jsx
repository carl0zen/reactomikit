import React from 'react';

import { Topbar } from '../layout';
import { Menu, Link, Logo } from '../base';
import logo from '../assets/logo.svg';

const TopbarExample = () => (
  <Topbar>
    <Logo src={logo} />
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
