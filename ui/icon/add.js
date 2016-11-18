import React from "react";
import theme from "../theme";

const { icon } = theme;

/**
 * @uikit IconAdd
 * @import default
 *
 * @description Icon Add
 * @category Icons
 */
const IconAdd = (props) => (
  <svg width={props.width ? props.width : icon.size } height={ props.height ? props.height : icon.size } viewBox="21 21 58 58">
    <g transform="translate(0,-952.36218)">
      <path fill={icon.color} d="M50,1031.362c-1.104,0-2-0.896-2-2v-25H23c-1.104,0-2-0.896-2-2s0.896-2,2-2h25v-25c0-1.104,0.896-2,2-2s2,0.896,2,2v25h25
        c1.104,0,2,0.896,2,2s-0.896,2-2,2H52v25C52,1030.467,51.104,1031.362,50,1031.362z"/>
    </g>
  </svg>
)

export default IconAdd