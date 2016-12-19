import styled from "styled-components";
import {
  borderProps,
  alignmentProps,
  marginProps,
  paddingProps,
  sizeProps,
  theme
} from "./index";

const { color, font } = theme;

const placeholderColor = props => `
  color: ${props.error ? color.white : color.base};
`;

const textInput = props => `
  ${alignmentProps(props)}
  ${borderProps(props)}
  ${marginProps(props)}
  ${paddingProps(props)}
  ${sizeProps(props)}
  color: ${props.error ? color.white : color.black};
  background-color: ${props.error ? color.alert : color.white};
  outline: none;
  font-size: ${font.base};
  border: none;
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
  ${borderProps(props)}
  width: ${props.width ? props.width : "100%"};
  opacity: ${props.disabled ? 0.3 : 1};
  padding: 10px;
  transition:
    background-color 600ms ease,
    color 600ms ease,
    box-shadow 600ms ease;

  &:focus,
  &:active {
    background-color: ${props.error ? color.alert : color.white};
    box-shadow: inset 0 0 7px rgba(0,0,0,0.2);
  }

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    ${placeholderColor(props)}
  }

  &::-moz-placeholder { /* Firefox 19+ */
    ${placeholderColor(props)}
  }

  &:-ms-input-placeholder { /* IE 10+ */
    ${placeholderColor(props)}
  }

  &:-moz-placeholder { /* Firefox 18- */
    ${placeholderColor(props)}
  }
`;

export const Input = styled.input`
  ${props => textInput(props)}
`;

export const Textarea = styled.textarea`
  ${props => textInput(props)};
  height: ${props => props.height ? props.height : "130px"}
  resize: none;
  overflow: auto;
`;

export const Select = styled.select`
  ${props => textInput(props)};
  width: ${props => props.width ? props.width : "auto"};
  height: 50px;
  cursor: pointer;
  &:focus { 
    box-shadow: none;
  }
`;

export const Form = styled.form`
  width: auto;
  position: relative;
`;

export const Placeholder = styled.div`
  ${props => placeholderColor(props)};
  margin: 0 1em;
`;

export const Error = styled.span`
  text-align: right;
  display: block;
  margin: 10px;
  font-size: ${font.base};
  color: ${color.alert};
`;
