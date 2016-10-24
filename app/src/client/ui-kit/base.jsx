import styled from 'styled-components';
import theme from './theme';

const { color, font, nav, menu, transition } = theme;

export const Menu = styled.nav`
  line-height: ${nav.height};
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

export const Button = styled.button`
  border: 1px solid;
  font-family: inherit;
  font-size: 12px;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0;
  font-weight: 700;
  outline: none;
  position: relative;
  transition:
    background-color ${transition},
    opacity ${transition};
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 0;
  border-radius: 3px;
  text-align: center;
  background-color: ${color.info};
  ${props => props.primary && `background-color: ${color.primary};`}
  ${props => props.disabled && `
    background-color : ${color.border};
    opacity: 0.4;
    pointer-events: none;
    `
  }
  color: ${color.white};

  &:hover,
  &:focus {
    border: 1px solid ${color.info};
    color: ${color.info};
    background-color: ${color.white};

    ${props => props.primary && `
      border-color: ${color.primary};
      background-color: ${color.white};
      color: ${color.primary};
      `
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
