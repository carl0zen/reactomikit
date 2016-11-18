import React from "react";
import theme from "../theme";

const { icon } = theme;

/**
 * @uikit IconClose
 * @import default
 *
 * @description Icon close
 * @category Icons
 */
const IconClose = (props) => (
  <svg width={props.width ? props.width : icon.size } height={ props.height ? props.height : icon.size } viewBox="67.5 367.5 642 610">
    <path fill={props.color ? props.color : icon.color } d="M618.5,399L398.75,618.75c-9,9-23.25,9-31.5,0L147.5,399c-9-9-23.25-9-31.5,0l0,0c-9,9-9,23.25,0,31.5l219.75,219.75
    c9,9,9,23.25,0,31.5l-220.5,220.5c-9,9-9,23.25,0,31.5l0,0c9,9,23.25,9,31.5,0L366.5,714c9-9,23.25-9,31.5,0l220.5,220.5
    c9,9,23.25,9,31.5,0l0,0c9-9,9-23.25,0-31.5L431,682.5c-9-9-9-23.25,0-31.5l219.75-219.75c9-9,9-23.25,0-31.5l0,0
    C641.75,390.75,627.5,390.75,618.5,399z"/>
  </svg>
)

export default IconClose