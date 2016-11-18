import styled from 'styled-components';
import theme from './theme';
import { borderProps } from './helpers';

const { color, font } = theme;

const textInput = props => `
  color: ${props.error ? color.white : color.base};
  background-color: ${props.error ? color.alert : color.white};
  outline: none;
  font-size: ${font.base};
  border: none;
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
  ${borderProps(props)}
  width: ${props.width ? props.width : '100%'};
  opacity: ${props.disabled ? 0.3 : 1};
  padding: 15px;
  transition:
    background-color 600ms ease,
    color 600ms ease,
    box-shadow 600ms ease;
  &:focus {
    background-color: #FFF;
    box-shadow: inset 0 0 7px rgba(0,0,0,0.1);
    color: ${color.base}
  }
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    ${placeholder(props)}
  }
  &::-moz-placeholder { /* Firefox 19+ */
    ${placeholder(props)}
  }
  &:-ms-input-placeholder { /* IE 10+ */
    ${placeholder(props)}
  }
  &:-moz-placeholder { /* Firefox 18- */
    ${placeholder(props)}
  }
`;

export const Input = styled.input`
  ${props => textInput(props)}
`;

export const Textarea = styled.textarea`
  ${props => textInput(props)};
  height: ${props => props.height ? props.height : '130px'}
  resize: none;
  overflow: auto;
`;

export const Select = styled.select`
  ${props => textInput(props)};
  width: ${props => props.width ? props.width : 'auto'};
  height: 50px;
  cursor: pointer;
`

export const Form = styled.form`
  width: auto;
  position: relative;
`;

const placeholder = (props) => `
  color: ${props.error ? color.white : color.base};
`

export const Placeholder = styled.div`
  ${props => placeholder(props)};
  margin: 0 1em;
`