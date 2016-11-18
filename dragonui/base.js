import styled from "styled-components";
import {topbar} from "./topbar";

import {
  theme
} from "./theme"

const { color, font, transition } = theme;

const menu = {
  background: '#111'
};

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

export const Link = styled.a`
  color: ${color.link};
  &:hover {
    color: ${color.link};
  }
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Label = styled.label`
  background: red;
`;