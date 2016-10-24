import styled from 'styled-components';
import theme from './theme';

const { color, font, nav, menu } = theme;

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
      background-color ${theme.transition},
      padding ${theme.transition},
      border ${theme.transition};

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
  transition: all 0.3s;
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 0;
  border-radius: 3px;
  text-align: center;
  background-color: ${props => props.primary ? color.primary : color.info};
  color: ${color.white};
  border-color: ${color.border};

  &:hover,
  &:focus {
    border-color: ${props => props.primary ? color.primary : color.info};
    color: ${props => props.primary ? color.white : color.info};
    background-color: ${props => props.primary ? color.info : color.info};
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
