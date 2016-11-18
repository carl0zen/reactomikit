import styled from "styled-components";
import theme from "./theme";

const { color } = theme;

const button = {
  rounded: {
    size: "100px"
  }
};

/**
 * @uikit Button
 * @import Button
 *
 * @description This is a standard button in Dragon
 *
 * @category Core
 *
 */
export const Button = styled.button`
  border: 1px solid;
  font-family: inherit;
  font-size: 12px;
  background: none;
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
  border-color: ${color.border};
  text-align: center;
  &:hover {
    border: 1px solid ${color.info};
    color: ${color.info};
    background: ${color.white};
  }
  ${props => props.primary && `
    background-color: ${color.primary};
    color: ${color.white};
    &:hover {
      border-color: ${color.primary};
      background-color: ${color.white};
      color: ${color.primary};
    }
  `}
  ${props => props.disabled && `
    color: ${color.base};
    opacity: ${0.4}:
    background-color: ${color.white};
    pointer-events: none;
  `}
  ${props => props.rounded && `
    width: ${button.rounded.size};
    height: ${button.rounded.size};
    max-width: ${button.rounded.size};
    min-width: ${button.rounded.size};
    border-radius: 50%;
    line-height: ${button.rounded.size};
    padding: 0;
  `}
`;

Button.defaultProps = {children: 'Button'}

/**
 */
export const IconButton = styled.a`
  padding: 1em;
  display: block;
  svg path {
    transition:
      transform 300ms ease,
      fill 300ms ease,
      width 300ms ease
  }
  &:hover svg path {
    fill: ${color.link};
    transform: translate(0,3px);
  }
`;