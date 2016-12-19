/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */

import React from "react";
import styled from "styled-components";

import {
  theme,
  fillProps,
  marginProps,
  paddingProps
} from "./index";

const { color, icon } = theme;

export const StyledIcon = styled.i`
  ${marginProps}
  ${paddingProps}
  width: ${props => props.size || icon.size};
  height: ${props => props.size || icon.size};
  display: flex;
  path,
  polygon {
    fill: ${color.base};
    ${fillProps}
  }

  svg {
    width: 100%;
  }
`;

const icons = {
  logo: () => (
    <svg viewBox="-52.409 -10.576 792.909 797.838">
      <path d="M493.014,207.005c1.37,7.876,2.395,16.095,2.395,24.313c0,47.259-23.287,89.381-58.901,115.066 c-39.384-49.656-65.067-110.613-70.204-177.393c-0.686-8.903-1.027-17.807-1.027-27.054c0-17.465,1.37-34.588,4.109-51.368 c5.48-33.904,16.096-66.438,30.822-96.23C210.146,54.612,68.369,221.045,43.712,423.779c-2.398,15.753-3.768,32.192-3.768,48.629 c0,2.396,0,4.794,0.343,6.85c3.767,164.721,138.352,297.25,303.757,297.25c167.805,0,304.102-136.296,304.102-304.1 c0-1.714,0-3.423,0-5.137C646.435,355.631,584.448,258.373,493.014,207.005z M343.361,767.605 c-43.492-30.822-71.917-81.505-71.917-139.036c0-57.535,28.425-108.219,71.917-139.038c43.491,30.822,71.915,81.506,71.915,139.038 S386.853,736.783,343.361,767.605z" />
    </svg>
  ),

  add: () => (
    <svg viewBox="0 0 50 50">
      <g transform="translate(0,-1002.3622)">
        <path d="m 23,1041.3622 0,-12 -12,0 0,-4 12,0 0,-12 4,0 0,12 12,0 0,4 -12,0 0,12 -4,0 z" />
      </g>
    </svg>
  ),

  arrowUp: () => (
    <svg viewBox="0 0 22 22" >
      <g>
        <polygon points="10.707 5.99909 3 13.70709 4.414 15.12109 10.707 8.82809 17.001 15.12109 18.415 13.70709" />
      </g>
    </svg>
  ),

  arrowDown: () => (
    <svg viewBox="0 0 22 22" >
      <g>
        <polygon points="17 5.99909 10.706 12.29309 4.413 5.99909 3 7.41409 10.706 15.12109 18.414 7.41409" />
      </g>
    </svg>
  ),

  close: () => (
    <svg viewBox="0 0 64 64">
      <g>
        <polygon points="64,5.943 58.057,0 32,26.057 5.943,0 0,5.943 26.057,32 0,58.057 5.943,64 32,37.943 58.057,64 64,58.057    37.943,32  " />
      </g>
    </svg>
  ),

  maximize: () => (
    <svg viewBox="0 0 868.75 868.75">
      <g transform="translate(812.1052,650.29176)">
        <path d="m -377.1052,174.08324 0,-44.375 -140.93656,0 -140.93656,0 313.12406,-313.126 313.12406,-313.126 0.31786,140.626 0.31786,140.626 44.36964,0 44.36964,0 0,-217.5 0,-217.5 -216.875,0 -216.875,0 0,45 0,45 140,0 c 77,0 140,0.3299 140,0.7332 0,0.4033 -140.29505,141.02831 -311.76676,312.50004 -171.47173,171.471713 -312.09673,311.766763 -312.5,311.766763 -0.40329,0 -0.73324,-62.9999999 -0.73324,-140 l 0,-140.000003 -45,0 -45,0 0,216.8750031 0,216.8749969 217.5,0 217.5,0 0,-44.375 z" />
      </g>
    </svg>
  ),

  minimize: () => (
    <svg viewBox="0 0 926 926">
      <g transform="translate(1888.4011,595.38893)">
        <path d="m -1669.9676,168.22777 c 88.5779,-89.018604 161.5623,-161.8521036 162.1875,-161.8521036 0.6758,0 1.1367,60.0520996 1.1367,148.1250036 l 0,148.125 39.3785,0 39.3785,0 -0.316,-216.562504 -0.316,-216.562496 -215.625,0 -215.625,0 0,39.374996 0,39.375 147.8125,0.3177 c 85.7436,0.1842 147.8125,0.7867 147.8125,1.4346 0,0.6144 -72.958,73.7588 -162.1289,162.543204 l -162.1288,161.4261 28.0559,28.0767 c 15.4308,15.4422 28.3419,28.0664 28.6914,28.0538 0.3494,-0.013 73.1082,-72.8563 161.6862,-161.875 z m 679.5741,-342.4735 0,-39.3785 -148.125,0 c -87.9832,0 -148.125,-0.4612 -148.125,-1.1358 0,-0.6247 72.9681,-73.7644 162.1512,-162.5328 l 162.1512,-161.3971 -28.3494,-28.3495 -28.3495,-28.3495 -161.4295,162.1323 c -88.7863,89.1728 -161.9323,162.1324 -162.5467,162.1324 -0.6479,0 -1.2504,-62.0689 -1.4346,-147.8125 l -0.3177,-147.8125 -39.375,0 -39.375,0 0,215.625 0,215.625 216.5625,0.316 216.5625,0.316 0,-39.3785 z" />
      </g>
    </svg>
  ),

  minus: () => (
    <svg viewBox="0 0 50 50">
      <g transform="translate(0,-1002.3622)">
        <path d="m 11,1025.3622 0,4 50,0 0,-4 z" />
      </g>
    </svg>
  ),

  emailComposer: () => (
    <svg viewBox="0 0 48 48">
      <g>
        <polygon points="24,13.118 20.037,16 27.963,16  " />
        <polygon points="33.85,20 33,19.434 33,20  " />
        <polygon points="33,21 33,21.63 33.904,21  " />
        <polygon points="28.009,26.32 35,34.186 35,21.457  " />
        <polygon points="13,21.457 13,34.186 19.991,26.32  " />
        <path d="M27.184,26.896l-2.897,2.015C24.2,28.97,24.1,29,24,29s-0.2-0.03-0.286-0.089l-2.897-2.015L13.613,35h20.774L27.184,26.896   z" />
        <path d="M24,27.891l8-5.564V17H16v5.326L24,27.891z M20.5,19h7c0.275,0,0.5,0.224,0.5,0.5S27.775,20,27.5,20h-7   c-0.276,0-0.5-0.224-0.5-0.5S20.224,19,20.5,19z M20.5,22h7c0.275,0,0.5,0.224,0.5,0.5S27.775,23,27.5,23h-7   c-0.276,0-0.5-0.224-0.5-0.5S20.224,22,20.5,22z" />
        <path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M36,35.5c0,0.005-0.003,0.009-0.003,0.016   c-0.001,0.035-0.013,0.069-0.021,0.105c-0.008,0.027-0.011,0.059-0.021,0.084c-0.012,0.023-0.03,0.043-0.044,0.066   c-0.021,0.033-0.041,0.064-0.069,0.092c-0.003,0.003-0.005,0.008-0.008,0.011c-0.023,0.021-0.051,0.031-0.076,0.046   c-0.023,0.016-0.045,0.032-0.072,0.043C35.625,35.986,35.563,36,35.5,36h-23c-0.063,0-0.125-0.014-0.184-0.037   c-0.026-0.011-0.047-0.027-0.072-0.043s-0.053-0.025-0.076-0.046c-0.003-0.003-0.005-0.008-0.008-0.011   c-0.028-0.027-0.048-0.061-0.069-0.092c-0.015-0.022-0.034-0.043-0.044-0.066c-0.012-0.025-0.015-0.057-0.021-0.084   c-0.009-0.036-0.021-0.07-0.021-0.105c0-0.006-0.003-0.011-0.003-0.016v-15c0-0.017,0.008-0.03,0.009-0.046   c0.002-0.018-0.002-0.036,0.001-0.054c0.003-0.017,0.015-0.032,0.02-0.048c0.01-0.03,0.021-0.057,0.035-0.084   c0.008-0.015,0.012-0.032,0.022-0.047c0.001-0.002,0.001-0.004,0.002-0.006c0.009-0.013,0.022-0.019,0.032-0.03   c0.021-0.025,0.043-0.046,0.068-0.067c0.012-0.01,0.02-0.024,0.033-0.033l0.009-0.006c0.001,0,0.002-0.001,0.003-0.002L15,18.232   V16.5c0-0.276,0.224-0.5,0.5-0.5h2.838l5.368-3.904c0.006-0.004,0.013-0.005,0.02-0.009c0.03-0.021,0.063-0.032,0.098-0.044   c0.027-0.011,0.053-0.024,0.082-0.03c0.032-0.006,0.063-0.003,0.095-0.003c0.032,0,0.064-0.003,0.095,0.003   c0.028,0.005,0.054,0.019,0.082,0.03c0.034,0.013,0.067,0.024,0.097,0.044c0.006,0.004,0.014,0.004,0.02,0.009L29.662,16H32.5   c0.275,0,0.5,0.224,0.5,0.5v1.732l2.766,1.844c0.002,0,0.002,0.001,0.002,0.001l0.01,0.006c0.014,0.009,0.021,0.023,0.033,0.033   c0.024,0.021,0.047,0.042,0.067,0.067c0.011,0.011,0.022,0.018,0.032,0.03c0.001,0.002,0.001,0.004,0.002,0.006   c0.01,0.015,0.014,0.032,0.021,0.047c0.016,0.027,0.025,0.055,0.035,0.084c0.006,0.017,0.016,0.031,0.02,0.048   c0.004,0.018,0,0.036,0.002,0.054C35.992,20.47,36,20.483,36,20.5V35.5z" />
        <polygon points="15,20 15,19.434 14.151,20  " />
        <polygon points="15,21.63 15,21 14.095,21  " />
      </g>
    </svg>
  ),

  email: () => (
    <svg viewBox="0 0 512 512">
      <path className="cls-1" d="M458.63,111.88L445.76,98.94c-0.14-.14-0.26-0.3-0.39-0.45h-0.13c-0.3.33-.58,0.66-0.89,1L426.2,117.64,411.7,132.18l-0.5.52h21.6V167h25c0-3.74,0-7.49,0-11.23q0-11.13,0-22.26c0-.22,0-0.43,0-0.72h21.55l-0.55-.58Z" />
      <path d="M377.93,207.8L374.36,211l-47.35,43c-1.28,1.16-2.53,2.36-4.07,3.82,11.78,11.79,23.44,23.34,35,34.92q32.7,32.51,65.2,65.23c9,9.07,5.59,22.9-6.29,26.12-6.14,1.65-11.18-.43-15.57-4.83l-64.84-64.84c-11.93-11.93-23.82-23.88-36-36.11-1.52,1.39-2.88,2.52-4.1,3.67Q276.2,300.37,256,318.64c-7.44,6.72-15.16,6.78-22.56.1l-38.92-35.33c-1.75-1.58-3.51-3.11-6.19-5.55a35.42,35.42,0,0,1-3.23,4.48q-48.43,48.61-97,97c-9.14,9.1-22.85,6.3-26.39-5.38-2-6.44.2-11.73,4.89-16.41l77.83-77.66c7.14-7.22,14.41-14.35,22-21.9l-39.76-36.16q-30-27.34-60.12-54.62C62,162.94,60,157.8,61.49,151.69a14.55,14.55,0,0,1,10.8-11c5.93-1.66,10.88.27,15.3,4.31q42.09,38.23,84.16,76.35l72.85,66.19c1.36-1.19,2.68-2.28,3.9-3.41q55-50,110-100A100.61,100.61,0,0,1,360,78.94q-149.83-.08-299.66,0C31.06,79,6,100.52.94,129.32A26.47,26.47,0,0,1,0,132.44v260c0.78,3.06,1.48,6.13,2.36,9.09,7.65,26.56,31.28,44.36,59.42,44.36q171.69,0.16,343.37,0c12.05,0,24.38.54,36.11-1.68,25.07-4.73,42.72-24.24,47.26-49.62a11.78,11.78,0,0,1,.83-2.15V223.53A100.73,100.73,0,0,1,377.93,207.8Z" />
      <path d="M445.32,66.05A66.68,66.68,0,1,0,512,132.74,66.76,66.76,0,0,0,445.32,66.05Zm12.56,66.71c0,0.29,0,.51,0,0.72q0,11.13,0,22.26c0,3.74,0,7.49,0,11.23h-25V132.7H411.2l0.5-.52,14.49-14.54,18.15-18.17c0.31-.31.6-0.65,0.89-1h0.13c0.13,0.15.25,0.31,0.39,0.45l12.87,12.94,20.25,20.31,0.55,0.58H457.88Z" />
    </svg>
  ),

  search: () => (
    <svg viewBox="0 0 24 24">
      <path d="M9,2.5c-3.859,0-7,3.14-7,7s3.141,7,7,7s7-3.14,7-7S12.859,2.5,9,2.5z M9,14.5c-2.757,0-5-2.243-5-5s2.243-5,5-5  s5,2.243,5,5S11.757,14.5,9,14.5z" />
      <path d="M15.707,14.293l-1.414,1.414L19.586,21c0.391,0.39,1.024,0.39,1.414,0c0.391-0.391,0.391-1.024,0-1.414L15.707,14.293z" />
    </svg>
  )
};

export const Icon = props => (
  <StyledIcon { ...props }>
    { icons[props.name]() }
  </StyledIcon>
);

Icon.displayName = Icon.name;
Icon.propTypes = {
  name: React.PropTypes.string
};

/* eslint-enable max-len */
/* eslint-enable react/no-multi-comp */
/* eslint-enable react/display-name */
/* eslint-enable import/prefer-default-export */
