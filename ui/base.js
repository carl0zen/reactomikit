import React from 'react'
import styled from "styled-components"

import {topbar} from "./topbar";

import {
  theme
} from "./theme"

const { color, font, transition } = theme;

const menu = {
  background: '#111'
};

/**
 * @uikit Menu
 * @import Menu
 *
 * @description Menu item
 *
 * @category Base
 */
export const Menu = styled.nav`
  line-height: ${topbar.height};
  position: relative;
  a {
    background: ${menu.background};
    padding: 20px 2em;
    cursor: pointer;
    color: ${color.white};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: ${font.small};
    font-weight: 600;
    transition:
      background-color ${transition},
      padding ${transition},
      border ${transition};
    &:hover {
      background-color: ${color.secondary};
      color: ${color.white};
      border-bottom: 3px solid ${color.white};
      border-collapse: collapse;
      padding: 7px 2em;
  }
}
`;

Menu.defaultProps = { children: React.createElement('a', {children: 'Menu item'}) }

/**
 * @uikit Link
 * @import Link
 *
 * @description Link item
 *
 * @category Base
 */
export const Link = styled.a`
  color: ${color.link};
  &:hover {
    color: ${color.link};
  }
`;

Link.defaultProps = { children: 'My link' }

/**
 * @uikit Logo
 * @import Logo
 *
 * @description Fixed-size logo
 *
 * @category Base
 */
export const Logo = styled.img`
  width: 130px;
`;

Logo.defaultProps = { src: 'http://cdn.uconnectlabs.com/wp-content/uploads/sites/4/2014/10/alpha-sights1-logo.jpg' }


/**
 * @uikit Label
 * @import Label
 *
 * @description Label item
 *
 * @category Base
 */
export const Label = styled.label`
  background: red;
`;

Label.defaultProps = { children: 'Label item' }