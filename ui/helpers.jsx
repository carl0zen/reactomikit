import styled, { css } from "styled-components";

import {
  borderProps,
  marginProps,
  backgroundColorProps,
  paddingProps,
  alignmentProps,
  positioningProps,
  sizeProps,
  theme
} from "./index";

const { screenSizes } = theme;

// Placeholders

export const spacer = props => `
  > * {
    ${props.spaced || "margin"}: ${props.amount || "1em"};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const flexProps = props => `
  display: flex;
  ${props.spaced && spacer(props)};
  ${props.wrap && "flex-wrap: wrap"};
  ${props.columnReverse && "flex-direction: column-reverse"};
  ${props.rowReverse && "flex-direction: row-reverse"};
  ${props.start && "align-items: flex-start"};
  ${props.end && "align-items: flex-end"};
  ${props.center && "align-items: center"};
  ${props.jcSpaceBetween && "justify-content: space-between"};
  ${props.jcSpaceAround && "justify-content: space-around"};
  ${props.jcEnd && "justify-content: flex-end"};
  ${props.jcStart && "justify-content: flex-start"};
  ${props.jcCenter && "justify-content: center"};
`;

export const overlay = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);  
`;

// You can use this like ${media.phone`width: 100%`}

export const media = Object.keys(screenSizes).reduce((accumulator, label) => {
  const acc = accumulator;
  acc[label] = (...args) => css`
    @media (max-width: ${screenSizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Spacing

export const Padder = styled.section`
  padding: ${props => props.amount ? props.amount : "2em"};
`;

export const Spacer = styled.div`
  ${props => spacer(props)}
`;

// Flex

export const Flex = styled.div`
  display: flex;
  ${flexProps}
`;

export const Inline = styled.div`
  ${marginProps};
  ${paddingProps};
  ${sizeProps};
  ${alignmentProps};
  ${borderProps};
  ${positioningProps};
  ${flexProps}
  flex-direction: row;
  width: ${props => props.width || "100%"};
  align-items: center;
`;

export const Column = styled(Inline)`
  flex-direction: column;
  justify-content: initial;

  &:last-child {
    margin: 0;
  }

  h3 {
    flex-grow: 0;
  }
`;

// Alignment

export const Center = styled.div`
  text-align: center;
  margin: 0 auto;
`;

// Positioning

export const Relative = styled.div`
  ${props => borderProps(props)};
  position: relative;
`;

export const Absolute = styled.div`
  ${props => marginProps(props)};
  ${props => alignmentProps(props)};
  ${props => borderProps(props)};
  position: absolute;
  ${props => props.right && `right: ${props.padded ? "1em" : "0"}; `}
  ${props => props.left && `left: ${props.padded ? "1em" : "0"}`};
  ${props => props.top && `top: ${props.padded ? "1em" : "0"}`};
  ${props => props.bottom && `bottom: ${props.padded ? "1em" : "0"}`};
`;

// Patterns
export const Collapsable = styled.section`
  opacity: 1;
  display: flex;
  flex-direction: column;
  ${props => props.animate && `
    transition: 
      transform 300ms linear,
      opacity 300ms ease-in,
      width 200ms ease-in,
      max-height 200ms ease-in 200ms;
    max-height: 9999px;
    transform: scale(1);
    transform-origin: 100% 100%;

    ${props.collapsed && `
      transform: scale(0);
      transition: 
        transform 300ms ease-out,
        opacity 300ms ease-out,
        width 300ms ease-out 600ms;
    `}
  `}

  ${props => props.collapsed && `
    opacity: 0;
    max-height: 0;
  `}
`;

export const Ellipsis = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : "100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Circle = styled.span`
  ${backgroundColorProps}
  display: inline-block;
  border-radius: 50%;
  padding: ${props => props.padding || '10px'};
`;

export const Hidden = styled.div`
  display: none;
`;
