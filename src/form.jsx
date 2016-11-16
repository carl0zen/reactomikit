import styled from 'styled-components';
import theme from './theme';

const { color, font } = theme;

const textInput = props => `
  color: ${props.theme.form.color || color.base };
  background-color: ${props.theme.form.backgroundColor || color.white};
  border: ${props.theme.border || `1px solid ${color.border}`};

  ${props.error &&`
    color: ${props.theme.form.error.color || color.white};
    background-color: ${props.theme.form.error.backgroundColor || color.alert };
    border: ${props.theme.form.error.border || `1px solid ${color.alert}`};
    `
  }

  ${props.disabled &&`
    opacity: 0.3;
  `}

  outline: none;
  font-size: ${props.theme.form.fontSize || font.base};
  border-radius: ${props.theme.form.borderRadius || '3px'};
  padding: 15px;
  transition:
    background-color ${props.theme.transition || '300ms ease'},
    color ${props.theme.transition || '300ms ease'};

  &:focus {
    background-color: #FFF;
    box-shadow: ${props.theme.form.focus.boxShadow || '0 0 4px rgba(0,0,0,0.1)'};
    color: ${props.theme.form.focus.color || color.base}
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

export const Form = styled.form`

`;
