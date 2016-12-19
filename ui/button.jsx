import styled from "styled-components";

import {
  flexProps,
  marginProps,
  theme
} from "./index";

const { color, font, radius } = theme;

const button = {
  rounded: {
    size: "100px"
  }
};

export const Button = styled.button`
  ${marginProps}
  background: none;
  border: none;
  appearance: none;
  user-select: none;
  border-radius: ${radius};
  color: ${color.base}
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: ${font.base};
  font-weight: bold;
  outline: none;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding: ${
    props =>
      (props.tiny && "3px 5px") ||
      (props.small && "7px 10px") ||
      (props.medium && "10px 13px") ||
      "10px 20px"
  };

  white-space: nowrap;
  width: ${props => props.width ? props.width : "auto"};

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover {
    color: ${color.base};
    background: ${color.white};
    padding: ${
      props =>
        (props.tiny && "3px 5px 1px 5px") ||
        (props.small && "5px 10px 2px 5px") ||
        (props.medium && "8px 13px 5px 13px") ||
        "10px 20px 7px 20px"
    };
    border-bottom: 3px solid rgba(0,0,0,0.2);
  }

  &:active {
    border-bottom: 1px solid rgba(0,0,0,0.2);
    transform: translateY(2px);
    opacity: 0.95;

    padding: ${
      props =>
        (props.tiny && "3px 5px 3px 5px") ||
        (props.small && "5px 10px 4px 5px") ||
        (props.medium && "8px 13px 7px 13px") ||
        "10px 20px 9px 20px"
    };
  }

  ${props => props.primary && `
    background-color: ${color.primary};
    color: ${color.white};
    border-color: ${color.primary};

    &:hover,
    &:active {
      // need to kill the important once we kill paint (styled components order of injection is sometimes unpredictable)
      background-color: ${color.primary} !important 
      opacity: 0.8;
      color: ${color.white};
    }
  `}

  ${props => props.disabled && `
    opacity: ${0.4}:
    pointer-events: none;
    cursor: not-allowed;

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

export const IconButton = styled.a`
  padding: 0.5em;
  ${flexProps({ center: true })};

  path,
  polygon {
    transition:
      transform 300ms ease,
      fill 300ms ease,
      width 300ms ease
  }

  &:hover {
    background-color: ${color.border};
    border-radius: ${radius};
    path, polygon {
      fill: ${color.link};
      transform: translate(0,3px);
    }
  }
`;
