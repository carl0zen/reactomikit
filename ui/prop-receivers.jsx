import { css } from "styled-components";

import {
  theme
} from "./index";

const { color } = theme;

export const borderProps = props => `
  ${props.borderBottom && `border-bottom: ${props.borderWidth || "1px"} solid ${color.border}`};
  ${props.borderTop && `border-top: ${props.borderWidth || "1px"} solid ${color.border}`};
  ${props.borderLeft && `border-left: ${props.borderWidth || "1px"} solid ${color.border}`};
  ${props.borderRight && `border-right: ${props.borderWidth || "1px"} solid ${color.border}`};
`;

export const marginProps = props => `
  ${props.marginBottom && `
    margin-bottom: ${typeof (props.marginBottom) === "string" ? props.marginBottom : "1em"}
  `};
  ${props.marginTop && `
    margin-top: ${typeof (props.marginTop) === "string" ? props.marginTop : "1em"}
  `};
  ${props.marginLeft && `
    margin-left: ${typeof (props.marginLeft) === "string" ? props.marginLeft : "1em"}
  `};
  ${props.marginRight && `
    margin-right: ${typeof (props.marginRight) === "string" ? props.marginRight : "1em"}
  `};
`;

export const paddingProps = props => `
  ${props.paddingBottom && `
    padding-bottom: ${typeof (props.paddingBottom) === "string" ? props.paddingBottom : "1em"}
  `};
  ${props.paddingTop && `
    padding-top: ${typeof (props.paddingTop) === "string" ? props.paddingTop : "1em"}
  `};
  ${props.paddingLeft && `
    padding-left: ${typeof (props.paddingLeft) === "string" ? props.paddingLeft : "1em"}
  `};
  ${props.paddingRight && `
    padding-right: ${typeof (props.paddingRight) === "string" ? props.paddingRight : "1em"}
  `};
  ${props.padding && `
    padding: ${typeof (props.padding) === "string" ? props.padding : "1em"}
  `};
`;

export const alignmentProps = props => `
  ${["center", "left", "right"].indexOf(props.align) !== -1 && `text-align: ${props.align}`}
`;

export const positioningProps = props => `
  ${props.relative && "position: relative"};
  ${props.absolute && "position: absolute"};
  ${props.static && "position: static"};
  ${props.fixed && "position: fixed"};
`;


export const sizeProps = props => `
  ${props.width && `width: ${props.width || "100%"}`};
  ${props.height && `height: ${props.height || "100%"}`};
  ${props.maxWidth && `max-width: ${props.maxWidth || "100%"}`};
  ${props.maxHeight && `max-height: ${props.maxHeight || "100%"}`};
  ${props.minWidth && `min-width: ${props.minWidth || "100%"}`};
  ${props.minHeight && `min-height: ${props.minHeight || "100%"}`};
`;

export const backgroundColorProps = props => css`
  background-color: ${color[props.backgroundColor] ? color[props.backgroundColor] : props.backgroundColor };
`;

export const themeColor = colorName => theme.color[colorName] || theme.color.base;

export const fillProps = props => css`
  fill: ${color[props.fill] ? color[props.fill] : props.fill };
`;
