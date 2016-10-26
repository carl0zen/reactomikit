import styled from 'styled-components';
import theme from './theme';

const { color, font } = theme;

const textInput = props => `
  color: ${props.error ? color.white : color.base};
  background-color: ${props.error ? color.alert : color.white};
  outline: none;
  font-size: ${font.base};
  border: 1px solid ${props.error ? color.alert : color.border};
  border-radius: 3px;
  opacity: ${props.disabled ? 0.3 : 1};
  padding: 15px;
  transition:
    background-color 300ms ease,
    color 300ms ease;

  &:focus {
    background-color: #FFF;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
    color: ${color.base}
}

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${props.error ? color.white : color.base};
}

  &::-moz-placeholder { /* Firefox 19+ */
    color: ${props.error ? color.white : color.base};
}

  &:-ms-input-placeholder { /* IE 10+ */
    color: ${props.error ? color.white : color.base};
}

  &:-moz-placeholder { /* Firefox 18- */
    color: ${props.error ? color.white : color.base};
}
`;

export const Input = styled.input`
  ${props => textInput(props)}
`;

export const Textarea = styled.textarea`
  ${props => textInput(props)}
`;
