import styled from 'styled-components';
import theme from './theme';

const { color, font, nav, menu, transition, button } = theme;

export const Menu = styled.nav`
  line-height: ${props => props.theme.nav.height || nav.height};
  position: relative;

  a {
    background: ${props => props.theme.menu.background || menu.background};
    padding: ${props => props.theme.menu.padding || '20px 2em'};
    cursor: pointer;
    color: ${props => props.theme.menu.color || color.white};
    letter-spacing: ${props => props.theme.menu.letterSpacing || '3px'};
    text-transform: ${props => props.theme.menu.textTransform || 'uppercase'};
    font-size: ${props => props.theme.menu.fontSize || font.small};
    font-weight: ${props => props.theme.menu.fontWeight || '600'};
    transition:
      background-color ${props => props.theme.transition || transition},
      padding ${props => props.theme.transition || transition},
      border ${props => props.theme.transition || transition};

    &:hover {
      background: ${props => props.theme.menu.hover.background || color.secondary};
      color: ${props => props.theme.menu.hover.color || color.white};
      border-bottom: 3px solid ${props => props.theme.menu.hover.borderBottom || color.white};
      border-collapse: collapse;
      padding: ${props => props.theme.menu.hover.padding || '7px 2em'};
  }
}
`;

export const Button = styled.button`
  border: ${props => props.theme.button.border || '1px solid transparent' };
  font-family: ${props => props.theme.button.fontFamily || 'inherit'};
  font-size: ${props => props.theme.button.fontSize || '12px' };
  cursor: pointer;
  display: inline-block;
  text-transform: ${props => props.theme.button.textTransform || 'uppercase'};
  letter-spacing: 0;
  font-weight: ${props => props.theme.button.fontWeight || '700' };
  outline: none;
  position: relative;

  transition:
    background-color ${props => props.theme.transition || transition},
    opacity ${props => props.theme.transition || transition};
  text-transform: uppercase;
  padding: ${props => props.theme.button.padding || '10px 20px' };
  margin: 0;
  border-radius: ${props => props.theme.button.borderRadius || '3px'};
  text-align: center;
  background-color: ${props => props.theme.button.backgroundColor || color.info};
  color: ${props => props.theme.button.color || color.white};

  ${props => props.primary && `
    background-color: ${props => props.theme.color.primary || color.primary};
  `}

  ${props => props.disabled && `
    color: ${props => props.theme.button.disabledColor || color.base};
    opacity: ${props => props.theme.button.opacity || 0.4}:
    background-color: ${props => props.theme.color.disabled || color.white};
    pointer-events: none;
  `}

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.button.hoverBorder || color.info};
    color: ${props => props.theme.button.hoverColor || color.info};
    background: ${props => props.theme.button.hoverBackground || color.white};

    ${props => props.primary && `
      border-color: ${props => props.theme.color.primary || color.primary};
      background-color: ${props => props.theme.buttton.primary.backgroundColor ||color.white};
      color: ${props => props.theme.buttton.primary.color || color.primary};
      `
    }
  }

  ${props => props.rounded && `
    width: ${props => props.theme.button.rounded.size || button.rounded.size};
    height: ${props => props.theme.button.rounded.size || button.rounded.size};
    max-width: ${props => props.theme.button.rounded.size || button.rounded.size};
    min-width: ${props => props.theme.button.rounded.size || button.rounded.size};
    border-radius: 50%;
    line-height: ${props => props.theme.button.rounded.size || button.rounded.size};
    padding: 0;
  `}
`;

export const Link = styled.a`
  color: ${props => props.theme.link.color || color.link};

  &:hover {
    color: ${props => props.theme.link.hover.color || color.link};
  }
`;

export const Logo = styled.img`
  width: ${props => props.theme.logo.width || '130px' };
`;

export const Label = styled.label`
  background: ${props => props.theme.label.background || color.info };
  padding: ${props => props.theme.label.padding || '5px 10px'};
  border-radius: ${props => props.theme.label.borderRadius || '3px'};
  color: ${props => props.theme.label.color || color.white};
`;
