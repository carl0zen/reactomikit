import styled, { keyframes } from "styled-components";
import {
  theme
} from "./index";

const { color } = theme;

// keyframes returns a unique name based on a hash of the contents of the keyframes
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const burn = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow( 0 0 $radius * 1.5 ${color.primary});
    filter: hue-rotate(30deg);
  }
  25% {
    transform: scale(0.85) rotate(-1deg);
    filter: drop-shadow( 0 0 $radius * 2 ${color.primary});
    filter: hue-rotate(50deg);
    filter: invert(0.1);
  }
  60% {
    transform: scaleY(1.07) rotate(-2deg);
    filter: drop-shadow( 0 0 $radius * 2 ${color.primary});
    filter: hue-rotate(60deg);
    filter: invert(2);
  }
  100% {
    transform: scale(0.85) rotate(1deg);
    filter: invert(10);
    filter: hue-rotate(280deg);
  }
`;

const animationProps = props => `
  ${props.duration || "3s"} ${props.func || "linear"} ${props.loop || "infinite"} ${props.alternate || "alternate"};
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} ${animationProps};
`;

export const scale = (amount, selector) => `
  transition: transform 300ms ease-in-out;

  &${selector} {
    transform: scale(${amount});
  }
`;
