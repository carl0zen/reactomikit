import React from "react";
import theme from "../theme";

const { icon } = theme;

/**
 * @uikit IconMinus
 * @import default
 *
 * @description Icon minus
 * @category Icons
 */
const IconMinus = (props) => (
  <svg width={props.width ? props.width : icon.size } height={ props.height ? props.height : icon.size } viewBox="0 399.5 58.101 58">
    <g transform="translate(0,-952.36218)">
      <path
        fill={props.fill || icon.color}
        d="M1.496,1379.229c-1.074,0.056-1.898,0.972-1.843,2.045c0.056,1.074,0.972,1.899,2.045,1.843H56.13
        c1.073,0.016,1.956-0.843,1.971-1.916c0.015-1.074-0.843-1.957-1.917-1.972c-0.019,0-0.037,0-0.055,0H1.699
        C1.631,1379.226,1.563,1379.226,1.496,1379.229z"/>
    </g>
  </svg>
)

export default IconMinus